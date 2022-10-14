import { AiFillEdit } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'
import { selectCarById } from './carsApiSlice'

import React from 'react'

const Car = ({ carId }) => {
    const car = useSelector(state => selectCarById(state, carId))

    const navigate = useNavigate()
    
    if(car) {
        const handleEdit = () => navigate(`/dash/users/${carId}`)

        
      return (
        <tr className="table">
            <td>{car.manufacturer}</td>
            <td>{car.engine}</td>
            <td>{car.consumption}</td>
            <td>
                <button
                onClick={handleEdit} 
                ><AiFillEdit/></button>
            </td>
        </tr>
      )
    }else return null
}

export default Car