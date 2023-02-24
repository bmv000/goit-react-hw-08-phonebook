import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authLoginThunk } from 'redux/auth/auth.operations';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authLoginThunk({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.login__page}>
      <form
        className={css.login__form}
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <h2 className={css.login__title}>Please Log in Your Phonebook</h2>
        <label className={css.login__label}>
          Email
          <input
            className={css.login__input}
            name="email"
            type="email"
            required
            autoComplete="on"
            placeholder="name@email.com"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.login__label}>
          Password
          <input
            className={css.login__input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="your password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button
          className={css.login__button}
          type="submit"
          state={{ from: location }}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
