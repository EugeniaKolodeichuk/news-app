import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedProps {
  isLoggedIn: boolean;
  children: ReactElement;
}

const Protected = ({ isLoggedIn, children }: ProtectedProps) =>
  isLoggedIn ? children : <Navigate to="/" replace />;

export default Protected;
