import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCarById } from './carsApiSlice'
import EditCarForm from './EditCarForm'

const EditCar = () => {

  const { id } = useParams()

  const car = useSelector(state => selectCarById(state, id))

  const content = car ? <EditCarForm car={car} /> : <p>Loading ...</p>

  return content
}

export default EditCar