import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../PageTransition.css';

const PageTransition = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <CSSTransition
      in={loaded}
      timeout={400}
      classNames="page"
      unmountOnExit
    >
      <div className="page">
        {children}
      </div>
    </CSSTransition>
  );
};

export default PageTransition;
