import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleFfindContactName = contactName => {
    return contacts.find(contact => contact.name === contactName);
  };

  const handleAddContact = (name, number, reset) => {
    if (handleFfindContactName(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContact => [newContact, ...prevContact]);
    reset();
  };
  const handleDeleteContact = userId => {
    setContacts(prev => prev.filter(({ id }) => id !== userId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const handleFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filterContacts = handleFilterContacts();
  return (
    <section className={css.section}>
      <h2 className={css.part__title}>Phonebook</h2>
      <ContactForm onSubmit={handleAddContact} />
      <h2 className={css.part__title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts} onDelete={handleDeleteContact} />
    </section>
  );
};
export default App;
