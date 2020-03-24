
import * as Type from "./actionsType";

const INITIAL_STATE = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
];

const phoneBookReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case Type.ADD_CONTACT:
      return [...state, payload];

    case Type.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    // case Type.CHANGE_FILTER:
    //   return state.filter(contact =>
    //     contact.name.toLowerCase().includes(payload.filter.toLowerCase())
    //   );

    default:
      return state;
  }
};




export default phoneBookReducer;
