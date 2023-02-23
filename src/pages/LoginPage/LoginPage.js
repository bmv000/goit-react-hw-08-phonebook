import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authLoginThunk } from 'redux/auth/auth.operations';
// import { selectAuthStatus } from 'redux/auth/auth.selectors';
// import { toast } from 'react-toastify';
// import { Loader } from 'components/Loader/Loader';
import css from './LoginPage.module.css';
import * as yup from 'yup';

let schema = yup.object().shape({
  email: yup.string().nullable().email().required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginPage = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isPass, setIsPass] = useState(true);

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
      {/* {status === 'loading' && <Loader />} */}

      <form
        className={css.login__form}
        onSubmit={handleSubmit}
        autoComplete="on"
        validationSchema={schema}
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
            // type={isPassword ? "password" : "text"}
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



// const initialState = {
//   email: '',
//   password: '',
// };
//  const [values, setValues] = useState(initialState);

//  const dispatch = useDispatch();
//  const status = useSelector(selectAuthStatus);

//  const handleChange = event => {
//    const { value, name } = event.target;
//    setValues(prev => ({ ...prev, [name]: value }));
//  };

//  const handleSubmit = async event => {
//    event.preventDefault();

//    try {
//      await dispatch(authLoginThunk(values)).unwrap();
//      toast.success('Success!');
//    } catch (error) {
//      console.log(error);
//      toast.error('Some error');
//    }

//    setValues(initialState);
//  };
