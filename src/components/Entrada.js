import React from 'react';
import { Link } from 'react-router-dom';

class Entrada extends React.Component{

    render(){

        console.log(this.props.email);

        return(
            <div className="card fade-in">
                <div className="card-title">
                    <div className="derecha">
                        <span>{this.props.email}</span>
                    </div>
                    <h2 className="centrado">{this.props.titulo}</h2>
                </div>
                <div className="card-body izquierda textoEntrada" dangerouslySetInnerHTML={{ __html: this.props.texto }}>

                </div>
                <div className="card-body">
                    <Link to={"/entrada/" + this.props.id }>Leer más</Link>
                </div>
            </div>
        );
    }

}

export default Entrada;