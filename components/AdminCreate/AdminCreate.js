import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

export default function AdminNew(props) {

    const [newEventEntry, setNewEventEntry] = useState({})

    const [newImageEntry, setNewImageEntry] = useState({})

    const fieldStyle  = 'flex w-full justify-between m-2'

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

    }

    const handleImageSubmit = () => {

    }    

  return (
    <div>
        <Container className='w-80 flex flex-col'>
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
                <Button onClick={() => console.log(newEventEntry)}>test</Button>
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
                    <Form.Label>Orientation</Form.Label>
                    <Form.Select className="" name="orientation" onChange={(e) => handleImageChange(e)}>
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
                <Button onClick={() => console.log(newImageEntry)}>test</Button>
            </>
            }

        </Container>
    </div>
  )
}
