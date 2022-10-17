import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="row">
        <div className="columns">
          <div className="column">
            <h3>OVERVIEW</h3>
            <p>Cars</p>
            <p>About Us</p>
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
        <div className="find-us">
          <BsLinkedin className="icon" />
          <BsGithub className="icon" />
        </div>
        <hr />
        <div className="copyright">
          <h3>Copyright © Rent a Car All right reserved.</h3>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3em;
  background-color: #870002;
  color: white;
  padding: 2em 3em;
  .columns {
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
  .find-us {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 2em;
    .icon {
      font-size: 28px;
    }
  }
  hr {
    width: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .copyright {
    text-align: center;
    font-weight: 400;
    margin-top: 2em;
    font-size: 12px;
  }
`;

export default Footer;
