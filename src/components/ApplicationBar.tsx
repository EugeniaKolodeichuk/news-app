import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { useAppSelector } from '../redux/store';
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
          <LanguageToggle />
          {userName ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ApplicationBar;
