import React from "react";
import styled from "styled-components";
import backgroundVid from "../assets/videoplayback.mp4";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";

const LoginForm = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
    userRef.current.focus()
  },[])

  useEffect(() => {
    setErrMsg('')
  },[email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { accessToken } = await login({ email, password }).unwrap()
      dispatch(setCredentials({ accessToken }))
      setEmail('')
      setPassword('')
      navigate('/')
    } catch (err) {
      if(!err.status) {
        setErrMsg('No server response');
      } else if (err.status === 400) {
        setErrMsg('Missing email or password')
      } else if (err.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg(err.data?.message)
      }
      errRef.current.focus()
    }
  }

  const handleUserInput = (e) => setEmail(e.target.value)
  const handlePwdInput = (e) => setPassword(e.target.value)

  const errClass = errMsg ? "errmsg" : "offscreen";

  if (isLoading) return <p>Loading...</p>;

  const content = (
    <Login>
      <section>
        <video autoPlay loop muted className="background-image">
          <source src={backgroundVid} type="video/mp4" />
        </video>
        <div className="login">
          <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
          <div className="col-1">
            <h2>Sign in</h2>
            <span>Login with your registered account</span>

            <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                ref={userRef}
                value={email}
                onChange={handleUserInput}
                autoComplete="off"
                required
              ></input>
              <input
                type="password"
                placeholder="Password"
                onChange={handlePwdInput}
                value={password}
                required
              ></input>

              <button className="btn">Login</button>
              <div className="other">
                <Link to={"/"} className="nav-link">
                  <span className="home">Back Home</span>
                </Link>
                <Link to={"/register"} className="nav-link">
                  <span className="home">Don't have an account?</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Login>
  );

  return content;
};

const Login = styled.div`
  .background-image {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: brightness(0.3);
    object-fit: cover;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
  }

  .login {
    color: white;
    border-radius: 20px;
    max-width: 700px;
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border: none;
    /* box-shadow: 1px 3px 10px #e9ecef; */
    background: transparent;
    box-shadow: 0px 0px 15px 4px black;
    backdrop-filter: blur(20px);
  }
  .home {
    :hover {
      color: red;
    }
  }

  .login span {
    color: #adb5bd;
  }
  .other {
    display: flex;
    justify-content: space-between;
  }

  #form {
    max-width: 320px;
    width: 100vw;
    margin: 2em auto;
  }

  #form > input,
  .btn {
    border: none;
    padding: 0.9em 1em;
  }
  #form input {
    font-family: "Nunito Sans", sans-serif;
    border: 1px solid grey;
    border-radius: 10px;
  }

  #form > input:focus {
    outline: none;
  }

  #form > .btn {
    background-color: #870002;
    color: #e9ecef;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      transition: 0.2s;
      filter: brightness(0.8);
    }
  }

  .flex {
    display: flex;
    gap: 1em;
  }

  .flex-col {
    flex-direction: column;
  }

  .login .col-1 {
    margin: auto;
    padding: 3em 0;
  }

  .login .col-2 img {
    width: 480px;
    height: 100%;
    object-fit: cover;
    align-self: flex-end;
    filter: brightness(0.8);
    display: none;
  }

  @media screen and (min-width: 860px) {
    .login .col-2 img {
      display: initial;
    }
  }
`;
export default LoginForm;
