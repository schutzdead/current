import { memo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Cross from '../../../public/assets/close.svg'
import styles from '../FirstPage/FirstPage.module.css'

export const NavBar = memo(function navBar () {

    const [delayHeader, setDelayHeader] = useState(true)
    
    const [contact, setContact] = useState(false)

    setTimeout(() => {
        setDelayHeader(false)
    }, 1500)

    return(
    <nav className={styles.navAbsolute}                        
             style={delayHeader
                    ? { color:"transparent" }
                    : { color:"white" }}>
        <p><Link href="#accueil">LUCAS<span>SOUBRY</span></Link></p>
        <ul>
            <Link href="#services"><li>Services</li></Link>
            <Link href="#portfolio"><li>Portfolio</li></Link>
            <li onClick={() => setContact(true)}>Contact</li>
        </ul>
        <div className={styles.contact}
        style={contact ? {display:"flex"} : {display:"none"}}>
                <Image
                    src={Cross}
                    alt=''
                    onClick={() => setContact(false)} />
                <span>+33 6 27 83 10 46</span>
                <span>lucas.soubry@hotmail.fr</span>
        </div>
    </nav>
    )
})