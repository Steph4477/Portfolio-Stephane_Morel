import booki from '../assets/captureBooki.png';
import ohmyfood from '../assets/ohmyfood.png';
import ohmyfoodV from '../assets/ohmyfoodV.png';
import lapanthere from '../assets/lapanthere.png';
import lapanthereV from '../assets/lapanthereV.png';
import internet from '../assets/internet.png';
import bookiV from '../assets/BookiV.png';

const liens = [
  "https://steph4477.github.io/booki/",
  "https://steph4477.github.io/ohmyfood/",
  "https://steph4477.github.io/la-panthere/",
  "lien4"
];

const titres = [
  "Intégration d'un design de site web adaptable (responsive)",
  "Conception d'un site web animé avec des styles CSS",
  "Amélioration du référencement, de l'accessibilité et de la performance d'un site web existant"
];
const imagesRecto = [booki, ohmyfood, lapanthere, "image4"];
const imagesVerso = [bookiV, ohmyfoodV, lapanthereV, "image4"];

export default function CarteDeProjet() {

  const cartes = [];

  for (let i = 0; i < titres.length; i++) {
    cartes.push(
      <div key={i} className="CarteDeProjet_container_carte">
        <section className="CarteDeProjet_container_carte_recto">
          <div className="CarteDeProjet_container_carte_recto_fond">
            <img className='CarteDeProjet_container_carte_recto_fond_image' src={imagesRecto[i]} alt="" />
          </div>
        </section>
        <section className="CarteDeProjet_container_carte_verso">
          <div className="CarteDeProjet_container_carte_verso_fond">
            <img className='CarteDeProjet_container_carte_verso_fond_image' src={imagesVerso[i]} alt="" />
          </div>
          <div className="CarteDeProjet_container_carte_verso_contenu">
            <div className="CarteDeProjet_container_carte_verso_contenu_titre">
              <div className="CarteDeProjet_container_carte_verso_contenu_titre_h">{titres[i]}</div>
            </div>
            <article className="CarteDeProjet_container_carte_verso_contenu_article">
              <div className='CarteDeProjet_container_carte_verso_contenu_article_space'></div>
              <div className="CarteDeProjet_container_carte_verso_contenu_article_button">
                <button className="CarteDeProjet_container_carte_verso_contenu_article_button_icone">
                  <img src={internet} alt=""/>
                  <a className="CarteDeProjet_container_carte_verso_contenu_article_button_icone_texte" alt={titres[i]}
                    href={liens[i]}>Site internet
                  </a>
                </button>
              </div>
            </article >
          </div >
        </section >
      </div >
    );
  }

  console.log(cartes); // Affiche les cartes dans la console

  return (
    <main className="CardProjet">
      <div className="CardProjet_container">
        {cartes}
      </div>
    </main>
  )
}
