import Link from 'next/link'
import React from 'react'
import { espacio } from '@/app/fonts'
import './footer.css'

export default function Footer() {

  return (
        <div className='foot flex justify-center w-screen h-24 bg-white' style={{boxShadow: 'inset rgba(0,0,0,0.7) 0 0 2px'}} id='footer'>
            <div className='flex flex-col items-center justify-center w-fit'>

                <div className='flex justify-center text-lg font-bold tracking-widest w-44' id='email-link'>
                    <Link className={espacio.className} href={'mailto:valen.larae@gmail.com'}>valen.larae@gmail.com</Link>
                </div>
                
                <div className='flex w-44 justify-center' id='socials'>
                    <div className='flex w-20 justify-between'>
                        {/* <a href='https://bsky.app/profile/valenlarae.bsky.social'>
                            <img src='/bluesky.svg' id='bluesky'/>
                        </a> */}
                        <a href='https://www.twitter.com/ValenLaRae'>
                            <i className='bi bi-twitter-x text-xl transition ease hover:opacity-40 duration-300'></i>
                        </a>
                        <a href='https://valenlarae.tumblr.com'>
                            <img src='/icons/icons8-tumblr.svg' className='h-7' id='tumblr'/>
                        </a>
                        <a href='https://www.instagram.com/valenlarae'>
                            <i className='bi bi-instagram text-xl' id='insta'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}
