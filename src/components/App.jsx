
import { lazy } from 'react';
// import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { PublicRoute } from '../components/AuthRoutes/PublicRoue';
import { PrivateRoute } from '../components/AuthRoutes/PrivatRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="" element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
export default App;


