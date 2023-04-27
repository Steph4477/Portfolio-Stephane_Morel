


import { useState } from 'react';


export default function Collapse({titre}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="onglet">
      <button className="onglet_service" onClick={toggleCollapse}>
        <h2 className="onglet_service_titre">{titre}</h2>
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {  }
      </div>
    </div>
  );
}
