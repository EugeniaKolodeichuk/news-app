import { useSelector } from 'react-redux';
import { AppBar, Container, Toolbar } from '@mui/material';
import Navigation from './Navigation';
import LanguageToggle from './LanguageToggle';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const ApplicationBar = () => {
  const userName = useSelector(({ name }) => name.userName);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: '#336600', display: 'flex', justifyContent: 'center' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Navigation />
          {userName || isLoggedIn ? <UserMenu /> : <AuthNav />}
          <LanguageToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ApplicationBar;
