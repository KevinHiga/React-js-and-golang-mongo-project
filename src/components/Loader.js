import React, { Component } from 'react';

import './styles/Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div id="contenedor_carga">
        <div className="contenedor">
          <div id="carga"></div>
          <h1 id="carga_letra">Cargando...</h1>
        </div>
      </div>
    );
  }
}
