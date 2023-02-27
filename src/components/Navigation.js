import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';

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
          <MenuItem key="home" component={NavLink} to="/" onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{t('home')}</Typography>
          </MenuItem>
          <MenuItem key="news" component={NavLink} to="/news" onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{t('news')}</Typography>
          </MenuItem>
          {(user || isLoggedIn) && (
            <MenuItem key="news" component={NavLink} to="/profile" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{t('profile')}</Typography>
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
        <Button
          component={NavLink}
          style={{
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white',
            display: 'block',
            padding: '8px 6px',
          }}
          to="/"
          onClick={handleCloseNavMenu}
        >
          {t('home')}
        </Button>
        <Button
          component={NavLink}
          style={{
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white',
            display: 'block',
            padding: '8px 6px',
          }}
          to="/news"
          onClick={handleCloseNavMenu}
        >
          {t('news')}
        </Button>
        {(user || isLoggedIn) && (
          <Button
            component={NavLink}
            style={{
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'white',
              display: 'block',
              padding: '8px 6px',
            }}
            to="/profile"
            onClick={handleCloseNavMenu}
          >
            {t('profile')}
          </Button>
        )}
      </Box>
    </>
  );
}
export default Navigation;
