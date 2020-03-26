import * as Type from "../actionsType";
import { v4 as uuidv4 } from "uuid";

export const addContact = ({ name, number }) => {
  return {
    type: Type.ADD_CONTACT,
    payload: {
      id: uuidv4(),
      name,
      number
    }
  };
};

export const deleteContact = id => {
  return {
    type: Type.DELETE_CONTACT,
    payload: {
      id
    }
  };
};
