
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <section className={css.section}>
      <h2 className={css.part__title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.part__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};
export default App;
