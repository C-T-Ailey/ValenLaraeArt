import Image from 'next/image'
import React from 'react'
import {coquette, espacio} from '@/app/fonts'
import Link from 'next/link'

export const metadata = {
    title: 'Contact | Valen LaRae'
  }

export default function Contact() {
  return (
    <main className='h-[65vh] flex flex-row justify-center items-center'>
        <div className='h-[26rem] flex flex-col justify-around'>
            <div className='text-[3.5rem]'>
                <h1 className={coquette.className}>Contact</h1>
            </div>
            <div className='text-2xl font-bold tracking-wider w-[29rem] leading-[1.5em]'>
                <p className={espacio.className}>Thank you so much for viewing my site! If you have any questions or concerns, feel free to contact me by email or social media.</p>
            </div>
            <div className='w-fit text-3xl font-bold tracking-widest'>
                <Link className={espacio.className} href={'mailto&#58;va%6&#67;en&#46;la&#114;%61%6&#53;&#64;%&#54;7&#109;&#97;il&#46;co%6&#68;'}>v&#97;le&#110;&#46;&#108;&#97;rae&#64;gmail&#46;com</Link>
                <div className='flex w-full items-center justify-center' id='socials'>
                    
                        <div id='bluesky'>
                            <a href='https://bsky.app/profile/valenlarae.bsky.social'>
                                <img src='/icons/bluesky.png'/>
                            </a>
                        </div>
                        <div id='xtwitter'>
                            <a href='https://www.twitter.com/ValenLaRae'>
                                <i className='bi bi-twitter-x text-3xl transition ease hover:opacity-40 duration-300'></i>
                            </a>
                        </div>
                        <div id='tumblr'>
                            <a href='https://valenlarae.tumblr.com'>
                                <img src='/icons/icons8-tumblr.png'/>
                            </a>
                        </div>
                        <div id='instagram'>
                            <a href='https://www.instagram.com/valenlarae'>
                                <i className='bi bi-instagram text-3xl' id='insta'></i>
                            </a>
                        </div>
                    
                </div>
            </div>
        </div>
        <div className='h-fit w-fit '>
            <Image src={"/images/original/BusinessCards2023.jpg"} alt="Business card artwork." width={425} height={725}/>
        </div>
    </main>
  )
}
