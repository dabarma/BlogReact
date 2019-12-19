import React from 'react';
import './App.css';
import Head from './components/Head.js';
import Footer from './components/Footer.js';
import TablonEntradas from './components/TablonEntradas.js';
import NuevaEntrada from './components/NuevaEntrada.js';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      entradas: [],
      nuevaEntrada: false,
    } 

    this.nuevaEntradaClick = this.nuevaEntradaClick.bind(this);
    this.insertarNuevaEntrada = this.insertarNuevaEntrada.bind(this);
    this.cancelarNuevaEntrada = this.cancelarNuevaEntrada.bind(this);
  }

  nuevaEntradaClick(){
    this.setState({
      nuevaEntrada: true
    });
  }

  renderBotonNuevo(){

    if(!this.state.nuevaEntrada)
    {
      return(
        <button className="btn btn-light botonMenu" onClick={this.nuevaEntradaClick}>
          Nueva entrada
        </button>
        );
    }else
    {
      return("");
    }
  }

  insertarNuevaEntrada(value){

      let entradas = this.state.entradas.slice();

      this.setState({
        nuevaEntrada: false,
        entradas: [value].concat(entradas)
      });
  }

  cancelarNuevaEntrada(){

    this.setState({
      nuevaEntrada: false
    });

  }

  render(){

    return (
      <div className="App">
        <Head numeroEntradas={this.state.entradas? this.state.entradas.length : 0} />
        <header className="App-header">
          <div className="row">
            <div className="col-sm-12">
              {this.renderBotonNuevo()}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-12">
              <NuevaEntrada data={this.insertarNuevaEntrada} cancelar={this.cancelarNuevaEntrada} visible={this.state.nuevaEntrada}></NuevaEntrada>
              <TablonEntradas entradas={this.state.entradas} visible={!this.state.nuevaEntrada} />
            </div>
          </div>
        </header>
        <Footer />
      </div>
    );

  }

}

export default App;
