import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import { addUserName } from '../redux/features/userSlice';
import { useAppDispatch } from '../redux/store';

const randomImage = 'https://source.unsplash.com/1600x900/?people';

const UserMenu = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorElUser(currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const onLogout = () => {
    handleCloseUserMenu();
    localStorage.clear();
    dispatch(addUserName(''));
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
