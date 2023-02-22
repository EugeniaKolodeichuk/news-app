import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster reverseOrder={false} />
    </div>
  );
};