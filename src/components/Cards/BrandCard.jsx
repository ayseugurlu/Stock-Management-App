import React from 'react'
import useStockCall from '../../hooks/useStockCall'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DeleteSweepTwoToneIcon from "@mui/icons-material/DeleteSweepTwoTone";
import { btnStyle } from './FirmCard';





const BrandCard = ({ _id, name, image ,handleOpen , setInitialState}) => {

    const {deleteStockData} =useStockCall()

  return (
    <Card>
    <CardMedia
      component="img"
      sx={{ height: 140, objectFit: "contain" }}
      image={image}
    />

    <CardContent>
      <Typography
        color="secondary.main"
        gutterBottom
        variant="h5"
        component="div"
      >
        {name}
      </Typography>
     
     
    </CardContent>
    <CardActions
      sx={{ display: "flex", justifyContent: "center" ,gap:2}}
    >
      <AppRegistrationIcon sx={btnStyle} 
      onClick={() => {handleOpen(); 
      setInitialState({_id,name,image})}}/>
      <DeleteSweepTwoToneIcon sx={btnStyle} onClick={()=>deleteStockData("brands",_id)}/>
    </CardActions>
  </Card>
  )
}

export default BrandCard