import React from 'react';

class Entrada extends React.Component{

    render(){

        console.log(this.props.email);

        return(
            <div className="card">
                <div className="card-title">
                    <div className="derecha">
                        <span>{this.props.email}</span>
                    </div>
                    <h2 className="centrado">{this.props.titulo}</h2>
                </div>
                <div className="card-body izquierda" dangerouslySetInnerHTML={{ __html: this.props.texto }}>

                </div>
            </div>
        );
    }

}

export default Entrada;