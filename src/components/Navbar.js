import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <NavbarContainer>
      <div className="logo">
        <h2>
          Rent A <span>Car</span>
        </h2>
      </div>
      <ul className={toggle ? "nav-menu activeN" : "nav-menu"}>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 2em;
  .nav-menu {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
  .mobile-menu {
    position: absolute;
    right: 4%;
    top: 3%;
    display: none;
    z-index: 100;
  }
  @media (max-width: 670px) {
    padding: 10px;
    .mobile-menu {
      display: block;
    }
    .nav-menu {
      position: fixed;
      z-index: 99;
      top: 1%;
      right: -100%;
      flex-direction: column;
      justify-content: center;
      width: 60%;
      height: 60vh;
      background-color: var(--main-color);
      align-items: center;
      border-radius: 20px;
      box-shadow: -7px 10px 22px 7px rgba(78, 78, 78, 0.82);
      border: 1px solid white;
      transition: 0.4s;
    }
    .nav-menu li {
      padding: 5px 0;
      font-size: 24px;
    }
    .nav-menu.activeN {
      right: 0;
    }
  }
  @media (max-width: 350px) {
    .nav-menu {
      width: 90%;
    }
  }
`;

export default Navbar;
