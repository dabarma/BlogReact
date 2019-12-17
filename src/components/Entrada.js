import React from 'react';

class Entrada extends React.Component{

    render(){

        console.log(this.props.email);

        return(
            <div className="card">
                <div className="card-title">
                <span>{this.props.email}</span>
                </div>
                <div className="card-body">
                    <span>{this.props.texto}</span>
                </div>
            </div>
        );
    }

}

export default Entrada;