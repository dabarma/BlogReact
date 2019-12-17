import React from 'react';

class NuevaEntrada extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            texto: ''
            };
    }


    emailChangeHandler = (event) =>{
        this.setState({email: event.target.value});
    }

    textoChangeHandler = (event) =>{
        this.setState({texto: event.target.value});
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
                            <input type="email" className="form-control" id="emailInput" placeholder="email@gmail.com" onChange={this.emailChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Texto:</label>
                            <textarea className="form-control" id="textoTextArea" rows="3" onChange={this.textoChangeHandler}></textarea>
                        </div>
                        <button onClick={() => this.props.data(this.state)}>Guardar entrada</button>
                    </form>                   
                </div>
            );
        }
    }
}

export default NuevaEntrada;