import React from 'react'
import {coquette, espacio} from '@/app/fonts'
import Link from 'next/link'

export const metadata = {
    title: 'Contact | Valen LaRae'
  }

export default function Contact() {
  return (
    <div className='h-[65vh] flex flex-row justify-center items-center'>
        <div className='h-[26rem] flex flex-col justify-around'>
            <div className='text-[3.5rem]'>
                <h1 className={coquette.className}>Contact</h1>
            </div>
            <div className='text-2xl font-bold tracking-wider w-[29rem] leading-[1.8em]'>
                <p className={espacio.className}>Thank you so much for viewing my site! If you have any questions or concerns, feel free to contact me by email or social media.</p>
            </div>
            <div className='text-3xl font-bold tracking-widest'>
                <Link className={espacio.className} href={'mailto:valen.larae@gmail.com'}>valen.larae@gmail.com</Link>
                <div className='w-[17rem] h-7 flex justify-center'>
                    <div className='flex w-24 h-6 justify-between items-center'>
                        <a href='https://www.twitter.com/ValenLaRae'>
                            <i className='bi bi-twitter-x text-xl transition ease hover:opacity-40 duration-300'></i>
                        </a>
                        <a href='https://valenlarae.tumblr.com'>
                            <img src='/icons/icons8-tumblr.svg' className='h-7 mt-[3px]' id='tumblr'/>
                        </a>
                        <a href='https://www.instagram.com/valenlarae'>
                            <i className='bi bi-instagram text-xl' id='insta'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[25rem] w-[29rem] border-2 border-black flex items-center justify-center'>
            this is where the email form is going to be
        </div>
    </div>
  )
}
