

import { publicApi } from '../../services/api';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { authLoginThunk } from '../../redux/auth/auth.thunks';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Loader} from '../../components/Loader/Loader';
import css from './RegisterPage.module.css';
// const year = new Date().getFullYear();
const initialState = {
 name: '',
    email: '',
  password: '',
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);

//   const [isPass, setIsPass] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await publicApi.post('/users/signup', values);
      await dispatch(
        authLoginThunk({ email: values.email, password: values.password })
      ).unwrap();

      setIsLoading(false);
      toast.success('Success!');
    } catch (error) {
      console.log(error);
      toast.error('Some error');
      }
       setValues(initialState);
  };

  return (
    <div className={css.register__page}>
      {isLoading && <Loader />}

      <form
        className={css.register__form}
        // action="#"
        // className="mt-5 mx-auto p-0"
        // style={{ width: '450px' }}
        onSubmit={handleSubmit}
      >
        <h1 className={css.register__title}>Please Sign In</h1>

        <label className={css.register__label}>
          Email address
          <input
            className={css.register__input}
            // id="email"
            name="email"
            type="email"
            //   autoComplete="username"
            placeholder="name@email.com"
            value={values.email}
            onChange={handleChange}
            // className="form-control"
          />
        </label>

        <label className={css.register__label}>
          Name
          <input
            className={css.register__input}
            // id="first_name"
            name="name"
            type="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // autoComplete="off"
            placeholder="Name"
            value={values.first_name}
            onChange={handleChange}
            // className="form-control"
          />
        </label>

        <label className={css.register__label}>
          Password
          <input
            className={css.register__input}
            // id="password"
            name="password"
            type="password"
            required
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            // className="form-control"
          />
        </label>

        {/* <button type="submit" onClick={() => setIsPass(prev => !prev)}>
          toggle
        </button> */}

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