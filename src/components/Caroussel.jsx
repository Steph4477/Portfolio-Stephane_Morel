import { useState } from 'react';
import booki from '../assets/captureBooki.png';
import ohmyfood from '../assets/ohmyfood.png';
import ohmyfoodV from '../assets/ohmyfoodV.png';
import lapanthere from '../assets/lapanthere.png';
import lapanthereV from '../assets/lapanthereV.png';
import internet from '../assets/internet.png';
import bookiV from '../assets/BookiV.png';
import Boutons from './Boutons';

const datas = [
  {
    id: 0,
    lien: "https://steph4477.github.io/booki/",
    titre: "Intégration d'un design de site web adaptable (responsive)",
    imageRecto: booki,
    imageVerso: bookiV,
  },
  {
    id: 1,
    lien: "https://steph4477.github.io/ohmyfood/",
    titre: "Conception d'un site web animé avec des styles CSS",
    imageRecto: ohmyfood,
    imageVerso: ohmyfoodV,
  },
  {
    id: 2,
    lien: "https://steph4477.github.io/la-panthere/",
    titre: "Amélioration du référencement, de l'accessibilité et de la performance d'un site web existant",
    imageRecto: lapanthere,
    imageVerso: lapanthereV,
  },
  {
    id: 3,
    lien: "lien4",
    titre: "Titre du project 4",
    imageRecto: "image4",
    imageVerso: "image4",
  }
];

export default function CarteDeproject() {
  const [currentProjectId, setCurrentProjectId] = useState(0);

  const handleNextButtonClick = () => {
    if (currentProjectId < datas.length - 1) {
      setCurrentProjectId(currentProjectId + 1);
    }
  };

  const handlePrevButtonClick = () => {
    if (currentProjectId > 0) {
      setCurrentProjectId(currentProjectId - 1);
    }
  };

  const project = datas.find((project) => project.id === currentProjectId);

  return (
    <div className="CarteDeproject_container">
      <div className="CarteDeproject_container_title">
       
      </div>
      <div className="CarteDeproject_container_bouton">
        
        <Boutons
          onPrevButtonClick={handlePrevButtonClick}
         
          onNextButtonClick={handleNextButtonClick}/>
          </div>
        
      
      <div key={project.id} className="CarteDeproject_container_carte">
        <section className="CarteDeproject_container_carte_recto">
          <div className="CarteDeproject_container_carte_recto_fond">
            <img
              className="CarteDeproject_container_carte_recto_fond_image"
              src={project.imageRecto}
              alt=""
            />
          </div>
        </section>
        <section className="CarteDeproject_container_carte_verso">
          <div className="CarteDeproject_container_carte_verso_fond">
            <img
              className="CarteDeproject_container_carte_verso_fond_image"
              src={project.imageVerso}
              alt=""
            />
          </div>
          <div className="CarteDeproject_container_carte_verso_contenu">
            <div className="CarteDeproject_container_carte_verso_contenu_titre">
              <div className="CarteDeproject_container_carte_verso_contenu_titre_h">
                {project.titre}
              </div>
            </div>
            <article className="CarteDeproject_container_carte_verso_contenu_article">
              <div className="CarteDeproject_container_carte_verso_contenu_article_button">
                <button className="CarteDeproject_container_carte_verso_contenu_article_button_icone">
                  <img src={internet} alt="" />
                  <a
                    className="CarteDeproject_container_carte_verso_contenu_article_button_icone_texte"
                    alt={project.titre}
                    href={project.lien}
                  >
                    Site internet
                  </a>
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

