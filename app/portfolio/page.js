import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { espacio } from '@/app/fonts'
import './portfolio.css'

export const metadata = {
    title: 'Portfolio | Valen LaRae'
  }

export default function Portfolio() {
  return (
    <main className='h-[65vh] w-full flex items-center justify-center'>
        <div className='flex h-fit w-[64em] flex-row justify-between'>

            <div className={`${espacio.className} rounded-full overflow-hidden relative flex items-center bg-white justify-center text-center text-black text-7xl font-bold tracking-wide`}>
                <div className='absolute z-20 w-full pointer-events-none'>
                    Original Art
                </div>
                <Link href={'/portfolio/original-art'}>
                    <Image src={'/icons/original_thumb_md.png'} className={"z-10 opacity-60 rounded-full zoom"} alt="Original Artworks gallery link image." height={323} width={323} priority/>
                </Link>
            </div>

            <div className={`${espacio.className} rounded-full overflow-hidden relative flex items-center bg-white justify-center text-center text-black text-7xl font-bold tracking-wide`}>
                <div className='absolute z-20 w-full pointer-events-none'>
                    <span className='tracking-tighter'>F</span>an Art
                </div>
                <Link href={'/portfolio/fan-art'}>
                    <Image src={'/icons/fan_thumb_md.png'} className={"z-10 opacity-60 rounded-full zoom"} alt="Fan Artworks gallery link image." height={323} width={323}/>
                </Link>
            </div>

            <div className={`${espacio.className} rounded-full overflow-hidden relative flex items-center bg-white justify-center text-center text-black text-7xl font-bold tracking-wide`}>
                <div className='absolute z-20 w-full pointer-events-none'>
                    Sketchbook
                </div>
                <Link href={'/portfolio/sketchbook'}>
                    <Image src={'/icons/sketch_thumb_md.png'} className={"z-10 opacity-60 rounded-full zoom"} alt="Unfinished Sketches gallery link image." height={323} width={323}/>
                </Link>
            </div>

        </div>
    </main>
  )
}
