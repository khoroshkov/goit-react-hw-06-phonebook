import * as Type from "./actionsType";

export const changeFilter = value => {
  return {
    type: Type.CHANGE_FILTER,
    payload: {
      filter: value
    }
  };
};
