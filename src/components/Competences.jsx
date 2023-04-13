import React from "react";
import photoshopIcon from "../assets/photoshop.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodb.svg";
import nodejsIcon from "../assets/nodejs.svg";
import javascriptIcon from "../assets/javascript.svg"

export default function Competences() {
  const competences = [
    {
      titre: "Frontend",
      icones: ["JavaScript", "React", "HTML5", "CSS3", "SASS"],
    },
    {
      titre: "Backend",
      icones: ["Node.js", "Express"],
    },
    {
      titre: "Bases de données",
      icones: ["MongoDB"],
    },
    {
      titre: "Autres outils",
      icones: ["Photoshop CS6", "Figma", "Git"],
    },
  ];

  return (
    <div className="competences_container">
      {competences.map((competence, index) => (
        <article className="competences_container_article" key={index}>
          <h2 className="competences_container_article_titre">
            {competence.titre}
          </h2>
          <div className="competences_container_article_icons">
            {competence.icones.map((icone, index) => (
              <div className="competences_container_article_icon" key={index}>
                {icone === "Photoshop CS6" ? (
                  <img
                    src={photoshopIcon}
                    alt="Photoshop CS6 icone"
                    className="competences_container_article_icon_image"
                  />
                ) : icone === "Express" ? (
                  <img
                    src={expressIcon}
                    alt="Express icone"
                    className="competences_container_article_icon_image"
                  />
                ) : icone === "Node.js" ? (
                  <img
                    src={nodejsIcon}
                    alt="Node.js icone"
                    className="competences_container_article_icon_image"
                  />
                ) : icone === "MongoDB" ? (
                  <img
                    src={mongodbIcon}
                    alt="MongoDB icone"
                    className="competences_container_article_icon_image"
                  />
                ) : icone === "JavaScript" ? (
                  <img
                    src={javascriptIcon}
                    alt="JavaScript icone"
                    className="competences_container_article_icon_image"
                  />
                ) : (
                  <i className={`fab fa-${icone.toLowerCase()}`}></i>
                )}
                <p>{icone}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
