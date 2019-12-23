import React from 'react';

class EntradaDetalle extends React.Component{

    render(){
        console.log(this.props);
        return (
        <p>{this.props.match.params.id}</p>
        );
    }
}

export default EntradaDetalle;