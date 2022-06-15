import React from 'react'
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { Avatar, Button } from "@mui/material"
import "./NavBar.css"
import { Box } from "@mui/system"

import MenuMobile from './NavBarMobile/MenuMobile/MenuMobile'
import MenuNav from "./menuNav/MenuNav";
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" className="cor-navbar">
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Toolbar>
          <Box marginX={5}>
            <Link to="/home" className="text-decorator-none">
              <Avatar
                alt="Example Alt"
                sx={{ width: 160, height: 60 }}
                src="https://oombe.com/assets/img/mercadolivre_nova_logo.png"
              />
            </Link>
          </Box>
          <MenuNav />

          <Box marginX="auto">
            <Avatar
              alt="Example Alt"
              sx={{ width: 100, height: 70 }}
              src="https://logospng.org/download/disneyplus/logo-disneyplus-256.png"
            />
          </Box>
          <Button color="inherit" className="cor-text-button">
            Assine o nivel 6 por R$ 9,90
          </Button>
        </Toolbar>
        <Toolbar>
          <Box marginX={5}>
            <Button color="inherit" className="cor-text-button">
              endereço
            </Button>
          </Box>

          <Box marginLeft={7}>
            <Link to="/produtos" className="cor-text-button cursor">
              <Button className="cursor">Produtos</Button>
            </Link>
            <Button className="cor-text-button">Oferta do dia</Button>
            <Button color="inherit" className="cor-text-button">
              Supermercado
            </Button>
            <Button color="inherit" className="cor-text-button">
              Moda
            </Button>
            <Button color="inherit" className="cor-text-button">
              Live
            </Button>
            <Button color="inherit" className="cor-text-button">
              Vender
            </Button>
            <Button color="inherit" className="cor-text-button">
              Contato
            </Button>
          </Box>

          <Box marginLeft={1}>
            <Button color="inherit" className="cor-text-button">
              User
            </Button>
            <Button color="inherit" className="cor-text-button">
              Compras
            </Button>
            <Button color="inherit" className="cor-text-button">
              Supermercado
            </Button>
            <Button color="inherit" className="cor-text-button">
              Favoritos
            </Button>
          </Box>
        </Toolbar>
      </Box>

      <Box sx={{ display: { xs: "display", md: "none" } }}>
        <NavBarMobile />
      </Box>
    </AppBar>
  );
};

export default NavBar;
