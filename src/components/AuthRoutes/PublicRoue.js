import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth.selectors';

export const PublicRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Navigate to="/contacts" replace /> : <Outlet />;
};
