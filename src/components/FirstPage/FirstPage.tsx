import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import styles from './FirstPage.module.css'
import style from './SecondContainer.module.css'
import styl from './ThirdContainer.module.css'
import SEO from '../../../public/assets/SEO.svg'
import Computer from '../../../public/assets/computer.svg'
import Butchery from '../../../public/assets/boucherie.png'
import Visibility from '../../../public/assets/visibility.svg'
import Experience from '../../../public/assets/experience.svg'
import Profil from '../../../public/assets/profil.png'
import { Card, Language } from '../Gadgets/gadget'

export default function FirstPage () {

    const [delayBG, setDelayBG] = useState(true)
    
    setTimeout(() => {
        setDelayBG(false)
    }, 2000)

    let [time, setTime] = useState(-1)
    let [pos, setPos] = useState(0)
    
    const snapScroll = (e:any) => {
        let throttle = 800;
        let now = Date.now()
        if(time !== -1 && now-time < throttle) return;
        setTime(now) 

        if(e.deltaY>0) {
            if(pos<=innerHeight) setPos(pos+=innerHeight)
        } else {
            if(pos>0) setPos(pos-=innerHeight)
        }
        window.scrollTo({
            top:pos,
            left:0,
            behavior:'smooth'
        })
        // console.log(pos);
        // console.log(window.scrollY)
    }
    return (
        <>
        <nav className={styles.navAbsolute}                        
             style={delayBG
                    ? { color:"transparent" }
                    : { color:"white" }}>
            <p>LUCAS<span>SOUBRY</span></p>
        </nav>
            <div className={styles.wrapper}
                    onWheel={(e) => {snapScroll(e)}}>
                <div   className={styles.container}
                        style={delayBG
                            ? { color:"transparent" }
                            : { color:"white" }}>
                    <main>
                        <div>
                            <p  className={styles.spec}
                                style={delayBG
                                    ? { border:'none' }
                                    : { borderRight: "2px solid white" }}>
                                CREATIONS SUR-MESURE</p>
                        </div>
                        <h1><span className={styles.developper}>DEVELOPPEUR</span> WEB</h1>
                        <p  className={styles.underText}>UX DESIGN, RESPONSIVE, IDENTITE VISUELLE</p>
                    </main>
                    <div className={styles.filter}></div>
                </div>
                <div className={style.secondContainer}>
                    <section>
                        <div className={style.profil}>
                            <Image
                            src={Profil}
                            alt='' />
                            <div>
                                <div>
                                    <span className={style.scrollLogo}>
                                        <Language />&nbsp;
                                    </span>
                                    <span className={style.scrollLogo}>
                                        <Language />&nbsp;
                                    </span>
                                </div>
                                <h2>Spécialiste Front-End</h2>
                                <p>Je suis développeur et webdesigner freelance, je travaille entre autres avec le framework <u>React</u> qui me permet de créer facilement des interfaces sur-mesure optimisées. 
                                    Sur chaque mission, j{"'"}essaye de comprendre <u>l{"'"}histoire du projet</u> afin d{"'"}adapter mon travail.<br/>
                                    Si vous n{"'"}avez pas de maquettes, je peux concevoir l{"'"}architecture et le design de votre site.
                                    Je travaille aussi sur des projets en cours, seul ou en équipe.
                                </p>
                            </div>
                        </div>
                        <div className={style.logo}>
                        </div>
                    </section>
                    <section>
                        <Card image={Computer} title={'Développement'} description={'Développement sur mesure. Création ou refonte de site. Systèmes de gestion de contenu (CMS) Drupal et WordPress. Technologies open-source.'} />
                        <Card image={Experience} title={'Gestion de projet'} description={'Développement sur mesure. Création ou refonte de site. Systèmes de gestion de contenu (CMS) Drupal et WordPress. Technologies open-source.'} />
                        <Card image={Visibility} title={'Expérience utilisateur'} description={'Développement sur mesure. Création ou refonte de site. Systèmes de gestion de contenu (CMS) Drupal et WordPress. Technologies open-source.'} />
                        <Card image={SEO} title={'Visibilité'} description={'Développement sur mesure Créa tion ou refonte de site. Systèmes de gestion de contenu (CMS) Drupal et WordPress. Technologies open-source.'} />
                    </section>
                </div>
                <div className={styl.thirdContainer}>
                     <h1>PR<u>OJE</u>TS</h1>
                     <div className={styl.allProjects}>
                        <Image
                            src={Butchery}
                            alt='' />
                     </div>
                </div>
            </div>
        </>
    )
}




