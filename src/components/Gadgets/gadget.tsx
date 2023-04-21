import Image, { StaticImageData } from 'next/image'
import styles from './gadget.module.css'
import React from '../../../public/assets/LogoLanguage/react.svg'
import CSS from '../../../public/assets/LogoLanguage/css.svg'
import HTML from '../../../public/assets/LogoLanguage/html.svg'
import JS from '../../../public/assets/LogoLanguage/js.svg'
import Node from '../../../public/assets/LogoLanguage/node.svg'
import TS from '../../../public/assets/LogoLanguage/ts.svg'
import Prisma from '../../../public/assets/LogoLanguage/prisma.svg'
import Next from '../../../public/assets/LogoLanguage/next.svg'
import { carouselData } from '../Modal/data'
import { memo, useEffect, useRef, useState } from 'react'
import * as BSL from 'body-scroll-lock';

type card = {
    image:StaticImageData,
    title:string,
    description:string,
}

export function BSLDisable () {
    const body = document.querySelector('body') as HTMLElement;
    body.setAttribute("style", "overflow:hidden")
    BSL.disableBodyScroll(body)
}

export const Card = memo(function card ({image, title, description}:card) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div    className={styles.pictureFrame}>
                    <Image
                        src={image}
                        alt=''
                    />
                </div>
                <h1>{title}</h1>
            </div>
            <p>{description}</p>
        </div>
    )
})

export const Language = memo(function language () {
    return (
        <span className={styles.containerLogo}>
            <Image src={Next} alt='' />
            <Image src={React} alt='' />
            <Image src={TS} alt='' />
            <Image src={JS} alt='' />
            <Image src={HTML} alt='' />
            <Image src={CSS} alt='' />
            <Image src={Prisma} alt='' />
            <Image src={Node} alt='' />
        </span>
    )
})

export const Projects = memo(function projects ({image, text, canva, setWhatProject, id,  setDisplayScreen}:{ setDisplayScreen:any,id:number,canva:any, image:any, text:string, setWhatProject:any}) {

    const majProject = () => {
        setWhatProject(carouselData[id])
        setDisplayScreen(true)
        const wrapper = document.querySelector("#wrapper") as HTMLElement
        wrapper.setAttribute("style", "overflow:initial")
        window.scrollTo(0, document.body.scrollHeight);
        BSLDisable()
    }
    
    const [isAppear, setIsAppear] = useState(false);
    const ref:any = useRef(null);

    useEffect(() => {
        if(innerWidth>600){
        }
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(innerWidth>600) return  
                setIsAppear(entry.isIntersecting);
            },
            {threshold:0.99}
          );
          observer.observe(ref.current);
          return () => observer.disconnect();
    }, [isAppear]);

    return(
        <div className={styles.containerProject} onTouchCancel={e => {e.preventDefault}}>
            <div className={styles.project} onClick={majProject} id='project' onMouseEnter={() => setIsAppear(true)} onMouseLeave={() => setIsAppear(false)}
                style={{backgroundImage: `linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0)), url('${image.src}')`}}        
            >
                <div ref={ref} style={isAppear ? {opacity:1} : {opacity:0}}>
                    <div className={styles.techUsed}>
                        {canva}
                    </div>
                    <span>{text}</span>
                </div>
            </div>
        </div>
        
    )
})

export const FirstCanva = memo(function firstCanva () {
    return (
        <>
            <Image src={React} alt='' />
            <Image src={TS} alt='' />
            <Image src={CSS} alt='' />
            <Image src={Next} alt='' />
        </>
    )
})

export const SecondCanva = memo(function secondCanva () {
    return (
        <>
            <Image src={JS} alt='' />
            <Image src={TS} alt='' />
            <Image src={CSS} alt='' />
            <Image src={HTML} alt='' />
        </>
    )
})