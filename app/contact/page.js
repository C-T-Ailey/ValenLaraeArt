import Image from 'next/image'
import React from 'react'
import {coquette, espacio} from '@/app/fonts'
import Link from 'next/link'

export const metadata = {
    title: 'Contact | Valen LaRae'
  }

export default function Contact() {
  return (
    <div className='h-full md:h-fit md:w-full flex justify-center md:m-auto'>
        <div className='w-fit flex flex-col-reverse md:flex-row md:justify-evenly items-start md:items-center'>
            <div className='h-fit md:h-[26rem] flex flex-col justify-around md:m-5'>
                <div className='text-4xl lg:text-5xl text-center md:text-left font-bold underline my-3 md:my-0'>
                    <h1 className={espacio.className}>Contact</h1>
                </div>
                <div className='text-2xl lg:text-3xl font-bold tracking-wider md:w-[29rem] leading-[1.5em] mx-5 md:mx-0'>
                    <p className={espacio.className}>Thank you so much for visiting! If you have any questions, concerns, or just want to chat, feel free to contact me by email or social media.</p>
                </div>
                <div className='flex flex-col items-center w-full  text-3xl font-bold tracking-widest my-3'>
                    <Link className={espacio.className} href={'mailto:valen.larae@gmail.com'}>valen.larae@gmail.com</Link>
                    <div className='flex w-full items-center justify-center' id='socials'>
                        
                            <div id='bluesky'>
                                <a href='https://bsky.app/profile/valenlarae.bsky.social' target='_blank' rel='noopener noreferrer'>
                                    <img src='/icons/bluesky.png'/>
                                </a>
                            </div>
                            <div id='xtwitter'>
                                <a href='https://www.twitter.com/ValenLaRae' target='_blank' rel='noopener noreferrer'>
                                    <i className='bi bi-twitter-x text-4xl transition ease hover:opacity-40 duration-300'></i>
                                </a>
                            </div>
                            <div id='tumblr'>
                                <a href='https://valenlarae.tumblr.com' target='_blank' rel='noopener noreferrer'>
                                    <img src='/icons/icons8-tumblr.png'/>
                                </a>
                            </div>
                            <div id='instagram'>
                                <a href='https://www.instagram.com/valenlarae' target='_blank' rel='noopener noreferrer'>
                                    <i className='bi bi-instagram text-4xl' id='insta'></i>
                                </a>
                            </div>
                        
                    </div>
                </div>
            </div>

            <div className='relative h-56 w-full overflow-hidden md:static md:overflow-none md:h-fit md:w-fit md:mx-5'>
                <Image className='nXy44zmWO5dj absolute top-[-12rem] md:relative md:top-[unset]' src={"/images/original/BusinessCards2023.jpg"} alt="Business card artwork." width={425} height={725} priority/>
            </div>
        </div>
    </div>
  )
}
