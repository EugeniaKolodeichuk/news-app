import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
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
        Welcome to The News App!
      </Typography>
    </Box>
  );
};

export default Home;
