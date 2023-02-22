import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const response = await axios.get(`/contacts`);
  return response.data;
}

export async function addContact(newContact) {
  const response = await axios.post(`/contacts`, newContact);
  return response.data;
}

export async function deleteContact(contactId) {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
}
export async function updateContact(contactId) {
  const response = await axios.patch(`/contacts/${contactId}`);
  return response.data;
}