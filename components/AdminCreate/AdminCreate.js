import React, { useState } from 'react'
import Axios from "axios"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

export default function AdminNew(props) {

    const [newEventEntry, setNewEventEntry] = useState({})

    const [newImageEntry, setNewImageEntry] = useState({})

    const fieldStyle  = 'flex w-full justify-between m-2'

    const buttonStyle = "w-fit border-2 rounded-md border-black p-1"

    const handleEventChange = (e) => {
        const entry = {...newEventEntry}
        entry[e.target.name] = e.target.value
        setNewEventEntry(entry)
    }

    const handleImageChange = (e) => {
        const entry = {...newImageEntry}
        entry[e.target.name] = e.target.value
        setNewImageEntry(entry)
    }

    const handleEventSubmit = () => {
        Axios.post("//localhost:4000/events/add", newEventEntry, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => {
            console.log(response.data)
            if (!response.data.event){
                console.log("User registration failed.")
            } else {
                console.log(response, "Event created successfully!")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleImageSubmit = () => {
        console.log(newImageEntry)
        if (!newImageEntry.category) {
            newImageEntry.category = "Original Work"
        }
        if (!newImageEntry.orientation) {
            newImageEntry.orientation = "Portrait"
        }
        Axios.post("//localhost:4000/images/add", newImageEntry, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => {
            if (!response.data.image){
                console.log("Image creation failed.")
            } else {
                console.log(response, "Image created successfully!")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }    

  return (
    <div>
        <Container className='w-80 flex flex-col items-center'>
            {props.type === "event" ?
            <>
                <Form.Group className={fieldStyle}>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control className="" name="name" onChange={(e) => handleEventChange(e)}></Form.Control>
                </Form.Group>
                
                <Form.Group className={fieldStyle}>
                    <Form.Label>Event Location</Form.Label>
                    <Form.Control className="" name="location" onChange={(e) => handleEventChange(e)}></Form.Control>
                </Form.Group>
                
                <Form.Group className={fieldStyle}>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control className="" name="dateStart" onChange={(e) => handleEventChange(e)}></Form.Control>
                </Form.Group>
                
                <Form.Group className={fieldStyle}>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control className="" name="dateEnd" onChange={(e) => handleEventChange(e)}></Form.Control>
                </Form.Group>
                
                <Form.Group className={fieldStyle}>
                    <Form.Label>Event Website URL</Form.Label>
                    <Form.Control className="" name="eventUrl" onChange={(e) => handleEventChange(e)}></Form.Control>
                </Form.Group>
                <Button className={buttonStyle} onClick={() => handleEventSubmit()}>Submit Event</Button>
            </>

            :

            <>
                <Form.Group className={fieldStyle}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="" name="title" onChange={(e) => handleImageChange(e)}></Form.Control>
                </Form.Group>
                
                <Form.Group className={fieldStyle}>
                    <Form.Label>Media</Form.Label>
                    <Form.Control className="" name="media" onChange={(e) => handleImageChange(e)}></Form.Control>
                </Form.Group>

                <Form.Group className={fieldStyle}>
                    <Form.Label>Gallery Category</Form.Label>
                    <Form.Select className="" name="category" defaultValue="Original Work" onChange={(e) => handleImageChange(e)}>
                        <option>Original Work</option>
                        <option>Fan Art</option>
                        <option>Sketchbook</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className={fieldStyle}>
                    <Form.Label>Orientation</Form.Label>
                    <Form.Select className="" name="orientation" defaultValue="Portrait" onChange={(e) => handleImageChange(e)}>
                        <option>Portrait</option>
                        <option>Landscape</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className={fieldStyle}>
                    <Form.Label>Print Dimensions</Form.Label>
                    <Form.Control className="" name="dimensions" onChange={(e) => handleImageChange(e)}></Form.Control>
                </Form.Group>
                
                <Form.Group className={fieldStyle}>
                    <Form.Label>Image Source URL</Form.Label>
                    <Form.Control className="" name="url" onChange={(e) => handleImageChange(e)}></Form.Control>
                </Form.Group>
                <Button className={buttonStyle} onClick={() => handleImageSubmit()}>Submit Image</Button>
            </>
            }

        </Container>
    </div>
  )
}
