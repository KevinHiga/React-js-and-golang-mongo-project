import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './styles/BooksDetails.css';
import confLogo from "../images/logo.jpg";
import avatar from "../images/avatar.png";
import Books from '../components/Books';
import DeleteBooksModal from '../components/DeleteBooksModal';

function BooksDetails(props) {

    const book = props.book;

    return (
      <div>
        <div className="BooksDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la Conferencia" />
              </div>
              <div className="col-6 BooksDetails__hero-attendant-name">
                <h1>
                  {book.name}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-8">
                                <Books 
                                    name={book.name}
                                    direction={book.direction}
                                    year={book.year}
                                    avatarUrl={book.avatarUrl}
                                />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/bookss/${book._id}/edit`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button onClick={props.onOpenModal} className="btn btn-danger mb-4">Delete</button>
                  <DeleteBooksModal
                    isOpen={props.modalIsOpen}
                    onClose={props.onCloseModal}
                    onDeleteBooks={props.onDeleteBooks}
                  />
                </div>
                <div>
                  <Link to="/bookss" className="btn btn-danger ">
                            Cancelar
                            </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default BooksDetails;
