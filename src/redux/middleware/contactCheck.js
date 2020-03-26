const contactCheck = store => next => action => {
  const contacts = store.getState().contacts;

  if (contacts.some(contact => contact.name === action.payload.name)) {
  } else {
    next(action);
  }
};

export default contactCheck;


// оставил для себя пример рабочего middleware.