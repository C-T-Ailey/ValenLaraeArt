import Link from 'next/link'
import React from 'react'
import { coquette, espacio } from '@/app/fonts'
import './header.css'

export default function Header() {

  return (
    <div className='nav fixed top-0 w-full h-24 flex flex-col items-center justify-evenly bg-white z-40 p-2' style={{boxShadow: 'rgba(0,0,0,0.7) 0 0 5px'}} id='container'>
        <div className='flex justify-center' id='title'>
            <div className='text-4xl font-bold tracking-widest text-[#181818]'>
                <h1 className={espacio.className}>Valen LaRae</h1>
            </div>
        </div>
        <div className='flex justify-center w-full h-12' id='nav'>
            <div className='flex justify-center items-center w-[45rem]'>
                
                <div className={`${coquette.className} flex justify-around w-full text-[1.35rem] md:text-[1.6rem] font-bold text-[#2e2e2e]`} id='nav'>
                    <Link href={"/"} className='transition ease hover:opacity-50 focus:opacity-100 active:opacity-20 duration-[400ms]'>Home</Link>
                    <Link href={"/about"} className='transition ease hover:opacity-50 focus:opacity-100 active:opacity-0 duration-[400ms]'>About</Link>
                    <Link href={"/gallery"} className='transition ease hover:opacity-50 focus:opacity-100 active:opacity-0 duration-[400ms]'>Gallery</Link>
                    <Link href={"/contact"} className='transition ease hover:opacity-50 focus:opacity-100 active:opacity-0 duration-[400ms]'>Contact</Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}
