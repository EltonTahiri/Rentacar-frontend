import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="logo">
        <span>Rent</span> A Car
      </div>
      <div className="row">
        <div className="column">
          <h3>Find Us</h3>
          <p>
            <BsInstagram className="icon" /> Instagram
          </p>
          <p>
            <BsFacebook className="icon" /> Facebook
          </p>
          <p>
            <BsTwitter className="icon" /> Twitter
          </p>
          <p>
            <BsGithub className="icon" /> GitHub
          </p>
          <p>
            <SiGmail className="icon" /> Gmail
          </p>
        </div>
        <div className="column">
          <h3>OVERVIEW</h3>
          <p>About</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Contact</p>
          <p>Terms of use</p>
        </div>
        <div className="column">
          <h3>COMMUNITY</h3>
          <p>Community Central</p>
          <p>Support</p>
          <p>Help</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 27em;
  background-color: #870002;
  color: white;
  padding: 5em 3em;
  .logo {
    text-align: center;
    font-size: 25px;
    margin-bottom: 2em;
  }
  .row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .column {
      h3 {
        margin-bottom: 10px;
      }
      p {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
`;

export default Footer;
