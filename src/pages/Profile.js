import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userName = useSelector(state => state.userName.userName);
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
        Welcome, {userName}
      </Typography>
    </Box>
  );
};

export default Profile;
