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

  function isMoving(e: any) {
    if (!isFlashLight) return
    const lux = document.querySelector(".Home_lux__le22f") as HTMLElement
    lux.style.top = `calc(${e.pageY}px - 5.5vw)`;
    lux.style.left = `calc(${e.pageX}px - 5.5vw)`;
    lux.style.backgroundColor = 'rgba(255,255,255,1)';
    lux.style.boxShadow = '0 0 30px 34px white'
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
        <div className={styles.sail} onMouseMove={e => isMoving(e)} style={isFlashLight ? undefined : divStyle.reverseBG}>
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
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}
