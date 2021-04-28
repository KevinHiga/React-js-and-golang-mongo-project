import React from "react";
import "./styles/BooksNew.css";
import "./styles/Bookss.css";
import header from "../images/logo.jpg";
import Books from "../components/Books";
import BooksForm from "../components/BooksForm";
//import axios from 'axios';
import api from '../api';
import swal from 'sweetalert2';
import avatar from "../images/avatar.png";

class BooksNew extends React.Component{
    state = { 
        loading: false,
        error: null,
        form: {
        name: '',
        direction: '',
        year: '',
        avatarUrl: '',
    }, };
    handleChange = (e) => {
       this.setState({
           form: {
               ... this.state.form,
               [e.target.name]: e.target.value,
           },
       });
    };
    alertData(faltantes) {
        swal.fire({
          title: 'Alto ahi!',
          text: `Te faltan campos por rellenar 🧐\n ${faltantes}`,
          icon: 'error'
      });
    }
  
    alertError(){
        swal.fire({
            title: 'Opps!',
            text: `Ha ocurrido algo inesperado, vuelve a intentarlo nuevamente`,
            icon: 'error'
        });
    }
  
    alertSuccess() {
        swal.fire({
            title: 'Creacion Exitosa!',
            text: 'Se ha creado la biblioteca con exito',
            icon: 'success'
        }).then((result) => {
            if (result.value || !result.value) {
                this.props.history.push('/bookss');
            }
        });
    }
    handleSubmit = async e => {
        e.preventDefault();
        console.log(e.target.files); 
        const data = [
            {
            name: this.state.form.name,
            direction: this.state.form.direction,
            year: this.state.form.year,
            avatarUrl: this.state.form.avatarUrl,
        }];
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const valuesFilter = Object.keys(this.state.form).filter((value)=>{
            return (this.state.form[value]==="")
        })
        if(valuesFilter.length!==0){
            this.alertData(valuesFilter);
        }else{
            
            this.setState({ loading: true, error: null });
            fetch('http://localhost:3030/library', requestOptions)
            .then(response => {
                console.log(response.json())
                this.setState({ loading: false });
                console.log(this.state.form);
                this.alertSuccess();
            })
            .catch(error => {
                this.setState({ loading: false, error: error });
                this.alertError();
            })
        }
    };
    handleFile = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    render(){
        return(
            <React.Fragment>
                <div className="Bookss">
                    <div className="Bookss__hero">
                        <div className="Bookss__container">
                            <img className="Bookss_conf-logo" src={header} alt="Logo" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="BooksNew__hero">
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Books 
                                    name={this.state.form.name || 'Nombre'}
                                    direction={this.state.form.direction || 'Direccion'}
                                    year={this.state.form.year || 'Año'}
                                    avatarUrl={this.state.form.avatarUrl || avatar}
                                />
                            </div>
                            <div className="col-6">
                                <h1>Bibliotecas Nuevas</h1>
                                <BooksForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BooksNew;