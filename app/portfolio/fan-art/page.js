import React from 'react'
import Heroes from '/public/images/fan/HomebrewHeroesLogo.jpg'
import Hopes from '/public/images/fan/HopesandDreams.jpg'
import Jojo from '/public/images/fan/Jojo_Stone_Ocean.jpg'
import Garden from '/public/images/fan/OvertheGardenWall.jpg'
import Jelly from '/public/images/fan/PrincessJellyfish.jpg'
import Gallery from '@/components/Gallery/Gallery';

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

    <Gallery galleryContents={galleryContents} plaques={plaques}/>

  )
}