import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth.operations';
import { Link } from 'react-router-dom';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.register__page}>
      <form
        className={css.register__form}
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <h1 className={css.register__title}>Please Sign In</h1>

        <label className={css.register__label}>
          Email address
          <input
            className={css.register__input}
            name="email"
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.register__label}>
          Name
          <input
            className={css.register__input}
            name="name"
            type="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={css.register__label}>
          Password
          <input
            className={css.register__input}
            name="password"
            type="password"
            required
            autoComplete="off"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Link className={css.register__tologin} to="/login">
          Already has account?
        </Link>

        <button className={css.register__button} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

