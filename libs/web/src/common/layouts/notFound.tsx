import React from 'react';
import { useStore } from '@shared';
import { Navigate } from 'react-router-dom';

export const NotFound = () => {
  const isValidUser = useStore((state) => state.user);

  return <Navigate to={isValidUser ? "/dashboard" : "/"} replace />;
};

