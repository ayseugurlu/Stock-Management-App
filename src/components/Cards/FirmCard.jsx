import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DeleteSweepTwoToneIcon from "@mui/icons-material/DeleteSweepTwoTone";
import useStockCall from "../../hooks/useStockCall";


export const btnStyle = {
  color: "primary.main",
  "&:hover": { color: "secondary.contrastText" },
};

export default function FirmCard({ _id, name, phone, address, image ,handleOpen ,setInitialState}) {

  const {deleteStockData} =useStockCall()
  return (
    <Card sx={{ maxWidth: 350, height: 450 }}>
      <CardMedia
        component="img"
        sx={{ height: 250, objectFit: "contain" }}
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
        <Typography gutterBottom variant="body1" component="div">
          Phone: {phone}
        </Typography>
        <Typography
          color="primary.main"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          {address}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "flex-end" ,gap:2}}
      >
        <AppRegistrationIcon sx={btnStyle} onClick={()=>{handleOpen(); setInitialState({ _id, name, phone, address, image})}} />
        <DeleteSweepTwoToneIcon sx={btnStyle} onClick={()=>deleteStockData("firms",_id)}/>
      </CardActions>
    </Card>
  );
}
