import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/usersSlice';
import css from './ContactElement.module.css';

export default function ContactElement({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={css.li}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      <button
        className={css.button__delete}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
