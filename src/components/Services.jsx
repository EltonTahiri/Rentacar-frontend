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
        <h3 className="title">The Services We Offer</h3>
        <div className="items">
          <div className="item">
            <h3>Long-Drive Rentals</h3>
            <p>
              We offer long-drive cars for yours trips. With our best long-drive
              cars, you will love the experience of your long-trip.
            </p>
            <button>Choose Your Ride</button>
          </div>
          <div className="item">
            <h3>Business Rentals</h3>
            <p>
              We offer cars for your business too. Chose the cars that suites
              you or your bussiness from our amazing cars.
            </p>
            <button>Choose Your Ride</button>
          </div>
          <div className="item">
            <h3>Replacement Rentals</h3>
            <p>
              Don't like or need your own ride. Choose a better one here. Plan
              your next road trip, weekend getaway or personal challange.
            </p>
            <button>Choose Your Replacement</button>
          </div>
          <div className="item">
            <h3>Luxury Rentals</h3>
            <p>
              We offer some of the luxuriest cars of this time. Endless options
              from the best car compaines. Chose your luxury ride!
            </p>
            <button>Choose Your Luxury Ride</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  video {
    width: 100%;
    filter: brightness(0.3);
    object-fit: cover;
    height: 94vh;
    position: absolute;
    z-index: -1;
    padding-bottom: 3em;
  }
  .services {
    .title {
      font-size: 25px;
    }
    color: white;
    height: 85vh;
    width: 100%;
    padding: 2em 3em;
    .items {
      margin-top: 5em;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      flex-wrap: wrap;
      .item {
        backdrop-filter: blur(20px);
        box-shadow: 0px 0px 7px 2px black;
        width: 300px;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 7px;
        padding: 1em;
        gap: 10px;
        h3 {
          font-weight: 500;
          text-decoration: underline;
        }
        button {
          padding: 5px 7px;
          font-size: 17px;
          border-radius: 5px;
          border: none;
          background-color: #870002;
          backdrop-filter: blur(20px);
          color: white;
          margin-top: 5px;
          cursor: pointer;
          :hover {
            filter: brightness(0.9);
          }
        }
      }
    }
    .title {
      font-family: "Poppins";
      font-weight: 500;
      margin-top: 2em;
      margin-bottom: 1em;
      text-align: center;
    }
  }
  @media (max-width: 730px) {
    video {
      height: 150vh;
    }
    .services {
      height: 150vh;
    }
  }
  @media (max-width: 500px) {
    .services {
      padding: 2em 1em;
    }
  }
`;

export default Services;
