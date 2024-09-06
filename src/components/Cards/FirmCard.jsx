import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
import { Box } from '@mui/material';

export default function FirmCard({name,phone,address,image}) {
  return (
    <Card sx={{ maxWidth: 350, height:450}}>
    
        <CardMedia component="img"
        sx={{height:250, objectFit:"contain"}}
        image={image}
        
      />
   
      
      <CardContent>
        <Typography color="secondary.main" gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography  gutterBottom variant="body1" component="div">
        {phone}
        </Typography>
        <Typography color="primary.main" variant="body2" sx={{ color: 'text.secondary' }}>
         {address}
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{display:"flex", justifyContent:"flex-end", width:"100%"}}>
         <Button size="medium" component="div" sx={{color:"secondary.contrastText"}}><AppRegistrationIcon/></Button>
        <Button size="medium" sx={{color:"secondary.contrastText"}}><DeleteSweepTwoToneIcon/></Button>
      </Box>
        
      </CardActions>
    </Card>
  );
}