import React, { useState, useEffect } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="loader">
      <div className="loader_col1"></div>
      <div className="loader_col2"></div>
    </div>
  ) : null;
};

export default Loader;
