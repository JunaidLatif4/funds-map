import { refresh_token } from "../api/auth";

const SIGN_UP = "SIGN_UP";
const initState = { token: "" };

export const signup_user = (token) => {
  return {
    type: SIGN_UP,
    payload: token,
  };
};

// export const token_refresh = async (token) => {
//   const refreshed = await refresh_token(token);
// };

const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case SIGN_UP:
      return { ...state, token: actions.payload };
    default:
      return state;
  }
};

export default reducer;
