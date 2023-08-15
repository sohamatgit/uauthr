import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar } from "./sidebar";
import { Link } from "react-router-dom";

export const HeaderBar =()=> {

  const[isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleSidebarOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            {isSidebarOpen && <Sidebar />}
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            sx={{ flexGrow: 1, textAlign: "left", color:'white' , textDecoration: 'none'}}
            to="/"
          >
            UAuthr
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
