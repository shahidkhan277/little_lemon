import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
      e.preventDefault()
      // Code to handle login goes here
      props.toggle()
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="btnContainer">
          <button className="close-btn" onClick={props.toggle}>
            <IoCloseCircle />
          </button>
        </div>
        <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
          </form>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Login;