import React from 'react'
import {coquette, espacio, avenir} from '@/app/fonts'
import Image from 'next/image'
import Frame from '/public/images/frame.png'
import Val from '/public/icons/theartist.png'

export const metadata = {
    title: 'About | Valen LaRae'
  }

export default function About() {

  const imageContainerStyle = 'w-fit h-auto relative my-6'
  const portraitFrameStyle = 'w-[24rem] h-[32rem] relative z-10 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)]'
  const portraitImageStyle = 'w-[18rem] h-[27rem] absolute top-[2.5rem] left-[3rem]'

  return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-fit h-fit flex flex-col items-center justify-around'>

                {/* <div className='theartist rounded-full overflow-hidden'>
                    <Image src={'/icons/theartist.png'} height={250} width={250} alt={"An image depicting the artist."} className='denied'/>
                </div> */}

                <div className={imageContainerStyle}>
                    <div className={portraitFrameStyle}>
                      <Image src={Frame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
                    </div>
                    <div className={portraitImageStyle}>
                      <Image src={Val} alt={'A portrait of the artist.'} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)'/>
                    </div>
                </div>

                {/* <div className='text-[3.5rem] text-[#181818]'>
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
                </div> */}

                <div className='relative h-auto w-[48rem] shadow-plaque border-[#f7f7f7] border-2 rounded-sm flex flex-col justify-around items-center p-5 bg-white plaque-bg'>
                  <div className={`${avenir.className} font-bold italic text-2xl`}>
                    {'A Portrait of the Artist'}
                  </div>
                  <div className={`${avenir.className} font-bold text-xl`}>
                    {'Mixed Media - Passion and Experience'}
                  </div>
                  <div className={`${avenir.className} font-normal text-lg`}>
                    {"A graduate of the Savannah College of Art and Design with a BFA in Sequential Art, carving a path with only her pencil and determination. Currently travelling from event to event, showcasing her work and meeting new people. Lover of both traditional and digital media, finding that they often go hand-in-hand. Her inspirations come from the cartoons and fantasy books of her childhood and a lifetime's experience of growing up in the Southern countryside."}
                  </div>
                </div>
                
            </div>
        </div>
  )
}
