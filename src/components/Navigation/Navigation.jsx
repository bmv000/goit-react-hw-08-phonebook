import { NavLink } from 'react-router-dom';
// import { useEffect } from 'react';
import {useSelector } from 'react-redux';
import { selectUserEmail, selectIsLogin } from 'redux/auth/auth.selectors';

import UserMenu from '../UserMenu/UserMenu';
import css from './Navigation.module.css';


export const Navigation = () => {
  //  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const isLoggedIn = useSelector(selectIsLogin);
  //  const token = useSelector(selectToken);
  //  const profile = useSelector(selectProfileToken);

  //  useEffect(() => {
  //    if (token) {
  //      dispatch(getProfileThunk());
  //    }
  //  }, [token, dispatch]);
  return (
    <nav className={css.navigation}>
      {isLoggedIn ?
        <UserMenu mail={userEmail} />
        :
        <ul className={css.navigation__list}>
          <li>
            <NavLink className={css.navigation__link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navigation__link} to="/register">
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navigation__link} to="/login">
              Log In
            </NavLink>
          </li>
        </ul>
      }
    </nav>
  );
};


   