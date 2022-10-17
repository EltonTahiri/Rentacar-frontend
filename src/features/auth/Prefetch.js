import { store } from '../../app/store'
import { carsApiSlice } from '../cars/carsApiSlice'
import { usersApiSlice } from '../users/usersApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import React from 'react'


const Prefetch = () => {
  useEffect(() => {
    console.log('subscribing')
    const cars = store.dispatch(carsApiSlice.endpoints.getCars.initiate())
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
    
    return () => {
        console.log('unsubcribing')
        cars.unsubscribe()
        users.unsubscribe()
    }
  },[])

  return <Outlet />
}

export default Prefetch