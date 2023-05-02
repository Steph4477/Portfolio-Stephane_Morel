import photo from "../assets/photo_mini.png";
import Footer from "../components/Footer";

const sidebarTitles = [
  { title: "Home", id: "home" },
  { title: "Portfolio", id: "portfolio" },
  { title: "About", id: "about" },
  { title: "Contact", id: "contact" },
];

export default function Aside() {
  const handleMenuClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  };

  return (
    <div className="aside">
      <div className="aside_profil">
        <img className="aside_profil_photo" src={photo} alt="Stéphane" />
        <h2 className="aside_profil_title">Stéphane Morel</h2>
      </div>
      <div className="aside_menu">
        {sidebarTitles.map((sidebarTitle) => (
          <ul key={sidebarTitle.id}>
            <li>
              <a href={`#${sidebarTitle.id}`} onClick={(e) => handleMenuClick(e, sidebarTitle.id)}>
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
