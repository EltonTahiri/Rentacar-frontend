import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react";
import { useAddNewCarMutation } from './carsApiSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NAME_REGEX = /^[A-z0-9 ]{5,30}$/
const MANUFACTURER_REGEX = /^[A-z]{2,30}$/
const ENGINE_REGEX = /^[A-z0-9. ]{5,30}$/
const CONSUMPTION_REGEX = /^[A-z0-9.]{2,8}$/
const SEATS_REGEX= /^[0-9]{1,3}$/
const LICENSE_REGEX = /^[A-z0-9-]{4,35}$/

const NewCar = () => {
  
  const [addNewCar, { isLoading, isSuccess, isError, error }] =
    useAddNewCarMutation();

  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [manufacturer, setManufacturer] = useState('');
  const [validManufacturer, setValidManufacturer] = useState(false);
  const [engine, setEngine] = useState('');
  const [validEngine, setValidEngine] = useState(false);
  const [consumption, setConsumption] = useState('');
  const [validConsumption, setValidConsumption] = useState(false);
  const [seats, setSeats] = useState('');
  const [validSeats, setValidSeats] = useState(false);
  const [licensePlate, setLicense] = useState('');
  const [validLicense, setValidLicense] = useState(false);

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidManufacturer(MANUFACTURER_REGEX.test(manufacturer))
  },[manufacturer])

  useEffect(() => {
    setValidEngine(ENGINE_REGEX.test(engine))
  },[engine])

  useEffect(() => {
    setValidConsumption(CONSUMPTION_REGEX.test(consumption));
  }, [consumption]);
  
  useEffect(() => {
    setValidSeats(SEATS_REGEX.test(seats));
  }, [seats]);

  useEffect(() => {
    setValidLicense(LICENSE_REGEX.test(licensePlate));
  }, [licensePlate]);

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setManufacturer("");
      setEngine("");
      setConsumption("");
      setSeats();
      setLicense("")
      navigate("/dash/cars");
    }
  }, [isSuccess, navigate]);


  const onNameChanged = (e) => setName(e.target.value);
  const onManufacturerChanged = (e) => setManufacturer(e.target.value);
  const onEngineChanged = (e) => setEngine(e.target.value);
  const onConsumptionChanged = (e) => setConsumption(e.target.value);
  const onSeatsChanged = (e) => setSeats(e.target.value);
  const onLicenseChanged = (e) => setLicense(e.target.value);

  const canSave = [validName, validManufacturer, validEngine, validConsumption, validSeats, validLicense].every(Boolean) && !isLoading


  const onSaveCarClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewCar({ name, manufacturer, engine, consumption, seats, licensePlate})
    }
  }

  const errClass = isError ? 'errmsg' : 'offscreen'
  const validNameClass = !validName ? 'form__input--incomplete' : ''
  const validManufacturerClass = !validManufacturer ? 'form__input--incomplete' : ''
  const validEngineClass = !validEngine ? 'form__input--incomplete' : ''
  const validConsumptionClass = !validConsumption ? 'form__input--incomplete' : ''
  const validSeatsClass = !validSeats ? 'form__input--incomplete' : ''
  const validLicenseClass = !validLicense ? 'form__input--incomplete' : ''

  const content = (
    <CarForm>
    <>
        <p className={errClass}>{error?.data?.message}</p>

        <form className="form" onSubmit={onSaveCarClicked}>
            <div className="form__title-row">
                <h2>New Car</h2>
                <div className="form__action-buttons">
                    <button
                        className="icon-button"
                        title="Save"
                        disabled={!canSave}
                    >
                       <FontAwesomeIcon icon={faSave} />
                    </button>
                </div>
            </div>

            <label className="form__label" htmlFor="name">
                Car name: <span className="nowrap">[3-20 letters] ex. Golf 7 2019</span></label>
            <input
                className={`form__input ${validNameClass}`}
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                value={name}
                onChange={onNameChanged}
            />

             <label className="form__label" htmlFor="manufacturer">
                Manufacturer: <span className="nowrap">[2-30 letters] ex. Volkswagen</span></label>
            <input
                className={`form__input ${validManufacturerClass}`}
                id="manufacturer"
                name="manufacturer"
                type="text"
                autoComplete="off"
                value={manufacturer}
                onChange={onManufacturerChanged}
            />

             <label className="form__label" htmlFor="engine">
                Engine: <span className="nowrap">[5, 30 letters] ex. 2.5L TDI</span></label>
            <input
                className={`form__input ${validEngineClass}`}
                id="engine"
                name="engine"
                type="text"
                autoComplete="off"
                value={engine}
                onChange={onEngineChanged}
            />

            <label className="form__label" htmlFor="consumption">
                Consumption: <span className="nowrap">[2-8 letters] ex. 7.1L</span></label>
            <input
                className={`form__input ${validConsumptionClass}`}
                id="consumption"
                name="consumption"
                type="text"
                value={consumption}
                onChange={onConsumptionChanged}
            />

            <label className="form__label" htmlFor="seats">
                Seats: <span className="nowrap">[1-3 letters] ex. 3</span></label>
            <input
                className={`form__input ${validSeatsClass}`}
                id="seats"
                name="seats"
                type="text"
                value={seats}
                onChange={onSeatsChanged}
            />

            <label className="form__label" htmlFor="license">
                License Plate: <span className="nowrap">[4-35 letters] ex. 01-123-KN</span></label>
            <input
                className={`form__input ${validLicenseClass}`}
                id="license"
                name="license"
                type="text"
                value={licensePlate}
                onChange={onLicenseChanged}
            />

            

        </form>
           
        
    </>
    </CarForm>
)





  return content
}

const CarForm = styled.div `
  .form {
  display: flex;
  flex-flow: column nowrap;
  gap: 0.75em;
  max-width: 800px;
}

.form__checkbox-container {
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 0.5em;
}

.form__persist {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5em;
}

.form__title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form__input,
.form__submit-button {
  padding: 0.5em;
  border-radius: 15px;
}

.form__input--text {
  min-height: 150px;
}

.form__input--incomplete {
  border: 1px solid #F00;
  outline: 1px solid #F00;
}

.form__checkbox {
  width: 24px;
  height: 24px;
}

.form__select {
  width: fit-content;
  padding: 0.25em;
}

.form__action-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;
  position: absolute;
  right: 0.5em;
}

.form__row {
  display: flex;
  flex-flow: row nowrap;
  gap: 2em;
}

.form__divider {
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5em;
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 2rem;
  }

  .dash-header__nav {
    gap: 0;
  }

  .icon-button {
    font-size: 1.5rem;
  }
}`;


export default NewCar