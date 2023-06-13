import { useState, useEffect } from 'react';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    );
 });
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = event => {
    const loweredCase = event.name.toLowerCase().trim();

    const exists = contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${event.name} is already in contacts!`);
      return;
    } else {
      setContacts([...contacts, event]);
    }
  };

  const addFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const onDelete = id => {
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(filtered);
    };

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}/>
        <h2>Contacts</h2>
        <Filter setFilter={addFilter} filter={filter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={onDelete}
        />
      </Container>
    );
  };
