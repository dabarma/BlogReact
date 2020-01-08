import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Head extends React.Component{
    
    render(){
      return (
        <div className="head row">
            
            <div className="col-sm-8">
                <h1>
                <img src={logo} className="App-logo" alt="logo" />
                  <Link to="/">
                    React Blog 
                  </Link>
                </h1>
            </div>
            <div className="col-sm-6 align-self-center">
                {/* <h2>Número de entradas: {this.props.numeroEntradas}</h2> */}
            </div>  
        </div>   
      );
    }
  }

  export default Head;