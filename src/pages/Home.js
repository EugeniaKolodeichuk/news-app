import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#336600',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: 'auto',
        }}
      >
        {t('welcomeText')}
      </Typography>
    </Box>
  );
};

export default Home;
