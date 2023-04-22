import twitter from '../assets/RS/twitter.svg';
import facebook from '../assets/RS/facebook.svg';
import tiktok from '../assets/RS/tiktok.svg';
import linkedin from '../assets/RS/linkedin.svg';
import instagram from '../assets/RS/instagram.svg';

export default function Footer() {

  const icons = [
    { name: 'twitter', image: twitter },
    { name: 'facebook', image: facebook },
    { name: 'instagram', image: instagram },
    { name: 'linkedIn', image: linkedin },
    { name: 'tikTok', image: tiktok }
  ];

  return (
    <div className="footer">
      <div className="footer_rs">
        {icons.map((icon, index) => (
          <button key={index} className={"footer_rs_icone-" + icon.name}>
            <img src={icon.image} className={icon.name} alt={'icone' + icon.name} />
          </button>
        ))}
      </div>
      <p className="footer_rs_texte">Rejoignez-moi</p>
    </div>
  );
}
 