import CarteDeVisite from "./CarteDeVisite"

export default function Profil() {
    return (
        <div className="profil">
            <div className="profil_container">

                <div className="profil_container_carte">
                    <CarteDeVisite />
                </div>
                <div className="profil_container_description">
                    <p className="profil_container_description_p">
                        Merci de prendre le temps de consulter mon portfolio.<br />
                        Je suis un développeur web passionné par les nouvelles technologies et la programmation, 
                        spécialisé dans le développement front-end avec des compétences en back-end et bases de données. 
                        Mon objectif est de créer des sites web modernes, fonctionnels et accessibles en utilisant 
                        principalement les technologies Javascript, React et Node.js.<br /><br />

                    </p>
                </div>


            </div>
        </div>
    )
}