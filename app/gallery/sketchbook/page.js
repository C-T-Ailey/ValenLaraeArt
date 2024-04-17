import Image from 'next/image'
import React from 'react'
import Mermaid from '/public/images/sketch/Mermaid-tub.jpg'
import GalleryComp from '@/components/GalleryComponent/GalleryComponent';
import { espacio } from '@/app/fonts';

export const metadata = {
  title: 'Sketchbook | Valen LaRae'
}


export default function Sketchbook() {
  
  const galleryContents = [Mermaid]
  
  const plaques = [
    {
      title: "Mermaid Bath",
      medium: "Digital Media, Clip Studio Paint",
      details: 'Work in Progress, 17"x11"'
    },
  ]

  return (

    <div className={`w-full flex flex-col items-center pb-12`}>
        <h1 className={`${espacio.className} text-4xl xl:text-6xl font-bold underline mt-6 tracking-wide`}>Sketchbook</h1>
        <GalleryComp galleryType={"Sketchbook"} galleryContents={galleryContents} plaques={plaques}/>
    </div>

  )
}