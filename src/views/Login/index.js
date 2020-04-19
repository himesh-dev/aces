import React, { useState } from "react";
import { connect } from "react-redux";
import { LOGIN } from "./redux/actionTypes";
import { UPDATE_CURR_PAGE } from "../../views/Details/redux/actionTypes";
import { setLocalStorage } from "../../utils/apiModule";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const onLoginHandler = (e) => {
    e.preventDefault();
    if (email === "") {
      setError("Enter correct Email");
      return;
    }
    if (password.length < 6) {
      setError("Password must be of 6 characters");
      return;
    }
    if (email === "test@test.co" && password === "123456") {
      let obj = { token: "token1" };
      setLocalStorage("user1", JSON.stringify(obj));
      props.dispatch({ type: LOGIN, payload: "user1" });
      props.dispatch({ type: UPDATE_CURR_PAGE, payload: "home" });
    } else {
      setError("Incorrect email or password");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onLoginHandler}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
        <p>{error ? error : null}</p>
      </form>
    </div>
  );
};

export default connect()(Login);
