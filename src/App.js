import React from 'react';
import './App.css';
import Head from './components/Head.js';
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
        <button onClick={this.nuevaEntradaClick}>
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

      console.log(value);

      this.setState({
        nuevaEntrada: false,
        entradas: entradas.concat(value)
      });
  }

  render(){

    return (
      <div className="App">
        <Head name="David" />
        <header className="App-header">
          <div className="row">
            <div className="col-sm-12">
              {this.renderBotonNuevo()}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-12">
              <NuevaEntrada data={this.insertarNuevaEntrada} visible={this.state.nuevaEntrada}></NuevaEntrada>
              <TablonEntradas entradas={this.state.entradas} visible={!this.state.nuevaEntrada} />
            </div>
          </div>
        </header>
      </div>
    );

  }

}

export default App;
