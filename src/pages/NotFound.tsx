import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: '#336600',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '30px',
          padding: { xs: '10px' },
        }}
      >
        {t('notFound')}
      </Typography>
    </Box>
  );
};

export default NotFound;
