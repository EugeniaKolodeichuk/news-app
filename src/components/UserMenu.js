import React, { useState } from 'react';
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const randomImage = 'https://source.unsplash.com/1600x900/?people';

const UserMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    localStorage.clear();
    navigate('/');
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={t('userMenu')}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="avatar" src={randomImage} />
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
        <MenuItem key="profile" component={NavLink} to="/profile" onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{t('profile')}</Typography>
        </MenuItem>
        <MenuItem key="logout" onClick={onLogout}>
          <Typography textAlign="center">{t('logout')}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
