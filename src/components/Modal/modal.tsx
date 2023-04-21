import styles from './modal.module.css'
import Image from 'next/image'
import Left from '../../../public/assets/leftArrow.svg'
import Close from '../../../public/assets/blackClose.svg'
import Right from '../../../public/assets/rightArrow.svg'
import { memo, useEffect, useState } from 'react'
import * as BSL from 'body-scroll-lock';

export function BSLEnable () {
    const body = document.querySelector('body') as HTMLElement;
    body.setAttribute("style", "overflow:initial")
    BSL.enableBodyScroll(body)
}

export const Modal = memo(function modal ({data,setDisplayScreen}:{setDisplayScreen:any, data:any}) {

    let [carousel, setCarousel] = useState(0)
    const [arrowDisplay, setArrowDisplay] = useState(true)

    useEffect(() => {
        if(data.picture.length === 1) setArrowDisplay(false)
        return () => setArrowDisplay(true)
    }, [data.picture.length])

    const runCarousel = (direction:number) => {
        if(carousel+direction === -1) return setCarousel(data.picture.length-1)
        if(carousel+direction === data.picture.length) return setCarousel(0)
        setCarousel(carousel+=direction)
    }

    const reset = () => {
        setDisplayScreen(false)
        setCarousel(0)
        const wrapper = document.querySelector("#wrapper") as HTMLElement
        const body:any = document.querySelector("body")
        wrapper.setAttribute("style", "overflow-y:scroll;overflow-x:hidden")
        body.setAttribute("style", "overflow:initial")
    }

    return(
        <section className={styles.projectFullScreen} >
            <div className={styles.modal}>
                <Image
                    src={Close}
                    alt=''
                    onClick={reset}
                />
                <h1>{data.title}</h1>
                <p>{data.description[carousel]}</p>
                <div className={styles.carouselScreen}
                     style={{backgroundImage:`url("${data.picture[carousel].src}")`}}>
                    <div className={styles.leftScroll} style={arrowDisplay ? {display:"unset"} : {display:"none"}}>
                        <Image
                            src={Left}
                            alt=''
                            onClick={() => runCarousel(-1)}
                        />
                    </div>
                    <div className={styles.rightScroll} style={arrowDisplay ? {display:"unset"} : {display:"none"}}>
                        <Image
                            src={Right}
                            alt=''
                            onClick={() => runCarousel(1)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
})