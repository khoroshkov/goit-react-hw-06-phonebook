import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Title from "../Title/Title";
import Notification from "../Notification/Notificaation";
import ContactList from "./../ContactList/ContactListContainer";
import ContactForm from "./../ContactForm/ContactForm";
import Filter from "./../Filter/Filter";
import styles from "./../ContactForm/ContactForm.module.css";
import slide from "../transitions/slide.module.css";
import slideError from "../transitions/slideError.module.css";

class App extends Component {
  state = {
    isLoading: false,
    isExist: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 0);
  }

  render() {
    const {isLoading} = this.state;

    return (
      <div className={styles.contactsWrapper}>
        <CSSTransition in={isLoading} timeout={500} classNames={slide} unmountOnExit>
          <Title />
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={250}
          classNames={slideError}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default connect()(App);
