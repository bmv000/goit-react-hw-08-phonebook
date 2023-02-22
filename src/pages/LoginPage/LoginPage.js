import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginThunk } from 'redux/auth/auth.thunks';
import { selectAuthStatus } from 'redux/auth/auth.selectors';
import { toast } from 'react-toastify';
import {Loader} from 'components/Loader/Loader';

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
    <>
      {status === 'loading' && <Loader />}

     

          <form onSubmit={handleSubmit}>
               <h2>Please Log in Your Phonebook</h2>
        <label>
          Email
                  <input
                        name="email"
            type="email"
          
            required
            autoComplete="on"
            placeholder="name@email.com"
            value={values.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
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

        {/* <ButtonAdding type="button" onClick={() => setIsPassword(prev => !prev)}>Show Password</ButtonAdding> */}
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default LoginPage;