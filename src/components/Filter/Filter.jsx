import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { selectFilter, selectContacts } from "../../redux/selectors";
import * as filterActions from "../../redux/filterActions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import popTransition from "../transitions/pop.module.css"

const Filter = ({ contacts, value, onChangeFilter }) =>
  contacts.length > 2 && (
    <CSSTransition in={true} timeout={250} unmountOnExit classNames={popTransition}>
    <form className={styles.filterForm}>
      <label>Find contact by name</label>
      <input
        type="text"
        className={styles.filterContact}
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </form>
    </CSSTransition>
  );

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired
};

const mSTP = state => {
  return {
    filter: selectFilter(state),
    contacts: selectContacts(state)
  };
};

const mDTP = dispatch => {
  return {
    onChangeFilter: value => dispatch(filterActions.changeFilter(value))
  };
};

export default connect(mSTP, mDTP)(Filter);
