const setLocalStorage = store => next => action => {
  const contacts = store.getState().contacts;
  const newContact = action.payload;
  
  localStorage.setItem("contacts", JSON.stringify(contacts));
  next(action);
};

export default setLocalStorage;
