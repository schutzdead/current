import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Light from '../../public/assets/FlashLight/light1.svg'
import newArrow from '../../public/assets/FlashLight/curved-arrow.png'
import { useState } from 'react'
import FirstPage from '@/components/FirstPage/FirstPage'

export default function Home() {

  const [isFlashLight, setIsFlashLight] = useState<boolean>(true)

  const divStyle = {
    noOpacity: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      boxShadow: 'none'
    },
    reverseBG: {
      backgroundColor: 'white',
    }
  }

  function dataForMoving (posX:any, posY:any) {
    if (!isFlashLight) return
    const lux = document.querySelector(".Home_lux__le22f") as HTMLElement
    lux.style.top = `calc(${posY}px - 5.5vw)`;
    lux.style.left = `calc(${posX}px - 5.5vw)`;
    lux.style.backgroundColor = 'rgba(255,255,255,1)';
    lux.style.boxShadow = '0 0 30px 34px white'
  }

  function isMoving(e: any) {
    dataForMoving(e.pageX, e.pageY)
  }

  function isFingerMoving(e: any) {
    if (e.changedTouches == undefined) return
    dataForMoving(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
  }

  function turnOn() {
    setIsFlashLight(false)
  }

  if (!isFlashLight) {
    return (
      <>
        <IsHead />
        <FirstPage />
      </>)
  } else {
    return (
      <>
        <IsHead />
        <div className={styles.sail} onTouchMove={e => isFingerMoving(e)} onMouseMove={e => isMoving(e)} style={isFlashLight ? undefined : divStyle.reverseBG}>
          <div className={styles.lux} style={isFlashLight ? undefined : divStyle.noOpacity}>
            <div className={styles.myElement}>
              <h1>DEVELOPPEUR WEB</h1>
              <footer className={styles.turnLight}>
                <div className={styles.turnSpan}>
                  <span>Allumez la lumière !</span>
                  <Image
                    src={newArrow}
                    alt=''
                    className={styles.arrow}
                  />
                </div>
                <button className={styles.switch} onClick={turnOn}>
                  <Image
                    src={Light}
                    alt=''
                    className={styles.light}
                  />
                </button>
              </footer>
            </div>
          </div>
        </div>
      </>
    )
  }
}

function IsHead() {
  return (
    <Head>
      <title>Lucas Soubry | Développeur web freelance</title>
      <meta name="description" content="my portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
      <link rel="manifest" href="favicon/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>
  )
}
