import React from 'react';
import ServiceApi from '../services/ServiceApi.js';
import { Link } from 'react-router-dom';

class EntradaDetalle extends React.Component{

    constructor(props){

        super(props);
        this.serviceApi = ServiceApi.getInstance();  
        
        this.state = {
            entrada: null,
            loaded: false
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;
        console.log(id);
        this.serviceApi.getEntrada(id).then(entrada => {

            console.log(entrada);
            this.setState({
              entrada: entrada,
              loaded: true
            });
    
          });
    }

    render(){
        
        if(this.state.loaded)
        {
            return (
                <div className="detalleEntrada">
                    <h1>{this.state.entrada.titulo}</h1>
                    <span className="email">{this.state.entrada.email}</span>
                    <div className="textoEntrada" dangerouslySetInnerHTML={{ __html: this.state.entrada.texto }}>

                    </div>
                    <div className="centrado">
                        <Link className="btn btn-light" to="/">Volver</Link>
                    </div>           
                </div>
                );
        }
        else return(<div></div>);
    }
}

export default EntradaDetalle;