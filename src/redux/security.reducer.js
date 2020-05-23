import { SIGN_IN } from "./security.actions";
const initialState = {
  data: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
