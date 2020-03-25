import { connect } from "react-redux";
import * as phoneBookActions from "../../redux/phoneBookActions";
import { selectFilter, selectContacts } from "../../redux/selectors";
import ContactList from "./ContactList";

const mSTP = state => {
  return {
    filter: selectFilter(state),
    contacts: selectContacts(state).filter(contact =>
      contact.name.toLowerCase().includes(selectFilter(state).toLowerCase())
    )
  };
};

const mDTP = dispatch => {
  return {
    onDeleteContact: id => dispatch(phoneBookActions.deleteContact(id))
  };
};

export default connect(mSTP, mDTP)(ContactList);
