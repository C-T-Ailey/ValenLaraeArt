import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { espacio } from '@/app/fonts'
import './portfolio.css'

export const metadata = {
    title: 'Gallery | Valen LaRae'
  }

export default function Gallery() {

    const linkDivStyle = `${espacio.className} rounded-full overflow-hidden relative flex items-center bg-white justify-center tracking-wide mx-auto my-3 max-w-40 md:max-w-56 lg:max-w-60 xl:max-w-[323px]`

    const innerBorder = 'absolute z-30 h-full w-full rounded-full border-white border-[3px] pointer-events-none'

    const titleStyle = 'absolute w-[80%] md:w-[75%] z-20 w-full pointer-events-none text-center text-black text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold'

    const imageStyle = 'z-10 opacity-60 rounded-full zoom'

  return (
    <div className='md:h-full w-full text-center'>
        <h1 className={`${espacio.className} text-4xl lg:text-5xl xl:text-6xl font-bold underline my-4 lg:my-6 xl:mt-12 tracking-wide`}>Gallery</h1>
        <div className='w-[90%] md:w-[70%] flex flex-wrap justify-center mx-auto my-12 md:my-7 xl:my-[calc(((100vh-6rem)-450px)/3)]'>
            <div className={linkDivStyle}>
                <div className={innerBorder}>
                </div>
                <div className={titleStyle}>
                    Original Works
                </div>
                <Link href={'/gallery/original-works'}>
                    <Image src={'/icons/original_thumb_md.png'} className={imageStyle} alt="Original Artworks gallery link image." height={323} width={323} priority/>
                </Link>
            </div>

            <div className={linkDivStyle}>
                <div className={innerBorder}>
                </div>
                <div className={titleStyle}>
                    <span className='tracking-tighter'>F</span>an Art
                </div>
                <Link href={'/gallery/fan-art'}>
                    <Image src={'/icons/fan_thumb_md.png'} className={imageStyle} alt="Fan Artworks gallery link image." height={323} width={323} priority/>
                </Link>
            </div>

            <div className={linkDivStyle}>
                <div className={innerBorder}>
                </div>
                <div className={titleStyle}>
                    Sketchbook
                </div>
                <Link href={'/gallery/sketchbook'}>
                    <Image src={'/icons/sketch_thumb_md.png'} className={imageStyle} alt="Unfinished Sketches gallery link image." height={323} width={323} priority/>
                </Link>
            </div>

        </div>
    </div>
  )
}
