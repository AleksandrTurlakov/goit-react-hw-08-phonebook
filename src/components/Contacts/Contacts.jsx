import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactName,
  Button,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsPhone/contactsOperations';
import { updateFilter } from '../../redux/contactsPhone/filterSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filterName = useSelector(state => state.filter);

  const getFilterContacts = () => {
    const normalizedFilter = filterName.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();

  const handleClick = id => {
    dispatch(deleteContact(id));
    dispatch(updateFilter(''));
  };

  return (
    <ContactsList>
      {filterContacts.map(({ name, id, number }) => (
        <ContactsItem key={id}>
          <ContactName>
            {name}: {number}
          </ContactName>
          <Button onClick={() => handleClick(id)}>Delete</Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleleteContact: PropTypes.func,
};
