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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import uaIcon from '../assets/ua.png';
import engIcon from '../assets/eng.png';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const randomImage = 'https://source.unsplash.com/1600x900/?people';

const USER_NAME = 'admin';
const PASSWORD = '12345';

function Navigation() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
  const onLogin = () => {
    if (userName === USER_NAME && password === PASSWORD) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/profile');
    }
    handleClose();
  };

  const onLogout = () => {
    localStorage.clear();
    navigate('/');
    handleCloseUserMenu();
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const fakeInputStyle = { opacity: 0, float: 'left', border: 'none', height: '0', width: '0' };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: '#336600', display: 'flex', justifyContent: 'center' }}
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
                <Typography textAlign="center">{t('home')}</Typography>
              </MenuItem>
              <MenuItem key="news" component={NavLink} to="/news" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{t('news')}</Typography>
              </MenuItem>
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
          </Box>
          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={t('userMenu')}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={randomImage} />
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
                  <Typography textAlign="center">{t('profile')}</Typography>
                </MenuItem>
                <MenuItem key="logout" onClick={onLogout}>
                  <Typography textAlign="center">{t('logout')}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, pl: 5 }}>
              <Tooltip title={t('login')}>
                <IconButton key="login" variant="outlined" onClick={handleClickOpen}>
                  <LoginTwoToneIcon sx={{ p: 0, m: 0, color: 'white' }} />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          <Box sx={{ pl: 1 }}>
            <IconButton onClick={() => changeLanguage('ua')} sx={{ p: 0 }}>
              <img src={uaIcon} alt="Ukrainian-language" height="35px" />
            </IconButton>
            <IconButton onClick={() => changeLanguage('en')} sx={{ p: 0 }}>
              <img src={engIcon} alt="English-language" height="35px" />
            </IconButton>
          </Box>
        </Toolbar>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{t('login')}</DialogTitle>
          <DialogContent>
            <DialogContentText>{t('dialogContent')}</DialogContentText>
            <form>
              <input
                type="password"
                name="fake-password"
                autoComplete="new-password"
                tabIndex="-1"
                style={fakeInputStyle}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label={t('nameField')}
                type="name"
                fullWidth
                variant="standard"
                value={userName}
                onChange={event => {
                  setUserName(event.target.value);
                }}
              />
              <TextField
                margin="dense"
                id="password"
                label={t('passwordField')}
                type="password"
                fullWidth
                variant="standard"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{t('cancel')}</Button>
            <Button onClick={onLogin}>{t('login')}</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </AppBar>
  );
}
export default Navigation;
