import React from 'react';

import './styles/BooksEdit.css';
import header from "../images/logo.jpg";
import Books from "../components/Books";
import BooksForm from "../components/BooksForm";
import api from '../api';
import swal from 'sweetalert2';
import avatar from "../images/avatar.png";
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class BooksEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form: {
    name: '',
    direction: '',
    year: '',
    avatarUrl: '',
    }, };
    
    componentDidMount() {
      this.fetchData();
    }
    
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        
        fetch(`http://localhost:3030/library/${this.props.match.params.booksId}`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ loading: false, form: data });
            console.log(this.setState.data);
        })
        .catch((error) => {
            this.setState({ loading: false, error: error });
        });
    };
    
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
            title: 'Modificación Exitosa!',
            text: 'Se ha modificado la biblioteca con exito',
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
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.form)
        };
        const valuesFilter = Object.keys(this.state.form).filter((value)=>{
            return (this.state.form[value]==="")
        })
        if(valuesFilter.length!==0){
            this.alertData(valuesFilter);
        }else{
            this.setState({ loading: true, error: null });
            fetch(`http://localhost:3030/library/${this.props.match.params.booksId}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ loading: false, form: data });
                console.log(this.setState.data);
                this.alertSuccess();
            })
            .catch((error) => {
                this.setState({ loading: false, error: error });
            });
        }
    };
    handleFile = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    render(){
        if (this.state.loading === true) {
          return <PageLoading />;
        }
    
        if (this.state.error) {
          return <PageError error={this.state.error} />;
        }
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
                    <div className="BooksEdit__hero">
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
                                <h1>Editar Bibliotecas</h1>
                                <BooksForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BooksEdit;
