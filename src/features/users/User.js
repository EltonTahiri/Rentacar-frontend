import { AiFillEdit } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'
import { selectUserById } from "./usersApiSlice";

import React from 'react'

const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId))

    const navigate = useNavigate()
    
    if(user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')
        
      return (
        <tr className="table">
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{userRolesString}</td>
            <td>
                <button
                onClick={handleEdit} 
                ><AiFillEdit/></button>
            </td>
        </tr>
      )
    }else return null
}

export default User