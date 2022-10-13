import React from 'react'
import styled from 'styled-components'
import porscheimg from '../assets/porsche.jpg'
import model from '../assets/model.jpg'
import { Link } from 'react-router-dom';


const RegisterForm = () => {
  return (
    <Register>
    <section >
        <img className='background-image' src={model}></img> 
        <div className='register'>
            <div className='col-1'>
                <h2>Sign Up</h2>
                <span>Register and start renting immidiately</span>

                <form id='form' className='flex flex-col'>
                    <input type='text' placeholder='Username'></input>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Phone'></input>
                    <input type='text' placeholder='Password'></input>
                    <input type='text' placeholder='Confirm password'></input>

                    <button className='btn'>Register</button>
                    <div className='other'>
                        <Link to={'/'} className='nav-link'>
                        <span className='home'>Back Home</span>
                        </Link>
                        <span>Login instead</span>
                    </div>
                </form>
            </div>
            <div className='col-2'>
                <img src={porscheimg} alt=""  />
            </div>
        </div>
    </section>
    </Register>
  )
}


const Register = styled.div`
    .background-image{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        filter: brightness(0.3);
        object-fit: cover;
    }
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
    }
  
  .App {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .register{
    color: white;
    border-radius: 20px;
    max-width: 978px;
    width: 100vw;
    background-color: blue;
    display:flex;
    justify-content: center;
    overflow: hidden;
    border: none;
    /* box-shadow: 1px 3px 10px #e9ecef; */
    background: transparent;
    box-shadow: 0px 0px 15px 4px black;
    backdrop-filter: blur(20px);
  }
  .home{
    :hover{
        color: red;
    }
  }
  
  .register span{
    color: #adb5bd;
  }
  .other{
    display: flex;
    justify-content: space-between;
  }
  
  #form{
    max-width: 320px;
    width: 100vw;
    margin: 2em auto;
  }
  
  #form >  input, .btn{
    border: none;
    padding: .9em 1em;
  }
  #form input {
    font-family: 'Nunito Sans', sans-serif;
    border: 1px solid grey;
    border-radius: 10px;
  }
  
  #form > input:focus{
    outline: none;
  }
  
  #form > .btn{
    background-color: #870002;
    color: #e9ecef;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        transition: 0.2s;
        filter: brightness(0.8);
    }
  }
  
  .flex{
    display: flex;
    gap: 1em;
  }
  
  .flex-col{
    flex-direction: column;
  }
  
  .register .col-1{
    margin: auto;
    padding: 3em 0;
  }
  
  .register .col-2 img{
    width: 480px;
    height: 100%;
    object-fit: cover;
    align-self: flex-end;
    filter: brightness(0.8);
    display: none;
  }
  
  @media screen and (min-width: 860px)  {
    .register .col-2 img{
      display: initial;
    }
  }


`
export default RegisterForm
