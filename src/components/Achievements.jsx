import React from "react";
import styled from "styled-components";
import { BsFillCalendar3WeekFill, BsFillStarFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { HiUsers } from "react-icons/hi";

const Achievements = () => {
  return (
    <Container>
      <div className="col-1">
        <img
          src="https://images.caricos.com/a/audi/2020_audi_a7_55_e/images/2560x1440/2020_audi_a7_55_e_8_2560x1440.jpg"
          alt=""
        />
      </div>
      <div className="col-2">
        <h2>WORLD'S BIGGEST CAR RENTAL BOOKING SERVICE</h2>
        <p>
          Every year, more than 8 million customers trust us to find the perfect
          car for their trip. Because we work with all the leading rental
          companies, we can offer you great prices on all car groups, from
          compact and economy cars to luxury vehicles and SUVs. And with free
          cancellation on the majority of our cars, choosing your ideal car has
          never been easier!
        </p>
        <div className="ach">
          <div className="item">
            <div className="icon-div">
              <BsFillCalendar3WeekFill className="icon" />
            </div>
            <span>600,000 Bookings a Year</span>
          </div>
          <div className="item">
            <div className="icon-div">
              <MdLocationPin className="icon" />
            </div>
            <span>10,000 Locations</span>
          </div>
          <div className="item">
            <div className="icon-div">
              <HiUsers className="icon" />
            </div>
            <span>500,000 Users</span>
          </div>
          <div className="item">
            <div className="icon-div">
              <BsFillStarFill className="icon" />
            </div>
            <span>400,000 Customer Ratings</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 7em;
  width: 100%;
  padding: 0 1em;
  display: flex;
  .col-1 {
    flex: 3;
    height: 30em;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .col-2 {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    padding-left: 2em;
    h2 {
      color: #414141;
      font-family: "Poppins", sans-serif;
    }
    p {
      color: black;
    }
    .ach {
      display: flex;
      flex-wrap: wrap;
      width: 450px;
      gap: 1em;
      .item {
        width: 200px;
        height: 70px;
        display: flex;
        align-items: center;
        gap: 1em;
        .icon-div {
          background-color: #cd0003;
          border-radius: 7px;
          .icon {
            color: white;
            font-size: 30px;
            margin: 10px;
          }
        }
      }
    }
  }
  @media (max-width: 770px) {
    flex-direction: column;
    padding-right: 0;
    .col-2 {
      align-items: center;
    }
  }
  @media (max-width: 500px) {
    .col-2 {
      .ach {
        width: 100%;
        justify-content: flex-start;
      }
    }
  }
`;

export default Achievements;
