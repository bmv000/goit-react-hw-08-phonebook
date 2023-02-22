import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { getIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactsPage = () => {
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
};

export default ContactsPage;