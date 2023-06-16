import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid'
import { Formik, Form, Field } from 'formik';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name: fieldName, value: fieldValue } = e.target;

    switch (fieldName) {
      case 'name':
        setName(fieldValue);
        break;
      case 'number':
        setNumber(fieldValue);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const event = {
      id: nanoid(),
      name,
      number,
    };

    addContact(event);
    setName('');
    setNumber('');
  };

  
    return (
    <Formik 
        initialValues={{ name: '', number: '' }} 
      >
      <Form autoComplete="off" className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            required
            value={name}
            onChange={onInputChange}
          />
   
        <label className={css.label}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            required
            value={number}
            onChange={onInputChange}
          />
        <button className={css.btn} type="submit">
          Add contact
        </button>
        </Form>
      </Formik>
    );
  }


ContactForm.types = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};