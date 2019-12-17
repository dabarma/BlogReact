import React from 'react';

class NuevaEntrada extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            titulo: '',
            texto: ''
            };
    }


    emailChangeHandler = (event) =>{
        this.setState({email: event.target.value});
    }

    textoChangeHandler = (event) =>{
        this.setState({texto: event.target.value});
    }

    tituloChangeHandler = (event) =>{
        this.setState({titulo: event.target.value});
    }

    render(){

        if(!this.props.visible){
            return(<div></div>);
        }
        else
        {
            return(
                <div stylename="text-align:left;">
                    <form>
                        <h1>Nueva entrada</h1>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="email@gmail.com" onChange={this.emailChangeHandler} required />
                        </div>
                        <div className="form-group">
                            <label>Título:</label>
                            <input type="text" className="form-control" id="TituloInput" placeholder="Título de entrada" onChange={this.tituloChangeHandler} required />
                        </div>
                        <div className="form-group">
                            <label>Texto:</label>
                            <textarea className="form-control" id="textoTextArea" rows="3" onChange={this.textoChangeHandler} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-light" onClick={() => this.props.data(this.state)}>Guardar entrada</button>
                        <button className="btn btn-light" onClick={() => this.props.cancelar()}>Cancelar</button>
                    </form>                   
                </div>
            );
        }
    }
}

export default NuevaEntrada;