import React from 'react';
import logo from '../logo.svg';

class Head extends React.Component{
    
    render(){
      return (
        <div className="head row">
            
            <div className="col-sm-6">
                <h1>
                <img src={logo} className="App-logo" alt="logo" />
                    React Blog 
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