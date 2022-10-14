import React from 'react'
import styled from 'styled-components'
import porscheimg from '../assets/porsche.jpg'
import backgroundVid from '../assets/videoplayback.mp4'
import { Link } from 'react-router-dom';


const LoginForm = () => {
  return (
    <Login>
    <section >
        <video autoPlay loop muted className='background-image'>
            <source src={backgroundVid} type='video/mp4' />
        </video>
        <div className='login'>
            <div className='col-1'>
                <h2>Sign in</h2>
                <span>Login with your registered account</span>

                <form id='form' className='flex flex-col'>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Password'></input>

                    <button className='btn'>Login</button>
                    <div className='other'>
                        <Link to={'/'} className='nav-link'>
                        <span className='home'>Back Home</span>
                        </Link>
                        <Link to={'/register'} className='nav-link'>
                        <span className='home'>Don't have an account?</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </Login>
  )
}


const Login = styled.div`
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
  
  .login{
    color: white;
    border-radius: 20px;
    max-width: 700px;
    width: 100vw;
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
  
  .login span{
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
  
  .login .col-1{
    margin: auto;
    padding: 3em 0;
  }
  
  .login .col-2 img{
    width: 480px;
    height: 100%;
    object-fit: cover;
    align-self: flex-end;
    filter: brightness(0.8);
    display: none;
  }
  
  @media screen and (min-width: 860px)  {
    .login .col-2 img{
      display: initial;
    }
  }


`
export default LoginForm
