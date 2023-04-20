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

type card = {
    image:StaticImageData,
    title:string,
    description:string,
}

export function Card ({image, title, description}:card) {
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
}

export function Language () {
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
} 

export function Projects ({image, text, canva, setWhatProject, id,  setDisplayScreen}:{ setDisplayScreen:any,id:number,canva:any, image:any, text:string, setWhatProject:any}) {

    const majProject = (e:any) => {
        setWhatProject(carouselData[id])
        setDisplayScreen(true)
        const wrapper = document.querySelector("#wrapper") as HTMLElement
        const docContainer = document.querySelector("#project") as HTMLElement
        const body:any = document.querySelector("body")
        wrapper.setAttribute("style", "overflow:initial")
        window.scrollTo(0, document.body.scrollHeight);
        body.setAttribute("style", "overflow:hidden")
    }
    
    return(
        <div className={styles.containerProject}>
            <div className={styles.project} onClick={(e) => {majProject(e)}} id='project'
                style={{backgroundImage: `linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0)), url('${image.src}')`}}        
            >
                <div>
                    <div className={styles.techUsed}>
                        {canva}
                    </div>
                    <span>{text}</span>
                </div>
            </div>
        </div>
        
    )
}

export function FirstCanva () {
    return (
        <>
            <Image src={React} alt='' />
            <Image src={TS} alt='' />
            <Image src={CSS} alt='' />
            <Image src={Next} alt='' />
        </>
    )
}

export function SecondCanva () {
    return (
        <>
            <Image src={JS} alt='' />
            <Image src={TS} alt='' />
            <Image src={CSS} alt='' />
            <Image src={HTML} alt='' />
        </>
    )
}