import React from "react";
import styled from "styled-components";
import backgroundVid from "../assets/background-video.mp4";

const Services = () => {
  return (
    <Container>
      <div className="bg-vid">
        <video autoPlay loop muted className="background-image">
          <source src={backgroundVid} type="video/mp4" />
        </video>
      </div>
      <div className="services">
        <h3 className="title">Our Services</h3>
        <ul>
          <li>Business Rentals</li>
          <li>Enterprise Car Sales</li>
          <li>Replacement Rentals</li>
          <li>Long-Drive Renetals</li>
          <li>1 Year+ Rentals</li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  video {
    width: 100%;
    filter: brightness(0.3);
    object-fit: cover;
    height: 70vh;
    position: absolute;
    z-index: -1;
    padding-bottom: 3em;
  }
  .services {
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    align-items: center;
    float: right;
    margin-right: 7em;
    backdrop-filter: blur(20px);
    box-shadow: 0px 0px 7px 2px white;
    padding: 4em 7em;
    margin-top: 3em;
    color: white;
    .title {
      font-family: "Poppins";
      font-weight: 500;
      margin-bottom: 1em;
    }
    ul {
      li {
        font-size: 20px;
        font-weight: 300;
      }
    }
  }
  @media (max-width: 630px) {
    .services {
      margin-right: 1em;
    }
  }
  @media (max-width: 460px) {
    .services {
      padding: 4em 5em;
    }
  }
`;

export default Services;
