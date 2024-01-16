import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header';
import { Loader } from '../loader';
import { SimpleAlert } from '../simpleAlert';

export const Layouts = () => {
  const { pathname } = useLocation();
  const hideHeader = ['/'].includes(pathname);

  return (
    <>
      <Loader />
      <SimpleAlert />
      {!hideHeader ? <Header /> : null}
      <Outlet />
    </>
  );
};
