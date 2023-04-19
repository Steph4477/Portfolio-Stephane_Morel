import React, { useState } from 'react';


import Profil from '../components/Profil';
import Competences from '../components/Competences';
import CarteProjet from '../components/CarteProjet';
import VideoPlayer from '../components/VideoPlayer';
import monkeyVideo from '../assets/monkey.mp4';

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
   
    contenu: <VideoPlayer src={monkeyVideo}/>
  },
];

export default function Home() {
  const [ongletActif, setOngletActif] = useState(0);

  const changerOnglet = (index) => {
    setOngletActif(index);
  };

  return (
    <div className="home">
      <section className="home_onglet">
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
