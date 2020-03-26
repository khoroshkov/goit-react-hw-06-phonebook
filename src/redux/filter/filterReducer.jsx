import * as Type from "../actionsType";

const filterReducer = (filter = "", { type, payload }) => {
  switch (type) {
    case Type.CHANGE_FILTER:
      return payload.filter;
    default:
      return filter;
  }
};

export default filterReducer;
