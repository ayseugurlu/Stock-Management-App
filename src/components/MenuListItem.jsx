import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Box, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
    {
        title:"Dashboard",
        url:"/stock",
        icon: icon("chart-dollar")
    },
    {
        title:"Purchases",
        url:"/stock/purchases",
        icon:icon("shopping-cart-add")
    },
    {
        title:"Sales",
        url:"/stock/sales",
        icon:icon("cart-minus")
    },
    {
        title:"Firms",
        url:"/stock/firms",
        icon:icon("building")
    },
    {
        title:"Brands",
        url:"/stock/brands",
        icon:icon("brand2")
    },
    {
        title:"Products",
        url:"/stock/products",
        icon:icon("box-open")
    }
]



const btnStyle= {
  color:"primary.main",
  borderRadius: "3rem",
  "&:hover":{
    backgroundColor:"primary.second",
    
  }
}

const selectedStyle= {
  backgroundColor:"primary.main",
  color:"white",
  borderRadius: "3rem",
  "&:hover":{
    backgroundColor:"primary.second",
    color:"primary.main"
  }
}

const MenuListItem = () => {
    const navigate=useNavigate()
    const location =useLocation()
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {links.map(
          (item, index) => (
            <ListItem
              key={item.title}
              sx={{ color: "secondary.main" }}
              disablePadding
            >
              <ListItemButton onClick={()=>navigate(item.url)} sx={item.url === location.pathname ? selectedStyle : btnStyle}>
               <Box 
                sx={{
                  width:"24px",
                  height:"24px",
                  mr:2,
                  mask: `url(${item.icon}) no-repeat center / contain`,
                  bgcolor:"secondary.contrastText"
                }}
               />
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );
};

export default MenuListItem;
