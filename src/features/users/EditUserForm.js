import React from 'react'
import { useState, useEffect } from 'react'
import { useUpdateUserMutation, useDeleteUserMutation } from './usersApiSlice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { ROLES } from '../../config/roles'

const USER_REGEX = /^[A-z0-9]{3,20}$/;
const PWD_REGEX = /^[A-z0-9@#$%!]{4,12}$/;
const EM_REGEX = /^[A-z0-9@#$%.]{5,35}$/
const PH_REGEX = /^[0-9+]{5,20}$/



const EditUserForm = ({ user }) => {

    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation()

    const [deleteUser, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteUserMutation()

    const navigate = useNavigate()


  const [username, setUsername] = useState(user.username);
  const [validUsername, setValidUsername] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [validEmail, setValidEmail] = useState(false);
  const [phone, setPhone] = useState(user.phone);
  const [validPhone, setValidPhone] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(user.roles);


  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EM_REGEX.test(email))
  },[email])

  useEffect(() => {
    setValidPhone(PH_REGEX.test(phone))
  },[phone])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);


  useEffect(() => {
    if (isSuccess || isDelSuccess) {
        setUsername('')
        setEmail('')
        setPhone()
        setPassword('')
        setRoles([])
        navigate('/dash/users')
    }
  },[isSuccess, isDelSuccess, navigate])

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions, //HTML COLLECTION
      (option) => option.value
    );
    setRoles(values);
  };

  const onSaveUserClicked = async (e) => {
    if (password) {
        await updateUser({ id: user.id, username, email, phone, password, roles})
    } else {
        await updateUser ({ id: user.id, username, email, phone, roles})
    }
  }

  const onDeleteUserClicked = async () => {
    await deleteUser({ id: user.id })
  }

  const options = Object.values(ROLES).map(role => {
    return (
        <option
            key={role}
            value={role}

        > {role}</option >
    )
})

  let canSave 
  if (password) {
    canSave = [roles.length, validUsername, validEmail, validPhone, validPassword].every(Boolean) && !isLoading
  } else {
    canSave = [ roles.length, validUsername, validUsername].every(Boolean) && !isLoading
  }


  const errClass = (isError || isDelError) ? 'errmsg' : 'offscreen'
  const validUserClass = !validUsername ? "form__input--incomplete" : "";
  const validEmailClass = !validEmail ? "form__input--incomplete" : "";
  const validPhoneClass = !validPhone ? "form__input--incomplete" : "";
  const validPwdClass = password && !validPassword ? "form__input--incomplete" : "";
  const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''

  const errContent = (error?.data?.message || delerror?.data?.message) ?? ''



  const content = (
    <UserForm>
    <>
        <p className={errClass}>{errContent}</p>

        <form className="form" onSubmit={e => e.preventDefault()}>
            <div className="form__title-row">
                <h2>Edit User</h2>
                <div className="form__action-buttons">
                    <button
                        className="icon-button"
                        title="Save"
                        onClick = {onSaveUserClicked}
                        disabled={!canSave}
                    >
                       <FontAwesomeIcon icon={faSave} />
                    </button>
                    <button
                        className="icon-button"
                        title="Delete"
                        onClick = {onDeleteUserClicked}
                    >
                       <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>

            <label className="form__label" htmlFor="username">
                Username: <span className="nowrap">[3-20 letters]</span></label>
            <input
                className={`form__input ${validUserClass}`}
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                value={username}
                onChange={onUsernameChanged}
            />

             <label className="form__label" htmlFor="email">
                email: <span className="nowrap">[10-30 letters]</span></label>
            <input
                className={`form__input ${validEmailClass}`}
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                value={email}
                onChange={onEmailChanged}
            />

             <label className="form__label" htmlFor="phone">
                phone: <span className="nowrap">[5-30 numbers incl. + 0]</span></label>
            <input
                className={`form__input ${validPhoneClass}`}
                id="phone"
                name="phone"
                type="[hone"
                autoComplete="off"
                value={phone}
                onChange={onPhoneChanged}
            />

            <label className="form__label" htmlFor="password">
                Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span></label>
            <input
                className={`form__input ${validPwdClass}`}
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={onPasswordChanged}
            />

            <label className="form__label" htmlFor="roles">
                ASSIGNED ROLES:</label>
            <select
                id="roles"
                name="roles"
                className={`form__select ${validRolesClass}`}
                multiple={true}
                size="3"
                value={roles}
                onChange={onRolesChanged}
            >
                {options}
            </select>

        </form>
           
        
    </>
    </UserForm>
)
  return content 
}

const UserForm = styled.div`
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
  };`

export default EditUserForm