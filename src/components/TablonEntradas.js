import React from 'react';
import Entrada from './Entrada';

class TablonEntradas extends React.Component{

    render(){

        if(!this.props.visible){
            return(<div></div>);
        }

       
        let Entradas;
        if(this.props.entradas.length===0)
        {
            Entradas = <p>No hay entradas disponibles</p>
        }
        else{

            Entradas = this.props.entradas.map((d) => <Entrada email={d.email} texto={d.texto} />);
        }
        
        return(
            <div>
                <h2>Numero de entradas: {this.props.entradas.length}</h2>
                {Entradas}
            </div>          
        );
    }
}

export default TablonEntradas;