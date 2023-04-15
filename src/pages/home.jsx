import React, { useState } from 'react';


import Profil from '../../src/components/Profil';
import Competences from '../../src/components/Competences';
import CarteProjet from '../../src/components/CarteProjet';
import VideoPlayer from '../../src/components/VideoPlayer';


const onglets = [
  {
    titre: 'Profil',
    icone: "",
    contenu: <Profil />
  },
  {
    titre: 'Compétences',
    icone: "",
    contenu: <Competences />
  },
  {
    titre: 'Projets',
    icone: "",
    contenu: <CarteProjet />
  },
  {
    titre: 'Loisirs',
    icone: "",
    contenu: <VideoPlayer />
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
            {/*<FontAwesomeIcon icon={onglet.icone} className="onglet_service_titre_icone" />*/}
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
