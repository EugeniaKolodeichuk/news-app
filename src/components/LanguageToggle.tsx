import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import LanguageIcon from '@mui/icons-material/Language';
import { Box, IconButton, Tooltip, MenuItem, Menu, Typography } from '@mui/material';

const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorElUser(currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleCloseUserMenu();
  };

  return (
    <Box>
      <Tooltip title={t('language')}>
        <IconButton onClick={handleOpenUserMenu}>
          <LanguageIcon sx={{ p: 0, m: 0, color: 'white' }} />
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
        <MenuItem key={uuidv4()} onClick={() => changeLanguage('ua')}>
          <Typography textAlign="center">{t('ukrainian')}</Typography>
        </MenuItem>
        <MenuItem key={uuidv4()} onClick={() => changeLanguage('en')}>
          <Typography textAlign="center">{t('english')}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default LanguageToggle;
