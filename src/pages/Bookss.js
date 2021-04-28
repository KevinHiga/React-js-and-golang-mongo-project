import React from 'react';
import { Link } from 'react-router-dom';
import BookssList from '../components/BookssList';
import confLogo from "../images/logo.jpg";
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import "./styles/Bookss.css";
import MiniLoader from '../components/MiniLoader';
//import api from '../api';
class Bookss extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
      };
    
      componentDidMount() {
        this.fetchData();

        this.intevalId = setInterval(this.fetchData, 5000);
      }

      componentWillUnmount() {
        clearInterval(this.intevalId);
      }

      fetchData = async () => {
        this.setState({ loading: true, error: null });
        fetch('http://localhost:3030/library')
        .then((res) => res.json())
        .then((data) => {
          this.setState({ loading: false, data: data });
        })
        .catch((error) => {
          this.setState({ loading: false, error: error });
        });
      };

    render(){
        if (this.state.loading === true && !this.state.data) {
          return <PageLoading />;
        }
    
        if (this.state.error) {
          return <PageError error={this.state.error} />;
        }
        return (
            <React.Fragment>
                <div>
                    <div className="Bookss">
                        <div className="Bookss__hero">
                            <div className="Bookss__container">
                                <img className="Bookss_conf-logo" src={confLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="Bookss__container">
                        <div className="Bookss__buttons">
                            <Link to="/bookss/new" className="btn btn-primary">
                            Nuevas Bibliotecas
                            </Link>
                        </div>
                        <BookssList bookss={this.state.data}/>
                        {this.state.loading && <MiniLoader />}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Bookss;