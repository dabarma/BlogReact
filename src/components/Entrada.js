import React from 'react';

class Entrada extends React.Component{

    render(){

        console.log(this.props.email);

        return(
            <div>
                <p>email: {this.props.email}</p>
                <p>texto: {this.props.texto}</p>
            </div>
        );
    }

}

export default Entrada;