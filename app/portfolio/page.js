import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Portfolio | Valen LaRae'
  }

export default function Portfolio() {
  return (
    <div className='h-[65vh] w-screen flex items-center justify-center'>
        <div className='flex h-fit w-[61em] flex-row justify-between'>
            <div>
                <Link href={'/portfolio/original-art'}>
                    <img src='originals_icon.png'/>
                </Link>
            </div>
            <div>
                <Link href={'/portfolio/fan-art'}>
                    <img src='fanart_icon.png'/>
                </Link>
            </div>
            <div>
                <Link href={'/portfolio/sketchbook'}>
                    <img src='sketchbook_icon.png'/>
                </Link>
            </div>
        </div>
    </div>
  )
}
