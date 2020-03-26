import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { selectContacts } from "../../redux/selectors";
import * as phoneBookActions from "../../redux/contacts/phoneBookActions";
import InputTelMask from "react-input-mask";
import Notification from "../Notification/Notification";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import slideError from "../transitions/slideError.module.css";

class ContactForm extends PureComponent {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: "",
    isExist: false
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts } = this.props;
    const { name } = this.state;

    if (contacts.some(contact => contact.name === name)) {
      this.setState({ isExist: true });

      setTimeout(() => {
        this.setState({ isExist: false });
      }, 2000);
    } else {
      this.props.onAddContact({ ...this.state });
    }

    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number, isExist } = this.state;
    return (
      <div>
        <form className={styles.contactForm} onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            className={styles.contactInput}
            name="name"
            value={name}
            onChange={this.handleInput}
            required
          />
          <label>Number</label>
          <InputTelMask
            mask="999-99-99"
            type="tel"
            className={styles.contactInput}
            name="number"
            value={number}
            onChange={this.handleInput}
            placeholder="only numbers"
            required
          />
          <input
            type="submit"
            className={styles.addButton}
            value="Add contact"
          />
        </form>
        <CSSTransition
          in={isExist}
          timeout={250}
          classNames={slideError}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </div>
    );
  }
}

const mSTP = state => {
  return {
    contacts: selectContacts(state)
  };
};

const mDTP = dispatch => {
  return {
    onAddContact: ({ name, number }) =>
      dispatch(phoneBookActions.addContact({ name, number }))
  };
};

export default connect(mSTP, mDTP)(ContactForm);
