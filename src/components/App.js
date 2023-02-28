import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout';
import News from '../pages/News';
import Protected from './Protected';
import { useSelector } from 'react-redux';

const HomePage = lazy(() => import('../pages/Home'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const user = useSelector(state => state.userName.userName);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/profile"
          element={
            <Protected isLoggedIn={isLoggedIn || user}>
              <ProfilePage />
            </Protected>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
