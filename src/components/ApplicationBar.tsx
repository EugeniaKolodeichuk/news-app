import React from 'react';
import { useAppSelector } from '../redux/store';
import { AppBar, Container, Toolbar } from '@mui/material';
import Navigation from './Navigation';
import LanguageToggle from './LanguageToggle';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const ApplicationBar: React.FC = () => {
  const userName = useAppSelector(({ user }) => user.userName);

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: '#336600', display: 'flex', justifyContent: 'center' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Navigation />
          {userName ? <UserMenu /> : <AuthNav />}
          <LanguageToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ApplicationBar;
