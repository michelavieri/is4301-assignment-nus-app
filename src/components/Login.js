import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import LoggedIn from './LoggedIn';
import Register from './Register';
import Reset from './Reset';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [register, openRegister] = useState(false);
  const [reset, openReset] = useState(false);

  return (
    <div>
      {user ?
        <LoggedIn />
        :
        register ?
          <Register openRegister={openRegister} />
          :
          reset ?
            <Reset openReset={openReset} openRegister={openRegister} />
            :
            <div className="login">
              <div className="login__container">
                <input
                  type="text"
                  className="login__textBox"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
                <input
                  type="password"
                  className="login__textBox"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button
                  className="login__btn"
                  onClick={() => logInWithEmailAndPassword(email, password)}
                >
                  Login
                </button>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                  Login with Google
                </button>
                <div>
                  <Link onClick={() => openReset(true)}>Forgot Password</Link>
                </div>
                <div>
                  Don't have an account? <Link onClick={() => openRegister(true)}>Register</Link> now.
                </div>
              </div>
            </div>
      }
    </div>
  );
}

export default Login;
