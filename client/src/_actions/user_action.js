import axios from "axios";
import { LOGIN_USER } from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);
  // request를 Reducer에 넘겨주는 작업
  return {
    type: LOGIN_USER,
    payload: request,
  };
}
