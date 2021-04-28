import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage() {
  // redux flow 중 dispatch
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const onEmaillHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // target.value 확인
    console.log("Email", Email);
    console.log("Password", Password);
    // 서버에 보내기
    let body = {
      email: Email,
      password: Password,
    };
    // dispatch를 이용해서 action을 취한다.
    // redux flow ( dispatch(action) - ACTION(객체) - REDUCER - STORE)
    // _actions 폴더 user_action.js
    dispatch(loginUser(body));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Eamil</label>
        <input type="email" value={Email} onChange={onEmaillHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>login</button>
      </form>
    </div>
  );
}

export default LoginPage;
