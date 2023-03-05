import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: '#336600',
          display: 'flex',
          justifyContent: 'center',
          mt: '30px',
          padding: { xs: '10px' },
        }}
      >
        {t('welcomeText')}
      </Typography>
    </Box>
  );
};

export default Home;
