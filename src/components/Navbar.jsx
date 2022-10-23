import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <NavbarContainer>
      <div className={toggle ? "nav-menu active" : "nav-menu"}>
        <div className="left-side">
          <ul>
            <Link to={"/"} className="nav-link">
              <li>Home</li>
            </Link>
            <li>Cars</li>
            <li>Contact</li>
            <Link to={"/about-us"} className="nav-link">
              <li>About Us</li>
            </Link>
          </ul>
        </div>
        <div className="right-side">
          <div className="buttons">
            <Link to={"/login"}>
              <button>Sign in</button>
            </Link>
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          </div>
        </div>
        <div className="mobile-menu" onClick={handleToggle}>
          {toggle ? (
            <FaTimes style={{ color: "black", cursor: "pointer" }} size={22} />
          ) : (
            <FaBars style={{ color: "white", cursor: "pointer" }} size={22} />
          )}
        </div>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  position: fixed;
  top: 0%;
  backdrop-filter: blur(20px);
  width: 100%;
  z-index: 999;
  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 2em;
  }
  .left-side ul {
    color: white;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 70px;
    li {
      cursor: pointer;
      :hover {
        color: #cd0003;
      }
    }
  }
  .buttons {
    display: flex;
    gap: 15px;
    align-items: center;
    button {
      padding: 7px 15px;
      color: white;
      border: none;
      font-weight: 650;
      border-radius: 5px;
      background: #870002;
      font-size: 15px;
      font-family: "Nunito Sans", sans-serif;
      :hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
    }
  }
  .mobile-menu {
    position: fixed;
    top: 4%;
    right: 46%;
    z-index: 100;
    display: none;
    margin-top: 10px;
    padding: 5px 8px;
    padding-top: 10px;
    border-radius: 10px;
    background-color: #00000063;
  }
  @media (max-width: 670px) {
    .mobile-menu {
      display: block;
    }
    .nav-menu {
      position: absolute;
      z-index: 999;
      margin-top: -30em;
      flex-direction: column;
      justify-content: center;
      gap: 2em;
      width: 100%;
      height: 60vh;
      align-items: center;
      border-radius: 5px;
      border: 1px solid white;
      transition: 0.4s;
      background: transparent;
      box-shadow: 0px 0px 15px 4px black;
      background-color: #fff2f2;
      ul {
        flex-direction: column;
        gap: 20px;
        li {
          font-size: 20px;
          color: black;
        }
      }
      .buttons {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .nav-menu.active {
    margin-top: 0;
  }
`;

export default Navbar;
