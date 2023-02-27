import React from 'react';
import { Box, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import uaIcon from '../assets/ua.png';
import engIcon from '../assets/eng.png';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ pl: 1 }}>
      <IconButton onClick={() => changeLanguage('ua')} sx={{ p: 0 }}>
        <img src={uaIcon} alt="Ukrainian-language" height="35px" />
      </IconButton>
      <IconButton onClick={() => changeLanguage('en')} sx={{ p: 0 }}>
        <img src={engIcon} alt="English-language" height="35px" />
      </IconButton>
    </Box>
  );
};

export default LanguageToggle;
