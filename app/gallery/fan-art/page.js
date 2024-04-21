import React from 'react'
import Heroes from '/public/images/fan/HomebrewHeroesLogo.jpg'
import Hopes from '/public/images/fan/HopesandDreams.jpg'
import Jojo from '/public/images/fan/Jojo_Stone_Ocean.jpg'
import Garden from '/public/images/fan/OvertheGardenWall.jpg'
import Jelly from '/public/images/fan/PrincessJellyfish.jpg'
import GalleryComp from '@/components/GalleryComponent/GalleryComponent';
import { espacio } from '@/app/fonts'

export const metadata = {
  title: 'Fan Art | Valen LaRae'
}


export default function FanArt() {
  
  const galleryContents = [Heroes, Hopes, Jelly, Jojo, Garden,]
  
  const plaques = [
    {
      title: "Homebrew Heroes Logo",
      medium: "Digital Media, Clip Studio Paint",
      details: ''
    },
    {
      title: "Hopes and Dreams",
      medium: "Digital Media, Clip Studio Paint",
      details: '11"x17"'
    },
    {
      title: "Princess Jellyfish",
      medium: "Digital Media, Clip Studio Paint",
      details: '17"x11"'
    },
    {
      title: "Stone Ocean Trio",
      medium: "Digital Media, Procreate",
      details: '11"x17'
    },
    {
      title: "Into the Unknown",
      medium: "Digital Media, Clip Studio Paint",
      details: '11"x17'
    },
  ]

  return (

    <div className='w-full flex flex-col items-center pb-12'>
        <h1 className={`${espacio.className} text-4xl xl:text-6xl font-bold underline mt-6 tracking-wide`}><span className='tracking-tighter'>F</span>an Art</h1>
        <GalleryComp galleryType={"Fan Art"} galleryContents={galleryContents} plaques={plaques}/>
    </div>

  )
}