import React from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import './App.scss';
import ServiceApi from './services/ServiceApi.js';
import ServiceAuth from './services/ServiceAuth.js';

import Head from './components/Head.js';
import Footer from './components/Footer.js';
import TablonEntradas from './components/TablonEntradas.js';
import NuevaEntrada from './components/NuevaEntrada.js';
import EntradaDetalle from './components/EntradaDetalle.js';
import Login from './components/Login.js';

class App extends React.Component{

  constructor(props){
    super(props);

    this.serviceApi = ServiceApi.getInstance();

    this.state = {
      entradas: [],
      logged: ServiceAuth.autenticated()
    } 

    this.insertarNuevaEntrada = this.insertarNuevaEntrada.bind(this);
    this.goToHome = this.goToHome.bind(this);

  }

  componentDidMount(){

      this.serviceApi.getEntradas().then(entradas => {
        this.setState({entradas: entradas});
      });
  }

  insertarNuevaEntrada(value){

      let entradas = this.state.entradas.slice();

      this.serviceApi.insertEntrada(value).then(entrada => {

        this.setState({
          nuevaEntrada: false,
          entradas: [value].concat(entradas)
        });

      });

      this.props.history.push('/');    
  }

  goToHome(){
    this.props.history.push('/');   
  }

  LogOut(){
    ServiceAuth.logOut();
    this.setState({logged: false});
  }

  RenderBotonera(){
     
    if(this.state.logged){
      return this.renderBotoneraLoggedIn();
    } else {
      return this.renderBotoneraNotLoggedIn();
    }

  }

  renderBotoneraLoggedIn(){
    return(
      <div className="col-sm-12">
        <Link className="btn btn-light botonMenu" to="/nuevo">Nueva entrada</Link>
        <input type="button" className="btn btn-light" value="Cerrar sesión" onClick={() => this.LogOut()}></input>
      </div>
    );               
  }

  renderBotoneraNotLoggedIn(){
    return(
      <div className="col-sm-12">
        <Link className="btn btn-light botonMenu" to="/login">Iniciar sesión</Link>
      </div>
    );
  }

  render(){

    return (
      <div className="App">
        <Head numeroEntradas={this.state.entradas? this.state.entradas.length : 0} />
        <header className="App-header">
           <Switch>
            <Route path="/" exact>
              <div className="row">
                {this.RenderBotonera()}
                </div>
                <div className="row mt-2">
                  <div className="col-sm-12">
                    <TablonEntradas entradas={this.state.entradas} />
                  </div>
                </div>
              </Route>
              <Route path="/login" exact>
                <div className="row mt-2">
                  <div className="col-sm-12">
                    <Login back={this.goToHome}></Login>
                  </div>
                </div>
              </Route>
              <Route path="/nuevo" exact>
                <div className="row mt-2">
                  <div className="col-sm-12">
                    <NuevaEntrada data={this.insertarNuevaEntrada}></NuevaEntrada>
                  </div>
                </div>
              </Route>
              <Route path="/entrada/:id" exact component={EntradaDetalle} >           
              </Route>
            </Switch>
        </header>
        <Footer />
      </div>
    );
  }
  
}

export default withRouter(App);