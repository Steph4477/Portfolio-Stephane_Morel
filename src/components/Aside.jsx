import photo from "../assets/photo_mini.png";
import Footer from "../components/Footer";

const sidebarTitles = [
  { title: "Accueil", id: "homeDesk" },
  { title: "Portfolio", id: "portfolio" },
  { title: "A Propos", id: "about" },
  { title: "Contact", id: "contact" },
];

export default function Aside() {
  const handleMenuClick = (e, id) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);

    // Return size and position of an element relative to the browser display area add to 
    /// position position relative to the top of the visible window.
    const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;

    // Go with a smooth scroll to the id.
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  };

  return (
    <div className="aside">
      <div className="aside_profil">
        <img className="aside_profil_photo" src={photo} alt="Stéphane" />
        <h2 className="aside_profil_title">Stéphane Morel</h2>
      </div>
      <div className="aside_menu">
      {sidebarTitles.map((sidebarTitle, index) => (
  <ul key={sidebarTitle.id}>
    <li>
      <a
        href={`#${sidebarTitle.id}`}
        onClick={(e) => handleMenuClick(e, sidebarTitle.id)}

        //index=0 by default==home
        autoFocus={index === 0}
      >
        {sidebarTitle.title}
      </a>
    </li>
  </ul>
))}

      </div>
      <div className="aside_RS">
        <div className="aside_RS_footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
