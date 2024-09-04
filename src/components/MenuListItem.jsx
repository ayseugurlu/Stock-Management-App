import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const links = [
    {
        title:"Dashboard",
        url:"/stock"
    },
    {
        title:"Purchases",
        url:"/stock/purchases"
    },
    {
        title:"Sales",
        url:"/stock/sales"
    },
    {
        title:"Firms",
        url:"/stock/firms"
    },
    {
        title:"Brands",
        url:"/stock/brands"
    },
    {
        title:"Products",
        url:"/stock/products"
    }
]


const MenuListItem = () => {
    const navigate=useNavigate()
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
              <ListItemButton onClick={()=>navigate(item.url)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
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
