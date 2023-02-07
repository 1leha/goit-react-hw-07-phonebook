import { createSelector } from '@reduxjs/toolkit';

export const sellectContacts = state => state.contacts.items;
export const sellectIsLoading = state => state.contacts.isLoading;
export const sellectError = state => state.contacts.error;
export const sellectFilter = state => state.filter;

//
export const sellectFilteredContacts = createSelector(
  [sellectContacts, sellectFilter],
  (contacts, filter) => {
    const filterNormalized = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalized)
    );

    return {
      filteredContacts,
      isFilteredContactsEmpty: filteredContacts.length === 0,
    };
  }
);

export const sellectIsPhonebookEmpty = createSelector(
  [sellectContacts],
  contacts => {
    return contacts.length === 0;
  }
);
