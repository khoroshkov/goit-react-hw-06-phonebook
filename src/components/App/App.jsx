import React, { Component } from "react";
import ContactList from "./../ContactList/ContactListContainer";
import ContactForm from "./../ContactForm/ContactForm";
import Filter from "./../Filter/Filter";
import styles from "./../ContactForm/ContactForm.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.contactsWrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
