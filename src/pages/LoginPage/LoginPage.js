import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginThunk } from 'redux/auth/auth.thunks';
import { selectAuthStatus } from 'redux/auth/auth.selectors';
import { toast } from 'react-toastify';
import {Loader} from 'components/Loader/Loader';
import css from './LoginPage.module.css';
const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
 
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();
  const status = useSelector(selectAuthStatus);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

   

    try {
      await dispatch(authLoginThunk(values)).unwrap();
      toast.success('Success!');
    } catch (error) {
      console.log(error);
      toast.error('Some error');
    }

    setValues(initialState);
  };

  return (
    <div className={css.login__page}>
      {status === 'loading' && <Loader />}

      <form className={css.login__form} onSubmit={handleSubmit}>
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
            value={values.email}
            onChange={handleChange}
          />
        </label>

        <label className={css.login__label}>
          Password
          <input
            className={css.login__input}
            // type={isPassword ? "password" : "text"}
            type="password"
            name="password"
            required
            autoComplete="off"
            placeholder="your password"
            value={values.password}
            onChange={handleChange}
          />
        </label>

        <button className={css.login__button} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;