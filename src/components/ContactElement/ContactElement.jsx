import PropTypes from 'prop-types';
import css from './ContactElement.module.css';

export default function ContactElement({ id, name, number, onDelete }) {
  return (
    <li className={css.li}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      <button
        className={css.button__delete}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
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
  onDelete: PropTypes.func.isRequired,
};
