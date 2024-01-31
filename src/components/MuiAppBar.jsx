import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import cartIcon from "../assets/cart-icon.png";
import { cartCtx } from "../store/cart-context";
import { useContext } from "react";

export default function MenuAppBar({ openModal, openSidebar }) {
  const { cart } = useContext(cartCtx);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "lightsteelblue", color: "black"}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openSidebar}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Company Name
          </Typography>
          <div>
            <button
              className="flex rounded-lg items-center bg- border-2 py-2 px-4 border-black hover:bg-purple-300"
              onClick={openModal}
            >
              <img className="w-5 mr-1" src={cartIcon} alt="" />
              {`(${cart.length})`}
            </button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
