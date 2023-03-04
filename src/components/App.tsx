import React from 'react';
import { lazy, Suspense } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Route, Routes } from 'react-router';
import { useAppSelector } from '../redux/store';
import Layout from './Layout';
import Protected from './Protected';

const HomePage = lazy(() => import('../pages/Home'));
const NewsPage = lazy(() => import('../pages/News'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const App = () => {
  const user = useAppSelector(({ user }) => user.userName);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastProvider autoDismiss autoDismissTimeout={5000} placement="bottom-right">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route
              path="/profile"
              element={
                <Protected isLoggedIn={!!user}>
                  <ProfilePage />
                </Protected>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ToastProvider>
    </Suspense>
  );
};

export default App;
