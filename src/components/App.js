import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const NewsPage = lazy(() => import('../pages/News'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
