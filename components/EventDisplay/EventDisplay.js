'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Axios from 'axios'
import { espacio } from '@/app/fonts'

export default function EventDisplay() {

    const [events, setEvents] = useState([])
    
    useEffect(() => {
        Axios.get("https://valen-larae-backend.vercel.app/events/all")
        .then((response) => {
          setEvents(response.data.events)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [events])

  return (
    !!events.length ?
    <>
        { events.map((event, index) => (
            <div key={index} className="h-fit m-3 lg:m-6">
              <div className="sooner">
                <div className='text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider '>
                    <div className="flex flex-row">
                      <Link href={event.eventUrl} className={`${espacio.className} transition ease hover:opacity-40 duration-[400ms]`} target='_blank' rel='noopener noreferrer'>{event.name}</Link>
                    </div>
                </div>
                <div className='text-xl lg:text-2xl font-bold tracking-wider '>
                    <p className={espacio.className}>{event.location}</p>
                    <p className={espacio.className}>{event.dateStart} - {event.dateEnd}</p>
                </div>
              </div>
            </div>
          ))}
    </>
    :
    <div className='text-2xl lg:text-3xl font-bold tracking-wider '>
        <p className={espacio.className}>Loading events...</p>
    </div>
  )
}
