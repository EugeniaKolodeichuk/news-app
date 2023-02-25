import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';

import { Link, NavLink } from 'react-router-dom';

const randomImage = 'https://source.unsplash.com/1600x900/?people';

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: '#336600', height: '100px', display: 'flex', justifyContent: 'center' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem key="news" component={NavLink} to="/news" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">News</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <BallotTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
              Home
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
              News
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ height: '60px', width: '60px' }} alt="Remy Sharp" src={randomImage} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                key="profile"
                component={NavLink}
                to="/profile"
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem
                key="logout"
                component={NavLink}
                to="/profile"
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, pl: 5 }}>
            <Tooltip title="Log In">
              <IconButton key="login" component={Link} to="/login">
                <LoginTwoToneIcon sx={{ p: 0, m: 0, color: 'white' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
