'use client'

import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import {jwtDecode} from "jwt-decode"
import AdminCreate from '@/components/AdminCreate/AdminCreate'

export default function Admin() {

    const [isAuth, setIsAuth] = useState(false)

    const [newUser, setNewUser] = useState({})

    useEffect(() => {
      if (verifyToken() !== true) {
        console.log("token invalid")
        localStorage.clear();
        setIsAuth(false);
      } else {
        console.log("token valid")
        setIsAuth(true);
      }
    }, [])
    
    const verifyToken = () => {
        if (!!localStorage.getItem("token")){
          let token = localStorage.getItem("token")
          let timeNow = new Date().valueOf()
          let user = jwtDecode(token)
          return parseInt(timeNow.toString().slice(0,10)) < user.exp
        }
    }

    const handleChange = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user) 
    }

    const handleRegistration = () => {
        let user = newUser;
        Axios.post("//localhost:4000/auth/signup", user)
        .then(response => {
            if (response.data.message.slice(0,6)==="Failed"){
                console.log("User registration failed.")
            } else {
                console.log(response, "Signed up successfully!")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleLogin = () => {
        let credentials = newUser
        Axios.post("//localhost:4000/auth/login", credentials)
        .then(response => {
            if(Object.keys(response.data.token).length){
                localStorage.setItem("token", response.data.token);
                setIsAuth(true)
            } else {
                console.log("not auth")
            }
        })
    }

    const handleLogout = () => {
        localStorage.clear();
        setIsAuth(false);
    }

  return (

    !!isAuth ?

    <div className='w-full flex flex-col items-center text-center'>
        <div>
            Admin Dashboard
        </div>
        <div>
            <button onClick={() => handleLogout()}>Log Out</button>
        </div>

        <div className='my-6'>
            <div className='text-2xl mb-3'>Events</div>
            <div className='text-lg'>Add New</div>
            <AdminCreate type={"event"} />
        </div>

        <div>
            <div className='text-2xl mb-3'>Images</div>
            <div className='text-lg'>Add New</div>
            <AdminCreate type={"image"} />
            <div>Original</div>
            <div>Fan Art</div>
            <div>Sketchbook</div>
        </div>

    </div>

    :

    <div className='w-full flex flex-col items-center text-center'>

        <div>
            You must be logged in to access this page.
        </div>

        {/* <div id="signup-form">
            <h1>Sign Up</h1>
            <Container>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="" name="userName" onChange={(e) => handleChange(e)}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="" name="password" type='password' onChange={(e) => handleChange(e)}></Form.Control>
                </Form.Group>
            </Container>
            <Button variant='primary' onClick={() => handleRegistration()}>Register</Button>
        </div> */}

        <br/>

        <div id="login-form">
            <h1>Login</h1>
            <Container>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="" name="userName" onChange={(e) => handleChange(e)}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="" name="password" type='password' onChange={(e) => handleChange(e)}></Form.Control>
                </Form.Group>
            </Container>
            <Button variant='primary' onClick={() => handleLogin()}>Login</Button>
        </div>

    </div>
  )
}
