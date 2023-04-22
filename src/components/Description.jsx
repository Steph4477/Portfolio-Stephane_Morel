import { useState, useEffect, useCallback, useMemo } from "react";

export default function Description() {
  const words = useMemo(() => ["JavaScript", "NodeJS", "json", "git", "React", "MongoDB", "Mongoose", "Postman", "figma", "npm", "css3", "Html5", "VS Code" ], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const cycleWords = useCallback(() => {
    setCurrentWordIndex((currentWordIndex + 1) % words.length);
  }, [currentWordIndex, words]);

  useEffect(() => {
    const intervalId = setInterval(cycleWords, 1000);
    return () => clearInterval(intervalId);
  }, [cycleWords]);

  return (
    <div className="profil_container_description_p">
      <p>
        Merci de prendre le temps de consulter mon portfolio.<br />
        <br />Je suis un développeur web passionné par les nouvelles technologies et la programmation,
        spécialisé dans le développement front-end avec des compétences en back-end et bases de données.
        Mon objectif est de créer des sites web modernes, fonctionnels et accessibles en utilisant
        principalement les technologies<br /> 
        <strong className="word visible">{words[currentWordIndex]}</strong>
      </p>
    </div>
  );
  
}



