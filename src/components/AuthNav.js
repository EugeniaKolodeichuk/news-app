import React, { useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import { useTranslation } from 'react-i18next';
import LoginDialog from './LoginDialog';

const AuthNav = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0, pl: 5 }}>
        <Tooltip title={t('login')}>
          <IconButton key="login" variant="outlined" onClick={handleClickOpen}>
            <LoginTwoToneIcon sx={{ p: 0, m: 0, color: 'white' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <LoginDialog open={open} />
    </>
  );
};

export default AuthNav;
