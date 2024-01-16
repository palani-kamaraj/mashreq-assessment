import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '@shared';

export const LoginProtectedRoute = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const isUserLoggedIN = useStore((state) => state?.user);

  if (isUserLoggedIN) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};
