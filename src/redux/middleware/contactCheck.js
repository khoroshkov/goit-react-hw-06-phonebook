const contactCheck = store => next => action => {
  const contacts = store.getState().contacts;

  if (contacts.some(contact => contact.name === action.payload.name)) {
    console.log(store.getState());
    alert(`${action.payload.name} is already in contacts`);
  } else {
    next(action);
  }
};

export default contactCheck;
