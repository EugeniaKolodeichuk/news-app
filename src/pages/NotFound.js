import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
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
        Sorry, page not found.
      </Typography>
    </Box>
  );
};

export default NotFound;
