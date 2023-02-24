import { lazy, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { PublicRoute } from '../components/AuthRoutes/PublicRoue';
import { PrivateRoute } from '../components/AuthRoutes/PrivatRoute';
import { fetchCurrentUser } from 'redux/auth/auth.operations';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/Contacts/Contact'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
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
  );
};
export default App;
