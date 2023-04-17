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
import ts from 'typescript'

type card = {
    image:StaticImageData,
    title:string,
    description:string,
}

type language = {
    image:StaticImageData,
    title:string,
}


export function Card ({image, title, description}:card) {

    return (
        <div    className={styles.container}>
            <div className={styles.top}>
                <div    className={styles.pictureFrame}>
                    <Image
                        src={image}
                        alt=''
                    />
                </div>
                <h1>{title}</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, assumenda?</p>
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
