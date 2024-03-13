import Image from 'next/image'
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
                    <Image src={'/originals_icon.png'} height={323} width={323}/>
                </Link>
            </div>
            <div>
                <Link href={'/portfolio/fan-art'}>
                    <Image src={'/fanart_icon.png'} height={323} width={323}/>
                </Link>
            </div>
            <div>
                <Link href={'/portfolio/sketchbook'}>
                    <Image src={'/sketchbook_icon.png'} height={323} width={323}/>
                </Link>
            </div>
        </div>
    </div>
  )
}
