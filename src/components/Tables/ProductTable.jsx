import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import useStockCall from '../../hooks/useStockCall';





export default function ProductTable() {

    const {products} =useSelector(state=>state.stock)
    const {deleteStockData}=useStockCall()

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
          field: 'categoryId',
          headerName: 'Category Name',
          width: 200,
          valueGetter: (value) => value.name
          
        },
        {
          field: 'brandId',
          headerName: 'Brand Name',
          width: 200,
          valueGetter: (value) => value.name
          
        },
        {
          field: 'name',
          headerName: 'Product Name',
          type: 'number',
          width: 150,
          
        },
        {
          field: 'quantity',
          headerName: 'Stock',
          type: 'number',
          width: 150,
          
        },
        {
          field: 'actions',
          headerName: 'Actions',
          sortable: false,
          type: 'number',
          width: 90,
          renderCell:(params)=> (<DeleteSweepOutlinedIcon sx={{color:"secondary.contrastText"}} onClick={()=>deleteStockData("products",params.id)}/>)
          
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
        rows={products}
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
