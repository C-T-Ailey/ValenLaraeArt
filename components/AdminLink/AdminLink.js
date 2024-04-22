'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {coquette, espacio, avenir} from '@/app/fonts'

export default function AdminLink() {

    const [password, setPassword] = useState([])
    const [correct, setCorrect] = useState(0)

    const router = useRouter()

    function secret(event) {
        let counter = correct
        const press = event.target.innerText

        if (correct === 0 && press === "V") {
          setCorrect(counter += 1)
        }
        
        else if (correct === 1 && press === "L") {
            setCorrect(counter += 1)
          }

         else if (correct === 2 && press === "R") {
            setCorrect(counter += 1)
        }

        else if (correct === 3 && press === "A") {
            router.push("/admin")
        } else {
            setCorrect(0)
        }
    }


  return (
    <h1 className={espacio.className}><span onClick={(e) => secret(e)}>A</span>rt <span className="text-3xl xl:text-4xl">by </span><span onClick={(e) => secret(e)}>V</span>alen <span onClick={(e) => secret(e)}>L</span>a<span onClick={(e) => secret(e)}>R</span>ae</h1>
  )
}
