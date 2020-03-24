import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as phoneBookActions from "../../redux/phoneBookActions";
import InputTelMask from "react-input-mask";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";



 class ContactForm extends PureComponent {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number } = this.state;
    return (
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
        <input type="submit" className={styles.addButton} value="Add contact" />
      </form>
    );
  }
}

const mDTP = dispatch => {
  return {
    onAddContact: ({ name, number }) => dispatch(phoneBookActions.addContact({ name, number }))
  }
}

export default connect(null, mDTP)(ContactForm)