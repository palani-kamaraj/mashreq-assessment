import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layouts, NotFound } from '@webLib';
import { ProtectedRoute } from '@webLib';
import LoginPage from '../screen/loginPage';
import DashboardPage from '../screen/dashboardPage';

export const routerConfig = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="" element={<LoginPage />} />
      <Route
        path="dashboard/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
