import React from 'react';
import "./styles/Books.css";
import confLogo from "../images/logobooks.png";
import avatar from "../images/avatar.png";
class Books extends React.Component {
    render(){
        const {
            name,
            direction,
            year,
            avatarUrl
        } = this.props
        return (
            <div className="books">
                <div className="books_header">
                    <img src={confLogo} alt="Logo de congerencia"></img>
                </div>
                <div className="books_section-name">
                    <img src={avatarUrl} className="books_avatar" alt="Avatar"></img>
                    <h1>{name}</h1>
                </div>
                <div className="books_section-info">
                    <p>{direction}</p>
                    <p>{year}</p>
                </div>
                <div className="books_footer">info</div>
            </div>
        )
    }
}

export default Books;