import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = React.memo(() => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  }, [setIsDrawerOpen]);

  return (
    <AppBar position="static" className="appBar" id="top">
      <Toolbar className="toolbar">
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" className="title">
              Arte Numerológico
            </Typography>
          </Grid>
          <Grid item xs={6} sm={8}>
            <Grid container justifyContent="flex-end">
              {/* Hamburger button */}
              <IconButton id="burgerButton" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>

              {/* Desktop navigation links */}
              <Button component={Link} to="/" className="navLink">
                Inicio
              </Button>
              <Button component={Link} to="/name-numbers" className="navLink">
                Nombre
              </Button>
              <Button component={Link} to="/birthdate-numbers" className="navLink">
                Nacimiento
              </Button>
              <Button component={Link} to="/couple-numbers" className="navLink">
                Pareja
              </Button>
              <Button component={Link} to="/profile" className="navLink">
                Perfil
              </Button>

              {/* Mobile drawer */}
              <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                  <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
                    <ListItemText primary="Inicio" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/name-numbers" onClick={toggleDrawer}>
                    <ListItemText primary="Nombre" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/birthdate-numbers" onClick={toggleDrawer}>
                    <ListItemText primary="Nacimiento" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/couple-numbers" onClick={toggleDrawer}>
                    <ListItemText primary="Pareja" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/profile" onClick={toggleDrawer}>
                    <ListItemText primary="Perfil" />
                  </ListItemButton>
                </List>
              </Drawer>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
});

export default Header;