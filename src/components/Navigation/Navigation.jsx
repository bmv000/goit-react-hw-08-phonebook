import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selectors';
import { selectProfileToken } from 'redux/profile/profile.selector';
import { getProfileThunk } from 'redux/profile/profile.thunk';
import UserMenu from '../UserMenu/UserMenu';
import css from './Navigation.module.css';


export const Navigation = () => {
   const dispatch = useDispatch();

   const token = useSelector(selectAuthToken);
   const profile = useSelector(selectProfileToken);

   useEffect(() => {
     if (token) {
       dispatch(getProfileThunk());
     }
   }, [token, dispatch]);
  return (
    <nav className={css.navigation}>
      {token && profile ? (
        <UserMenu mail={profile.email} />
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
