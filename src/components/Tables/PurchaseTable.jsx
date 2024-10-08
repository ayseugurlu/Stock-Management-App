import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import useStockCall from "../../hooks/useStockCall";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";


export default function PurchaseTable({ handleOpen, setInitialState }) {
  const { purchases } = useSelector((state) => state.stock);
  const { deleteStockData } = useStockCall();

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
      renderCell: ({row}) => {new Date(row.createdAt).toLocaleString("de-DE")}
    },
    {
      field: "firmId",
      headerName: "Firm Name",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      editable: false,
      flex: 2,
      valueGetter: (value) => value?.name,
    },
    {
      field: "brandId",
      headerName: "Brand Name",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      editable: false,
      flex: 2,
      valueGetter: (value) => value?.name,
    },
    {
      field: "productId",
      headerName: "Product Name",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      editable: false,
      flex: 2,
      valueGetter: (value) => value?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 110,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 110,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 150,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 40,
      flex: 1,
      renderCell: (params) => (
        <>
          {}
          <EditOutlinedIcon
            sx={{ color: "primary.main" }}
            onClick={() => {
              handleOpen();
              setInitialState({
                _id: params.row._id,
                firmId: params.row?.firmId,
                brandId: params.row?.brandId,
                productId: params.row?.productId,
                quantity: params.row?.quantity,
                price: params.row?.price,
              });
            }}
          />

          <DeleteSweepOutlinedIcon
            sx={{ color: "secondary.contrastText" }}
            onClick={() => deleteStockData("purchases", params.id)}
          />
        </>
      ),
    },
  ];

  function getRowId(row) {
    // console.log(row);
    return row._id;
  }
  return (
    <Box sx={{ height: 450, width: "100%" }}>
      <DataGrid
        sx={{ m: 6 }}
        rows={purchases}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15, 25, 50, 100]}
        // checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
