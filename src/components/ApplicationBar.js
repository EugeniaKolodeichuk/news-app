import Navigation from './Navigation';
import { AppBar, Container, Toolbar } from '@mui/material';
import LanguageToggle from './LanguageToggle';

export const ApplicationBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: '#336600', display: 'flex', justifyContent: 'center' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Navigation />
          <LanguageToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
