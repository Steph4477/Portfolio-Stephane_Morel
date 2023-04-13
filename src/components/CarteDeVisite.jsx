




import photo from '../assets/photo_mini.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import rotateIcon from '../assets/rotateIcon.svg'


export default function CarteDeVisite() {

    return (
        <>

            <main className="CarteDeVisite">
                <div className="CarteDeVisite_container">
                    <div className="CarteDeVisite_container_carte">
                        <section className="CarteDeVisite_container_carte_recto">
                            <div className="CarteDeVisite_container_carte_recto_fond"></div>
                            <div className="CarteDeVisite_container_carte_recto_contenu">
                                <article className="CarteDeVisite_container_carte_recto_contenu_article">
                                    
                                    

                                    <div className="CarteDeVisite_container_carte_recto_contenu_article_image">
                                        <img src={photo} alt="Stéphane Morel" />
                                    </div>

                                    <div className="CarteDeVisite_container_carte_recto_contenu_article_texte">
                                        <h1 className="CarteDeVisite_container_carte_recto_contenu_article_texte_titre">Stéphane Morel</h1>
                                        <h2 className="CarteDeVisite_container_carte_recto_contenu_article_texte_nom">Développeur, intégrateur
                                            web</h2>
                                    </div>

                                </article>

                                <div className="CarteDeVisite_container_carte_recto_contenu_article_rotate">
                                    <div className="CarteDeVisite_container_carte_recto_contenu_article_rotate_image">
                                        <img src={rotateIcon} alt="icone retorner"  />
                                    </div>
                                    <div className="CarteDeVisite_container_carte_recto_contenu_article_rotate_txt">Retourner </div>
                                </div>

                            </div>
                        </section>

                        <section className="CarteDeVisite_container_carte_verso">
                            <div className="CarteDeVisite_container_carte_verso_fond"></div>
                            <div className="CarteDeVisite_container_carte_verso_contenu">
                                <article className="CarteDeVisite_container_carte_verso_contenu_article">
                                    <p>Actuellement en reconversion professionnelle avec openclassrooms
                                    et pôle emploi
                                    (jusqu'à fin Avril 2023).

                                    Je conçois ce projet afin de faciliter ma future recherche d'alternance
                                    (page d'accueil de mon portfolio).

                                    Vous pouvez voir le code de mes projets réalisés en cliquant sur le button.</p>

                                    <div className="CarteDeVisite_container_carte_verso_contenu_article_button">
                                        <button className="CarteDeVisite_container_carte_verso_contenu_article_button_icone">
                                            <FontAwesomeIcon icon={faGithub} />
                                            <a className="CarteDeVisite_container_carte_verso_contenu_article_button_icone_texte" href="https://github.com/Steph4477"> GitHub</a>
                                        </button>
                                    </div>
                                </article >
                            </div >
                        </section >
                    </div >

                </div >
            </main >

        </>
    )
}