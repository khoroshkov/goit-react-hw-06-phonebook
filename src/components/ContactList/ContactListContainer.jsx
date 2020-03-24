import { connect } from "react-redux";
import * as phoneBookActions from "../../redux/phoneBookActions";
import ContactList from "./ContactList";

const mSTP = state => {
  return state;
};

const mDTP = dispatch => {
  return {
    onDeleteContact: id => dispatch(phoneBookActions.deleteContact(id))
  }
};

export default connect(mSTP, mDTP)(ContactList);
