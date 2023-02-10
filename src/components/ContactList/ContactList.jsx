import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

import ContactElement from '../ContactElement/ContactElement';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.contact}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactElement key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
