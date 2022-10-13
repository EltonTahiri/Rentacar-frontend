import React from "react";
import styled from "styled-components";
import heroBg from "../images/hero-bg.jpg";

const Hero = () => {
  return (
    <Container>
      <div className="bg">
        <img src={heroBg} alt="" />
      </div>
      <div className="details">
        <h3>
          Plan Your Trip <br /> With Auto Leasing
        </h3>
        <p>Chose from best cars</p>
        <input type="search" placeholder="Search Cars" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3em;
  .bg {
    position: absolute;
    z-index: -1;
    img {
      width: 100%;
      height: 78vh;
      object-fit: cover;
    }
  }
  .details {
    height: 78vh;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: flex-start;
    background-image: linear-gradient(to right, #000000d6 10%, #0000002f 80%);
    padding-left: 3em;
    h3 {
      font-size: 2em;
    }
    input {
      margin: 1em 0;
      padding: 10px;
      width: 300px;
      border-radius: 20px;
    }
  }
`;

export default Hero;
