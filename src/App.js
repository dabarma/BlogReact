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

  componentDidMount() {


    const entradasIniciales = [
      { 
        email: 'dabarma@gmail.com',
        titulo: '¿Por qué JSX?',
        texto: '<p>React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.</p><p>En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas. Volveremos a los componentes en otra sección, pero si aún no te sientes cómodo maquetando en JS, esta charla podría convencerte de lo contrario.</p><p>React no requiere usar JSX, pero la mayoría de la gente lo encuentra útil como ayuda visual cuando trabajan con interfaz de usuario dentro del código Javascript. Esto también permite que React muestre mensajes de error o advertencia más útiles.</p><p>Con eso fuera del camino, ¡empecemos!</p>'
      },
      { 
        email: 'dabarma@gmail.com',
        titulo: 'React solo actualiza lo que es necesario',
        texto: '<p>React DOM compara el elemento y su hijos con el elemento anterior, y solo aplica las actualizaciones del DOM que son necesarias para que el DOM esté en el estado deseado.</p>'
      },
      { 
        email: 'dabarma@gmail.com',
        titulo: 'Los datos fluyen hacia abajo',
        texto: '<p>Ni los componentes padres o hijos pueden saber si un determinado componente tiene o no tiene estado y no les debería importar si se define como una función o una clase.</p><p>Por eso es que el estado a menudo se le denomina local o encapsulado. No es accesible desde otro componente excepto de aquel que lo posee y lo asigna.</p>'
      },
      { 
        email: 'dabarma@gmail.com',
        titulo: 'Suposiciones del nivel de conocimiento',
        texto: '<p>React es una biblioteca Javascript, y vamos a asumir que tienes un entendimiento básico del lenguaje Javascript. Si no te sientes muy seguro, te recomendamos hacer un tutorial de Javascript para comprobar tu nivel de conocimiento y permitirte seguir adelante con esta guía sin perderte. Te debería tomar entre 30 minutos y una hora, pero como resultado, no tendrás que sentir que estás aprendiendo React y JavaScript al mismo tiempo.</p>'
      },

    ];

    this.setState({
      entradas: entradasIniciales
    });

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
