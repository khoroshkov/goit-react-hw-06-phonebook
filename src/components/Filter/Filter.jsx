import React from "react";
import { connect } from "react-redux";
//import * as phoneBookActions from "../../redux/phoneBookActions";
import * as filterActions from "../../redux/filterActions";
//import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => (
  // contacts.length > 2 && (
  <input
    type="text"
    className={styles.filterContact}
    value={value}
    onChange={e => onChangeFilter(e.target.value)}
    placeholder="Search contact by name"
  />
);
//);

// Filter.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired
//     })
//   ).isRequired,
//   value: PropTypes.string,
//   onChangeFilter: PropTypes.func.isRequired
// };

const mSTP = state => {
  
  return {
    filter: state.value,
    state: state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    )
  };
};

const mDTP = dispatch => {
  return {
    onChangeFilter: value => dispatch(filterActions.changeFilter(value))
  };
};

export default connect(mSTP, mDTP)(Filter);
