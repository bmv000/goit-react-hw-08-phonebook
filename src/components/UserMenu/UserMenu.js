import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { authLogoutThunk } from 'redux/auth/auth.thunks';
import { toast } from 'react-toastify';


const UserMenu = ({ mail }) => {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await dispatch(authLogoutThunk()).unwrap();
      toast.success('Good bye! ');
    } catch (error) {
      console.log(error);
      toast.error('Something is wrong with log out.');
    }
  };

  return (
    <div>
      <p>{mail}</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  mail: PropTypes.string.isRequired,
};

export default UserMenu;
