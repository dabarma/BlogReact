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

            Entradas = this.props.entradas.map((d,index) => <Entrada key={index} email={d.email} texto={d.texto} titulo={d.titulo} />);
        }
        
        return(
            <div className="centrado">
                <section className="cards">
                    {Entradas}
                </section>
            </div>          
        );
    }
}

export default TablonEntradas;