const GET_DEMATS = "GET_DEMATS";
const ADD_DEMAT = "ADD_DEMAT";
const DELETE_DEMAT = "DELETE_DEMAT";

export const get_stateDemats = (demats) => {
  return {
    type: GET_DEMATS,
    payload: demats,
  };
};

export const delete_stateDemat = (index) => {
  return {
    type: DELETE_DEMAT,
    payload: index,
  };
};

const reducer = (state = [], actions) => {
  switch (actions.type) {
    case GET_DEMATS:
      return actions.payload;
    case ADD_DEMAT:
      return [...state, actions.payload];
    case DELETE_DEMAT:
      return state.filter((demat) => actions.payload !== state.indexOf(demat));
    default:
      return state;
  }
};
export default reducer;
