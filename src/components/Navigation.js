import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import { v4 as uuidv4 } from 'uuid';
import NavigationItem from './NavigationItem';
import { navItems, protectedItem } from '../data/navigation';

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { t } = useTranslation();

  const user = useSelector(state => state.userName.userName);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <BallotTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        NEWS
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {navItems.map(item => {
            return (
              <MenuItem
                key={uuidv4()}
                component={NavLink}
                to={item.route}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">{t(`${item.title}`)}</Typography>
              </MenuItem>
            );
          })}
          {(user || isLoggedIn) && (
            <MenuItem
              key={uuidv4()}
              component={NavLink}
              to={`${protectedItem.route}`}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">{t(`${protectedItem.title}`)}</Typography>
            </MenuItem>
          )}
        </Menu>
      </Box>
      <BallotTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        NEWS
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {navItems.map(item => {
          return (
            <NavigationItem
              key={uuidv4()}
              title={item.title}
              route={item.route}
              onClick={handleCloseNavMenu}
            />
          );
        })}
        {(user || isLoggedIn) && (
          <NavigationItem
            key={uuidv4()}
            title={`${protectedItem.title}`}
            route={protectedItem.route}
            onClick={handleCloseNavMenu}
          />
        )}
      </Box>
    </>
  );
}
export default Navigation;
