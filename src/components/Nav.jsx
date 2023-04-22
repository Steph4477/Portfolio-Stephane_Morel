import twitter from '../assets/RS/twitter.svg';
import facebook from '../assets/RS/facebook.svg';
import tiktok from '../assets/RS/tiktok.svg';
import linkedin from '../assets/RS/linkedin.svg';
import instagram from '../assets/RS/instagram.svg'
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';

export default function Nav(){
    return (
        <header className="header">
            <section className="header_nav">
                <div className="header_nav_rs">
                    <div className="header_nav_rs_icone">
                        
                        <button className="header_nav_rs_icone-t">
                            <img src={twitter} className="fab fa-twitter" alt='icone twiter' />
                        </button>
                        
                        <button className="header_nav_rs_icone-f">
                        <img src={facebook} className="fab fa-facebook" alt='icone facebook'/>
                        </button>
                        
                        <button className= "header_nav_rs_icone-i">
                        <img src={instagram} className="fab fa-instagram"alt='icone instagram'/>
                        </button>
                        
                        <button className= "header_nav_rs_icone-l">
                            <img src={linkedin} className="fab fa-linkedin" alt='icone linkedin'/>
                        </button>
                        
                        <button className=" header_nav_rs_icone-ti">
                            <img src={tiktok} className="fab fa-tiktok"alt="icone tiktok"/>
                        </button>

                    </div>
                    
                        <p className="header_nav_rs_texte">Rejoignez-moi</p>
                   
                </div>
                <div className="header_nav_titre"></div>
                <div className="header_nav_contact">
                    <div className="header_nav_contact_tel">
                        <img src={phone} className="fas fa-phone header_nav_contact_tel_icone" alt="icone téléphone"/>
                        <a href="tel:0620519091" className="header_nav_contact_tel_N">Appelez-moi</a>
                    </div>
                    <div className="header_nav_contact_mail">
                        <img src={mail} className="fas fa-envelope header_nav_contact_mail_icone" alt="icone mail"/>
                        <a href="mailto:morelstephane4026@neuf.fr" className="header_nav_contact_mail_lien" title="boîte mail">Contact</a>
                    </div>
                </div>
            </section>
        </header>
    )
}