


export default function Nav() {
    return (
        <header className="header">
            <section className="header_nav">
                <div className="header_nav_rs">
                    <div className="header_nav_rs_icone">

                        <button className="header_nav_rs_icone-t">
                            <i className="fab fa-twitter" ></i>
                        </button>

                        <button className="header_nav_rs_icone-f">
                            <i className="fab fa-facebook"></i>
                        </button>

                        <button className="header_nav_rs_icone-i">
                            <i className="fab fa-instagram"></i>
                        </button>

                        <button className="header_nav_rs_icone-l">
                            <i className="fab fa-linkedin"></i>
                        </button>

                        <button className=" header_nav_rs_icone-ti">
                            <i className="fab fa-tiktok"></i>
                        </button>



                    </div>



                </div>

                <div className="header_nav_contact">
                    <div className="header_nav_contact_tel">
                        <i className="fas fa-phone header_nav_contact_tel_icone"></i>
                        <a href="tel:0620519091" className="header_nav_contact_tel_N">Appelez-moi</a>
                    </div>
                    <div className="header_nav_contact_mail">
                        <i className="fas fa-envelope header_nav_contact_mail_icone"></i>
                        <a href="mailto:morelstephane4026@neuf.fr" className="header_nav_contact_mail_lien" title="boîte mail">Contact</a>
                    </div>
                </div>
            </section>
        </header>
    )
}