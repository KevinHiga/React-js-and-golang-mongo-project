import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return (
    <body>
      <section id="not-found">
        <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
        <div className="circles">
        <p>{props.error.message}</p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </body>
  );
}

export default PageError;
