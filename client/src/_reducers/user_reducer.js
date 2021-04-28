/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_USER } from "../_actions/types";
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
}
