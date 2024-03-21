import React from 'react'
import {coquette, espacio, avenir} from '@/app/fonts'
import Image from 'next/image'
import Frame from '/public/images/frame-port.png'
import Val from '/public/icons/theartist.png'

export const metadata = {
    title: 'About | Valen LaRae'
  }

export default function About() {

  const imageContainerStyle = 'relative my-6'
  const portraitFrameStyle = 'w-[18rem] h-[24rem] md:w-[24rem] md:h-[32rem] relative z-10 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)]'
  const portraitImageStyle = 'w-[14.25rem] h-[19.5rem] md:w-[18rem] md:h-[27rem] absolute top-[2.25rem] left-[1.8rem] md:top-[2.5rem] md:left-[3rem]'

  return (
        <div className='h-fit w-fit m-auto pb-12'>
            <div className='flex flex-col items-center justify-around'>

                <div className={imageContainerStyle}>
                    <div className={portraitFrameStyle}>
                      <Image className='nXy44zmWO5dj' src={Frame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
                    </div>
                    <div className={portraitImageStyle}>
                      <Image className='nXy44zmWO5dj' src={Val} alt={'A portrait of the artist.'} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)'/>
                    </div>
                </div>

                <div className='relative h-auto w-80 md:w-[48rem] shadow-plaque border-[#f7f7f7] border-2 rounded-sm flex flex-col justify-around items-center p-5 bg-white plaque-bg'>
                  <div className={`${avenir.className} font-bold italic text-2xl text-center`}>
                    {'A Portrait of the Artist'}
                  </div>
                  <div className={`${avenir.className} font-bold text-lg md:text-xl text-center my-4`}>
                    {'Mixed Media, Passion and Experience'}
                  </div>
                  <div className={`${avenir.className} font-normal text-base md:text-lg`}>
                    {"A graduate of the Savannah College of Art and Design with a BFA in Sequential Art, carving a path with only her pencil and determination. Currently travelling from event to event, showcasing her work and meeting new people. Lover of both traditional and digital media, finding that they often go hand-in-hand. Her inspirations come from the cartoons and fantasy books of her childhood and a lifetime's experience of growing up in the Southern countryside."}
                  </div>
                </div>
                
            </div>
        </div>
  )
}
