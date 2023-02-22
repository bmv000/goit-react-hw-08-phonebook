

import { publicApi } from '../../services/api';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { authLoginThunk } from '../../redux/auth/auth.thunks';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Loader} from '../../components/Loader/Loader';

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
    <>
      {isLoading && <Loader />}

      <form
        // action="#"
        // className="mt-5 mx-auto p-0"
        // style={{ width: '450px' }}
        onSubmit={handleSubmit}
      >
        <h1>Please Sign In</h1>

       
          <label>
            Email address
            <input
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
        

          <label>
            First Name
            <input
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
        

       
          <label>
            Password
            <input
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

        <Link to="/">Already has account?</Link>

        <button type="submit">Sign In</button>
      
      </form>
    </>
  );
};

export default RegisterPage;