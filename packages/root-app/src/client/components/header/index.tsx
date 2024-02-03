import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Cart from "../cart";

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleSideMenuAdd = () => {
    setIsSideMenuOpen(true);
  };

  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };
  return (
    <AppBar>
      <Toolbar>
        <RouterLink
          to="/"
          style={{ display: "flex", alignItems: "center", color: "black" }}
        >
          <Typography variant="h6">Sufer |</Typography>
          <Typography sx={{ ml: 0.5 }}>Store</Typography>
        </RouterLink>

        <Cart open={isSideMenuOpen} onClose={handleSideMenuClose} />

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <RouterLink to="/">
            <Button
              sx={{
                mr: 1,
              }}
            >
              Home
            </Button>
          </RouterLink>

          <RouterLink to="/products">
            <Button>Productos</Button>
          </RouterLink>

          <RouterLink to="/about">
            <Button>Sobre nosotros</Button>
          </RouterLink>
        </Box>

        <Box flex={1} />

        <Button onClick={handleSideMenuAdd}>Carrito de compras</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
