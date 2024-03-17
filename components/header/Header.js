import Link from 'next/link'
import React from 'react'
import { espacio } from '@/app/fonts'
import './header.css'

export default function Header() {

  return (
    <div className='nav fixed w-full h-48 flex flex-col items-center justify-evenly bg-white z-20' style={{boxShadow: 'rgba(0,0,0,0.7) 0 0 5px'}} id='container'>
        <div className='flex justify-center' id='title'>
            <div className='text-3xl font-bold tracking-widest text-[#181818]'>
                <h1 className={espacio.className}>Valen LaRae</h1>
            </div>
        </div>
        <div className='flex justify-center w-full h-12 bg-white' id='nav'>
            <div className='flex justify-center items-center w-[60rem]'>
                
                <div className='flex justify-between w-80 text-[1.35rem] font-bold text-[#2e2e2e]' id='nav'>
                    <Link href={"/"} className='transition ease hover:opacity-40 duration-[400ms]'>Home</Link>
                    <Link href={"/about"} className='transition ease hover:opacity-40 duration-[400ms]'>About</Link>
                    <Link href={"/portfolio"} className='transition ease hover:opacity-40 duration-[400ms]'>Portfolio</Link>
                    <Link href={"/contact"} className='transition ease hover:opacity-40 duration-[400ms]'>Contact</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
