//import { useAuth } from '../AuthContext';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

export const AppBar = () => {
  //const { userInfo } = useAuth();

  return (
    <header>
      <Navigation />
      {/* {userInfo ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
