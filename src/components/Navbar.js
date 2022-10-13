import React, { useState } from "react";
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
            <li>Home</li>
            <li>Cars</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right-side">
          <div className="buttons">
            <button>Log in</button>
            <button>Register</button>
          </div>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? (
          <FaTimes style={{ color: "black", cursor: "pointer" }} size={22} />
        ) : (
          <FaBars style={{ color: "black", cursor: "pointer" }} size={22} />
        )}
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  width: 100%;
  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 2em;
  }
  .left-side ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 10px;
  }
  .buttons {
    display: flex;
    gap: 5px;
    button {
      padding: 7px 15px;
      border: 2px solid black;
      border-radius: 10px;
      background: none;
    }
  }
  .mobile-menu {
    position: absolute;
    right: 48%;
    top: 3%;
    z-index: 100;
    display: none;
  }
  @media (max-width: 670px) {
    padding: 10px;
    .mobile-menu {
      display: block;
    }
    .nav-menu {
      position: fixed;
      z-index: 99;
      top: -100%;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 60vh;
      background-color: var(--main-color);
      align-items: center;
      border-radius: 20px;
      box-shadow: -7px 10px 22px 7px rgba(78, 78, 78, 0.82);
      border: 1px solid white;
      transition: 0.4s;
      ul {
        flex-direction: column;
        li {
          font-size: 20px;
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
    top: 1%;
    right: 0.4%;
  }
  @media (max-width: 350px) {
    .nav-menu {
      width: 90%;
    }
  }
`;

export default Navbar;
