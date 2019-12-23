import React from 'react';
import Entrada from './Entrada';

class TablonEntradas extends React.Component{

    render(){
   
        let Entradas;
        if(this.props.entradas.length===0)
        {
            Entradas = <div className="centrado"><p>No hay entradas disponibles</p></div>;
        }
        else{

            Entradas = this.props.entradas.map((d,index) => <Entrada key={d.id} id={d.id} email={d.email} texto={d.texto} titulo={d.titulo} />);
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