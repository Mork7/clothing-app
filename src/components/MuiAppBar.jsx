import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import cartIcon from "../assets/cart-icon.png";

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "lightsteelblue", color: "black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Company Name
          </Typography>
          <div>
            <button className="flex rounded-lg items-center bg- border-2 py-2 px-4 border-black hover:bg-purple-300">
              <img className="w-5 mr-1" src={cartIcon} alt="" />
              {`(${0})`}
            </button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
