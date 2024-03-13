import Link from 'next/link'
import React from 'react'
import { espacio } from '@/app/fonts'
import './header.css'

export default function Header() {

  return (
    <div className='nav fixed w-full h-48 flex flex-col items-center justify-evenly bg-white' style={{boxShadow: 'rgba(0,0,0,0.7) 0 0 5px'}} id='container'>
        <div className='flex justify-center' id='title'>
            <div className='text-3xl font-bold tracking-widest text-[#181818]'>
                <h1 className={espacio.className}>Valen LaRae</h1>
            </div>
        </div>
        <div className='flex justify-center w-full h-12 bg-white' id='nav'>
            <div className='flex justify-between items-center w-[60rem]'>
                <div className='text-lg font-bold tracking-widest w-44' id='email-link'>
                    <Link className={espacio.className} href={'mailto:valen.larae@gmail.com'}>valen.larae@gmail.com</Link>
                </div>
                <div className='flex justify-between w-80 text-[1.35rem] font-bold text-[#2e2e2e]' id='nav'>
                    {/* style={{filter: 'blur(0.5px)'}} */}
                    <Link href={"/"} className='transition ease hover:opacity-40 duration-[400ms]'>Home</Link>
                    <Link href={"/about"} className='transition ease hover:opacity-40 duration-[400ms]'>About</Link>
                    <Link href={"/portfolio"} className='transition ease hover:opacity-40 duration-[400ms]'>Portfolio</Link>
                    <Link href={"/contact"} className='transition ease hover:opacity-40 duration-[400ms]'>Contact</Link>
                </div>
                <div className='flex w-44 justify-end' id='socials'>
                    <div className='flex w-20 justify-between'>
                        <a href='https://www.twitter.com/ValenLaRae'>
                            <i className='bi bi-twitter-x text-xl transition ease hover:opacity-40 duration-300'></i>
                        </a>
                        <a href='https://valenlarae.tumblr.com'>
                            <img src='/icons8-tumblr.svg' className='h-7' id='tumblr'/>
                        </a>
                        <a href='https://www.instagram.com/valenlarae'>
                            <i className='bi bi-instagram text-xl' id='insta'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
