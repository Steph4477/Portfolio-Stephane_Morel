import React, { useState } from 'react';
import Profil from '../components/Profil';
import Competences from '../components/Competences';
import Caroussel from '../components/Caroussel';
import VideoPlayer from '../components/VideoPlayer';
import monkeyVideo from '../assets/monkey.mp4';
import Aside from '../components/Aside';
import CacheDescription from '../components/CacheDescription';
import CarteProjet from '../components/CarteProjet';
import CarteDeVisite from '../components/CarteDeVisite';
import Header from '../components/Header';
import Footer from '../components/Footer';

import MainDesktop from '../components/MainDesktop';

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
        <Header />
        <div className='home_mobile_cv'>
          <CarteDeVisite />
        </div>
        <div className='home_mobile_presentation'>
          <CacheDescription />
        </div>
        <div className='home_mobile_carousel'>

          <Caroussel />
        </div>
        <Footer />
      </section>

      <section className="home_tablet">

        <Header />
        <div className='home_tablet_collapse'>
          {onglets.map((onglet, index) => (
            <button
              key={index}
              className={`onglet_service ${index === ongletActif ? 'active' : ''}`}
              onClick={() => changerOnglet(index)}
            >

              <h2 className="onglet_service_titre">{onglet.titre}</h2>
            </button>
          ))}
        </div>

        <section className="home_card">
          <div className="collapse_content">
            <div className="collapse_content_contenu">
              {onglets[ongletActif].contenu}
            </div>
          </div>
        </section>

        <div className='home_tablet_footer'>
          <Footer />
        </div>

      </section>

      <section className="home_desktop">
        <aside className="home_desktop_aside">


          <Aside />

        </aside>
        <main className="home_desktop_main">
         <MainDesktop />
        
        </main>
      </section>

    </div>
  );
}
