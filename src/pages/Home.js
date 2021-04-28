import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import homeImage from '../images/home.jpg';
import libraryImage from '../images/library.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-6 col-md-6">
              <img src={homeImage} alt="LibraryHomeImage" className="Home__col-img" />

              <h1><strong>Library</strong><br/></h1>
              <h2>
                <span className="Home__letter">Manage</span>
                <span className="Home__letter2">ment</span>
                <br/>
              </h2>
              <h2>
                System
              </h2>
              <Link className="btn btn-primary" to="/bookss">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-6">
              <img src={libraryImage} alt="Biblioteca" className="Home__col-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
