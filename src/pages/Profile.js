import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

const Profile = () => {
  const userName = useSelector(({ name }) => name.userName);
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
        }}
      >
        {t('welcome')}, {userName}
      </Typography>
    </Box>
  );
};

export default Profile;
