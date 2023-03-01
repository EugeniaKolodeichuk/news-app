import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ApplicationBar from './ApplicationBar';

const Layout = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <header>
        <ApplicationBar />
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster reverseOrder={false} />
    </div>
  );
};

export default Layout;
