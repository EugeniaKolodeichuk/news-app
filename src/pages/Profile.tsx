import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../redux/store';

const Profile: React.FC = () => {
  const userName = useAppSelector(({ user }) => user.userName);
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
          background: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        {t('welcome')}, {userName}
      </Typography>
    </Box>
  );
};

export default Profile;
