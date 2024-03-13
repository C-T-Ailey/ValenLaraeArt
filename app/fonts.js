import localFont from 'next/font/local'

export const coquette = localFont({
    src: [
        {
            path: '../public/fonts/Coquette-00-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/Coquette-00-Reg.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Coquette-00-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ]
  });
  
export const espacio = localFont({ src: '../public/fonts/Espacio.woff2'});

export const avenir = localFont({
    src: [
        {
            path: '../public/fonts/avenir-light-webfont.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/avenir-medium-webfont.woff2',
            weight: '400',
            style: 'normal',
        },
    ]  
})