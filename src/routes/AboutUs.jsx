import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <Container>
      <Navbar />
      <img
        className="bg"
        src="https://images.hdqwalls.com/wallpapers/porsche-918-red-vp.jpg"
        alt=""
      />
      <div className="container">
        <h2>About Us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          obcaecati itaque adipisci et voluptas fugit iusto ut aperiam ratione.
          Non blanditiis at quas, saepe perferendis dolorum adipisci numquam
          aliquam laboriosam laborum amet! Adipisci, totam! Rem possimus a nulla
          laborum eligendi.
        </p>
        <h3>
          Team of Developers & Designers: <br /> Elton Tahiri and Amir Tahiri
        </h3>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    object-fit: cover;
    filter: brightness(0.7);
  }
  .container {
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30em;
    margin: auto;
    margin-top: 8em;
    color: white;
    backdrop-filter: blur(20px);
    padding: 40px;
    text-align: center;
    gap: 20px;
    border-radius: 10px;
    box-shadow: 0 0 6px 1px white;

    h3 {
      font-weight: 400;
      margin-top: 1em;
      font-size: 17px;
    }
  }
  @media (max-width: 550px) {
    .container {
      width: 90%;
    }
  }
`;

export default AboutUs;
