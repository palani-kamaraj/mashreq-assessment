import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layouts } from '@webLib';
import LoginPage from '../screen/loginPage';

export const routerConfig = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts/>}>
      <Route path="" element={<LoginPage />} />
      <Route path="dashboard/" element={<>Dashboard</>} />
      <Route path="*" element={<>Not Found</>}/>
    </Route>
  )
);
