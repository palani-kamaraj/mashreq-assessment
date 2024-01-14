import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { WebProvider } from '@webLib';
import { RouterProvider } from 'react-router-dom';
import { routerConfig } from './config/router.config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <WebProvider>
      <RouterProvider router={routerConfig}/>
    </WebProvider>
  </StrictMode>
);
