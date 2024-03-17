import React from 'react'
import {coquette, espacio, avenir} from '@/app/fonts'
import Image from 'next/image'

export const metadata = {
    title: 'About | Valen LaRae'
  }

export default function About() {
  return (
        <div className='h-[65vh] w-screen flex justify-center'>
            <div className='w-[50vw] h-[65vh] flex flex-col items-center justify-around'>
                <div className='theartist rounded-full overflow-hidden'>
                    <Image src={'/icons/theartist.png'} height={250} width={250} className='denied'/>
                </div>
                <div className='text-[3.5rem] text-[#181818]'>
                    <h1 className={coquette.className}>
                        About the Artist
                    </h1>
                </div>
                <div className='text-2xl font-bold text-[#181818]'>
                    <h2 className={espacio.className}>
                        A Visual Journey
                    </h2>
                </div>
                <div className='w-[42rem] text-base leading-7 font-light text-center'>
                <p className={avenir.className}>
                    {"A graduate of the Savannah College of Art and Design with a BFA in Sequential Art, carving a path with only her pencil and determination. Currently travelling from event to event, showcasing her work and meeting new people. Lover of both traditional and digital media, finding that they often go hand-in-hand. Her inspirations come from the cartoons and fantasy books of her childhood and a lifetime's experience of growing up in the Southern countryside."}    
                </p>
                </div>
            </div>
        </div>
  )
}
