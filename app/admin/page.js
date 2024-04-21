'use client'

import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import {jwtDecode} from "jwt-decode"
import AdminCreate from '@/components/AdminCreate/AdminCreate'
import Link from 'next/link'

export default function Admin() {

    const [isAuth, setIsAuth] = useState(false)

    const [newUser, setNewUser] = useState({})

    const [events, setEvents] = useState([])

    const [images, setImages] = useState([])

    const buttonStyle = "border-2 rounded-md border-black p-1 mt-2"

    const goodButton = "transition ease hover:bg-yellow-500 hover:border-white hover:text-white"
    const warnButton = "transition ease hover:bg-red-500 hover:border-white hover:text-white"

    const subHeadStyle = "text-xl underline"

    useEffect(() => {
      if (!verifyToken()) {
        console.log("token invalid")
        localStorage.clear();
        setIsAuth(false);
      } else {
        console.log("token valid")
        setIsAuth(true);
      }
    }, [])

    useEffect(() => {
      Axios.get("https://valen-larae-backend.vercel.app/events/all")
      .then((response) => {
        setEvents(response.data.events)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
    }, [events])

    useEffect(() => {
        Axios.get("https://valen-larae-backend.vercel.app/images/all")
        .then((response) => {
          setImages(response.data.images)
        })
        .catch((error) => {
          console.log(error.response.data)
        })
      }, [images])
    
    
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
        Axios.post("https://valen-larae-backend.vercel.app/auth/signup", user)
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
        Axios.post("https://valen-larae-backend.vercel.app/auth/login", credentials)
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

    const handleDelete = (type, id) => {
        Axios.delete(`https://valen-larae-backend.vercel.app/${type}/delete?id=${id}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        })
        .then((response) => {
            console.log("item deleted")
        })
        .catch((err) => {
            console.log("error", err)
        })

    }

  return (

    !!isAuth ?

    <div className='w-full flex flex-col items-center text-center'>
        <div className='text-2xl underline font-bold my-6'>
            Admin Dashboard
        </div>
        <div>
            <button className={`${buttonStyle} ${goodButton}`} onClick={() => handleLogout()}>Log Out</button>
        </div>

        <div className='my-6'>
            <div className='text-2xl mb-3 underline font-semibold'>Events</div>
            <div className={subHeadStyle}>Add New Event</div>
            <AdminCreate type={"event"} />
        </div>
        
        <div className='w-full flex flex-row flex-wrap justify-center'>
        {
            events.map((event, index) => (
                <div key={index} className="m-4 p-4 border-2 border-black">
                    <div>{event.name}</div>
                    <div>{event.dateStart}<br/>-<br/>{event.dateEnd}</div>
                    <button className={`${buttonStyle} ${warnButton}`} onClick={() => handleDelete("events", event._id)}>Delete</button>
                </div>
            ))
        }
        </div>

        <div className='my-6'>
            <div className='text-2xl mb-3 underline font-semibold'>Images</div>
            <div className={subHeadStyle}>Add New Image</div>
            <AdminCreate type={"image"} />
        </div>
            <div className={subHeadStyle}>Originals</div>

            <div className='w-full flex flex-row flex-wrap justify-center'>
            
            {
                images.map((original, index) => (
                    original.category === "Original Work" ?
                    <div key={index} className="m-4 p-4 border-2 border-black">
                        <Link href={`${original.url}`}>{original.title}</Link>
                        <div>{original.media}</div>
                        <div>{original.dimensions}</div>
                        <button className={`${buttonStyle} ${warnButton}`} onClick={() => handleDelete("images", original._id)}>Delete</button>
                    </div>
                    :
                    <></>
                ))
            }

            </div>

            <div className={subHeadStyle}>Fan Art</div>

            <div className='w-full flex flex-row flex-wrap justify-center'>

            {
                images.map((fanart, index) => (
                    fanart.category === "Fan Art" ?
                    <div key={index} className="m-4 p-4 border-2 border-black">
                        <Link href={`${fanart.url}`}>{fanart.title}</Link>
                        <div>{fanart.media}</div>
                        <div>{fanart.dimensions}</div>
                        <button className={`${buttonStyle} ${warnButton}`} onClick={() => handleDelete("images", fanart._id)}>Delete</button>
                    </div>
                    :
                    <></>
                ))
            }
            
            </div>

            <div className={subHeadStyle}>Sketchbook</div>

            <div className='w-full flex flex-row flex-wrap justify-center'>

            {
                images.map((sketch, index) => (
                    sketch.category === "Sketchbook" ?
                    <div key={index} className="m-4 p-4 border-2 border-black">
                        <Link href={`${sketch.url}`}>{sketch.title}</Link>
                        <div>{sketch.media}</div>
                        <div>{sketch.dimensions}</div>
                        <button className={`${buttonStyle} ${warnButton}`} onClick={() => handleDelete("images", sketch._id)}>Delete</button>
                    </div>
                    :
                    <></>
                ))
            }

            </div>

    </div>

    :

    <div className='w-full flex flex-col items-center text-center'>

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

        <div className='w-full flex flex-col items-center text-center' id="login-form">
            <h1 className='text-2xl underline my-6'>Admin Login</h1>
            <Container className='flex flex-col justify-around h-32 w-32 items-center'>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="" name="userName" onChange={(e) => handleChange(e)}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="" name="password" type='password' onChange={(e) => handleChange(e)}></Form.Control>
                </Form.Group>
            </Container>
            <Button className={buttonStyle} variant='primary' onClick={() => handleLogin()}>Login</Button>
        </div>

    </div>
  )
}
