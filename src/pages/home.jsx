import React, { useState } from 'react';
import Profil from '../components/Profil';
import Competences from '../components/Competences';
import Caroussel from '../components/Caroussel';
import VideoPlayer from '../components/VideoPlayer';
import monkeyVideo from '../assets/monkey.mp4';

import CacheDescription from '../components/CacheDescription';
import CarteProjet from '../components/CarteProjet';
import CarteDeVisite from '../components/CarteDeVisite';


const onglets = [
  {
    titre: 'Profil',

    contenu: <Profil />
  },
  {
    titre: 'Compétences',

    contenu: <Competences />
  },
  {
    titre: 'Projets',

    contenu: <CarteProjet />
  },
  {
    titre: 'Loisirs',

    contenu: <VideoPlayer src={monkeyVideo} />
  },
];

export default function Home() {
  const [ongletActif, setOngletActif] = useState(0);

  const changerOnglet = (index) => {
    setOngletActif(index);
  };

  return (
    <div className="home">
      <section className='home_mobile'>
        <div className='home_mobile_cv'>
          <CarteDeVisite />
        </div>
        <div className='home_mobile_presentation'>
          <CacheDescription />
        </div>
        <div className='home_mobile_carousel'>
        
          <Caroussel />
        </div>
      </section>
      
      <section className="home_tablet">
        {onglets.map((onglet, index) => (
          <button
            key={index}
            className={`onglet_service ${index === ongletActif ? 'active' : ''}`}
            onClick={() => changerOnglet(index)}
          >

            <h2 className="onglet_service_titre">{onglet.titre}</h2>
          </button>
        ))}
      </section>
      
      <section className="home_card">
        <div className="collapse_content">
          <div className="collapse_content_contenu">
            {onglets[ongletActif].contenu}
          </div>
        </div>
      </section>
    </div>
  );
}
