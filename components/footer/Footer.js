import Link from 'next/link'
import React from 'react'
import { espacio } from '@/app/fonts'
import './footer.css'

export default function Footer() {

  return (
        <div className='foot flex justify-center h-18 w-full bg-white' style={{boxShadow: 'inset rgba(0,0,0,0.7) 0 0 2px'}} id='footer'>
            <div className='flex flex-col items-center justify-center'>

                <div className='flex justify-center text-xl font-bold tracking-widest w-44' id='email-link'>
                    <Link className={espacio.className} href={'mailto&#58;va%6&#67;en&#46;la&#114;%61%6&#53;&#64;%&#54;7&#109;&#97;il&#46;co%6&#68;'}>v&#97;le&#110;&#46;&#108;&#97;rae&#64;gmail&#46;com</Link>
                </div>
                
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
  )
}
