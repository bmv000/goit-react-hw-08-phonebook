import { useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectIsLogin,
  selectUserName,
  selectUserEmail,
  selectToken,
} from 'redux/auth/auth.selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLogin);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    userName,
    userEmail,
    token,
  };
};
