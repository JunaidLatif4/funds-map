const GET_BANKS = "GET_BANKS";
const ADD_BANK = "BANK";
const DELETE_BANK = "DELETE_BANK";

export const get_stateBanks = (bank) => {
  return {
    type: GET_BANKS,
    payload: bank,
  };
};

export const delete_stateBank = (index) => {
  return {
    type: DELETE_BANK,
    payload: index,
  };
};

const reducer = (state = [], actions) => {
  switch (actions.type) {
    case GET_BANKS:
      return actions.payload;
    case ADD_BANK:
      return [...state, actions.payload];
    case DELETE_BANK:
      return state.filter((bank) => actions.payload !== state.indexOf(bank));
    default:
      return state;
  }
};
export default reducer;
