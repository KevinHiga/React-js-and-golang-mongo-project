import React from 'react';
import './styles/NotFound.css';

function NotFound() {
  return (
    <body>
      <section id="not-found">
        <div className="circles">
          <p>404<br/>
            <small>PAGE NOT FOUND</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </body>
  );
}

export default NotFound;