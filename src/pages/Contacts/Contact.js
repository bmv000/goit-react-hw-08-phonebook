import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/users/usersOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './Contact.module.css';

const ContactsPage = () => {
  // const isLoading = useSelector(getIsLoading);

 const dispatch = useDispatch();
 const { isLoading } = useSelector(getContacts);

 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);


  return (
    <div className={css.contact__page}>
      <h2 className={css.contact__title}>Phonebook</h2>
      <ContactForm />
      <h3 className={css.contact__title}>Contacts</h3>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;