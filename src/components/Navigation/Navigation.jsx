import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUserEmail, selectIsLogin } from 'redux/auth/auth.selectors';

import UserMenu from '../UserMenu/UserMenu';
import css from './Navigation.module.css';

export const Navigation = () => {
  const userEmail = useSelector(selectUserEmail);
  const isLoggedIn = useSelector(selectIsLogin);

  return (
    <nav className={css.navigation}>
      {isLoggedIn ? (
        <UserMenu mail={userEmail} />
      ) : (
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
      )}
    </nav>
  );
};
