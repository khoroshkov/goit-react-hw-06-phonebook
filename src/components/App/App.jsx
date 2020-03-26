import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Title from "../Title/Title";
import ContactList from "./../ContactList/ContactListContainer";
import ContactForm from "./../ContactForm/ContactForm";
import Filter from "./../Filter/Filter";
import styles from "./../ContactForm/ContactForm.module.css";
import slide from "../transitions/slide.module.css";


class App extends Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 0);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className={styles.contactsWrapper}>
        <CSSTransition
          in={isLoading}
          timeout={500}
          classNames={slide}
          unmountOnExit
        >
          <Title />
        </CSSTransition>
        
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default (App);
