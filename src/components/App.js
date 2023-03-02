import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import Protected from './Protected';

const HomePage = lazy(() => import('../pages/Home'));
const NewsPage = lazy(() => import('../pages/News'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const user = useSelector(({ name }) => name.userName);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
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
};

export default App;
