import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import useStockCall from '../../hooks/useStockCall';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';





export default function PurchaseTable() {

    const {purchases} =useSelector(state=>state.stock)
    const {deleteStockData}=useStockCall()

    const columns = [
        { field: 'createdAt', headerName: 'Date', width: 200 },
        {
          field: 'firmId',
          headerName: 'Firm Name',
          width: 110,
          valueGetter: (value) => value.name
          
        },
        {
          field: 'brandId',
          headerName: 'Brand Name',
          width: 110,
          valueGetter: (value) => value.name
          
        },
        {
          field: "productId",
          headerName: 'Product Name',
          width: 110,
          valueGetter: (value) => value?.name
        },
        {
          field: 'quantity',
          headerName: 'Quantity',
          type: 'number',
          width: 110,
          
        },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 110,
          
        },
        {
          field: 'amount',
          headerName: 'Amount',
          type: 'number',
          width: 150,
          
        },
        {
          field: 'actions',
          headerName: 'Actions',
          sortable: false,
          type: 'number',
          width: 90,
          renderCell:(params)=> (
            <>
              <EditOutlinedIcon/>
          <DeleteSweepOutlinedIcon sx={{color:"secondary.contrastText"}} onClick={()=>deleteStockData("products",params.id)}/>
            </>
          )
          
        }
       
      ];

    function getRowId(row) {
        // console.log(row);
        return row._id;
      }
  return (
    <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
      sx={{m:6}}
        rows={purchases}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,15,25,50,100]}
        // checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
