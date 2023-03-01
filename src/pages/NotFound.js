import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
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
        {t('notFound')}
      </Typography>
    </Box>
  );
};

export default NotFound;
