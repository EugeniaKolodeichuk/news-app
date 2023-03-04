import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ApplicationBar from './ApplicationBar';

const Layout = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <header>
        <ApplicationBar />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
