import React from 'react'
import { Backdrop } from "@mui/material";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import {Link} from "react-router-dom";


export const Sidebar = () => {


  function ListItemLink(props) {
    const { primary, to } = props;

    return (
      <ListItem
        component={Link}
        to={to}
        sx={{ color: "black", width:250 ,textDecoration: "none" }}
      >
        {primary}
      </ListItem>
    );
  }

  return (
    <Backdrop sx={{ color: "#fff" }} open={true}>
      <Popover
        open={true}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 70, left: 10 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        hideBackdrop={false}
      >
        <List>
          <ListItemLink
            to="/users"
            primary="User Management"
          />
        </List>
        <Divider />
        <List>
          <ListItemLink
            to="/test"
            primary="Test"
          />
        </List>
      </Popover>
    </Backdrop>
  );
}
