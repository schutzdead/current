import Image from 'next/image'
import { memo, useEffect, useRef, useState } from 'react'
import styles from './FirstPage.module.css'
import style from './SecondContainer.module.css'
import styl from './ThirdContainer.module.css'
import SEO from '../../../public/assets/SEO.svg'
import Computer from '../../../public/assets/computer.svg'
import Visibility from '../../../public/assets/visibility.svg'
import Experience from '../../../public/assets/experience.svg'
import Profil from '../../../public/assets/profil.webp'
import Butchery from '../../../public/assets/boucherie/butchery.webp'
import Meteo from '../../../public/assets/meteo/meteo2.webp'
import Sushi from '../../../public/assets/sushi1.webp'
import Form from '../../../public/assets/form/form1.webp'
import Calcul from '../../../public/assets/calcul/calcul1.webp'
import Etch from '../../../public/assets/etch/etch3.webp'
import BGFirstContainer from '../../../public/assets/backgroundMain.webp'
import { Card, Language, Projects, FirstCanva ,SecondCanva } from '../Gadgets/gadget'
import { Modal } from '../Modal/modal'
import { carouselData } from '../Modal/data'
import { NavBar } from '../NavBar/NavBar'

export default function FirstPage () {

    const[whatProject, setWhatProject] = useState(carouselData[1])
    const[displayScreen, setDisplayScreen] = useState(false)

    const [delayCenter, setDelayCenter] = useState(true)

    
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref:any = useRef(null);

    useEffect(() => {
        if(innerWidth<1000){
            setIsIntersecting(true);
        }
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(innerWidth<1000) return            
                setIsIntersecting(entry.isIntersecting);
            },
          );
          observer.observe(ref.current);
          return () => observer.disconnect();
    }, [isIntersecting]);


    setTimeout(() => {
        setDelayCenter(false)
    }, 1000)
   
    const divStyle = {
        on:{ backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.1)), url(${BGFirstContainer.src})`,
             color:"transparent" },
        off:{ backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.1)), url(${BGFirstContainer.src})`,
              color:"white" }
    }



    return (
        <>
            <NavBar />
            <div className={styles.wrapper} id='wrapper'>
                <div    className={styles.container}
                        id='accueil'
                        style={delayCenter
                            ? divStyle.on
                            : divStyle.off }>
                    <main>
                        <div>
                            <p  className={styles.spec}
                                style={delayCenter
                                    ? { border:'none' }
                                    : { borderRight: "2px solid white" }}>
                                CREATIONS SUR-MESURE</p>
                        </div>
                        <h1><span className={styles.developper}>DEVELOPPEUR</span> WEB</h1>
                        <p  className={styles.underText}>UX DESIGN, RESPONSIVE, IDENTITE VISUELLE</p>
                    </main>
                    <div className={styles.filter}></div>
                </div>
                <div className={style.secondContainer} id="services">
                    <section ref={ref} style={isIntersecting 
                             ? {opacity:1, transform:"translateX(0px)"} 
                             : {opacity:0, transform:"translateX(-100px)"}}>
                        <div className={style.profil}>
                            <ProfilImage />
                            <div>
                                <div className={style.headProfil}>
                                    <div>
                                        <span className={style.scrollLogo}>
                                            <Language />&nbsp;
                                        </span>
                                        <span className={style.scrollLogo}>
                                            <Language />&nbsp;
                                        </span>
                                    </div>
                                    <h2>Spécialiste Front-End</h2>
                                </div>
                                <p>Développeur et webdesigner freelance, je travaille entre autres avec le framework <span>React</span> qui me permet de créer des interfaces sur-mesure optimisées. 
                                    Sur chacune de mes missions, je m{"'"}attache à comprendre <span>l{"'"}histoire du projet</span> pour répondre aux <span>attentes</span> de mes clients.<br/>
                                    Si vous n{"'"}avez pas de maquettes, je peux concevoir <span>l{"'"}architecture</span> et le <span>design</span> de votre site.
                                    Je travaille aussi sur des projets en cours, seul ou en équipe.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section style={isIntersecting 
                             ? {opacity:1, transform:"translateY(0px)"} 
                             : {opacity:0, transform:"translateY(100px)"}}>
                        <Card image={Computer} title={'Développement'} description={'Création, refonte ou encore modification de pages. Site e-commerce, landing page, site vitrine etc. 100% responsive.  '} />
                        <Card image={Experience} title={'Gestion du projet'} description={'Analyse et compréhension de vos besoins, adaptation des technologies au projet. Force de proposition et suivi régulier des avancées. '} />
                        <Card image={Visibility} title={'Expérience'} description={`Développement et design sur-mesure pour rendre l${"'"}expérience de vos utilisateurs unique et fluide. Amélioration de la visiblité et de l'image de marque. `} />
                        <Card image={SEO} title={'Visibilité'} description={'Diffusion rapide des rendus et optimisation des composants permettant un meilleur référencement naturel. Site ergonomique. '} />
                    </section>
                </div>
                <div className={styl.thirdContainer} id='portfolio'>
                    <h1>PORTFOLIO</h1>
                    <div className={styl.allProjects}>
                        <Projects setDisplayScreen={setDisplayScreen} id={0} setWhatProject={setWhatProject} image={Meteo} text={"Application Météo"} canva={<FirstCanva />}/>
                        <Projects setDisplayScreen={setDisplayScreen} id={1} setWhatProject={setWhatProject} image={Butchery} text={"Boutique en ligne (Boucherie)"} canva={<FirstCanva />}/>
                        <Projects setDisplayScreen={setDisplayScreen} id={2} setWhatProject={setWhatProject} image={Etch} text={"Application de dessin (Etch-a-Sketch)"} canva={<SecondCanva />}/>
                        <Projects setDisplayScreen={setDisplayScreen} id={3} setWhatProject={setWhatProject} image={Calcul} text={"Calculatrice Apple (Reproduction)"} canva={<SecondCanva />}/>
                        <Projects setDisplayScreen={setDisplayScreen} id={4} setWhatProject={setWhatProject} image={Sushi} text={"Boutique en ligne (Restauration)"} canva={<FirstCanva />}/>
                        <Projects setDisplayScreen={setDisplayScreen} id={5} setWhatProject={setWhatProject} image={Form} text={"Formulaire sur-mesure"} canva={<SecondCanva />}/>
                    </div>
                    <div style={displayScreen ? {display:"unset"} : {display:"none"}}>
                        <Modal data={whatProject} setDisplayScreen={setDisplayScreen}/>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProfilImage = memo(function profilImage () {
    return(
        <Image
        src={Profil}
        alt='' />
    )
})