import PropTypes from 'prop-types';
import ContactElement from '../ContactElement/ContactElement';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contact}>
      {contacts.map(({ id, name, number }) => (
        <ContactElement
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,};
