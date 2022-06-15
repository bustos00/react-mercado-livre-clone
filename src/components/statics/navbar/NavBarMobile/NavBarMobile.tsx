import { AppBar, Avatar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuMobile from './MenuMobile/MenuMobile'

const NavBarMobile = () => {
  return (
    <AppBar position="static" className='cor-navbar'>
    <Toolbar>
      <Box marginX={3} >
      <Link to="/home" className="text-decorator-none">
        <Avatar 
          alt="Example Alt"
          sx={{ width: 80, height: 20 }}
          src="https://oombe.com/assets/img/mercadolivre_nova_logo.png" />
          </Link>
      </Box>
      <Box marginLeft="auto">
        <MenuMobile></MenuMobile>
      </Box>


    </Toolbar>
  </AppBar>
  )
}

export default NavBarMobile