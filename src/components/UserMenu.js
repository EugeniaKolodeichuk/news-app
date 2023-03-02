import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserNameAction } from '../redux/reducers/userReducer.ts';
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const randomImage = 'https://source.unsplash.com/1600x900/?people';

const UserMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = ({ currentTarget }) => setAnchorElUser(currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const onLogout = () => {
    handleCloseUserMenu();
    localStorage.clear();
    dispatch(addUserNameAction(null));
    navigate('/');
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
        <MenuItem key={uuidv4()} onClick={onLogout}>
          <Typography textAlign="center">{t('logout')}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
