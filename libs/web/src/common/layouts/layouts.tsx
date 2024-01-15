import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header';
import { Loader } from '../loader';

export const Layouts = () => {
  const { pathname } = useLocation();
  const hideHeader = ['/'].includes(pathname);

  return (
    <>
      <Loader />
      {!hideHeader ? <Header /> : null}
      <Outlet />
    </>
  );
};
