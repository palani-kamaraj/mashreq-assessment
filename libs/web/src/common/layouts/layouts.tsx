import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {Header} from '../header';

export const Layouts = () => {
  const { pathname } = useLocation();
  const hideHeader = ['/'].includes(pathname);

  return (
    <>
      {!hideHeader ? <Header /> : null}
      <Outlet />
    </>
  );
};
