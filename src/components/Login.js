import React from 'react';
import { Link } from 'react-router-dom';
import ServiceAuth from '../services/ServiceAuth';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            user: '',
            pass: ''
            };
    }

    usuarioChangeHandler = (event) =>{
        this.setState({user: event.target.value});
    }

    passChangeHandler = (event) =>{
        this.setState({pass: event.target.value});
    }

    login = async (event)=>{
        var data = await ServiceAuth.login(this.state.user,this.state.pass)

        console.log(data);

        if(data.success===true)
        {
            console.log("Login correcto");
            this.props.back(); 
        }else{
            console.log("Login incorrecto");
        }

    }

    render(){

        return(
            <div stylename="text-align:left;">
                <form onSubmit={(e) => { e.preventDefault(); this.login();}}>
                    <h2>Inicio de sesión</h2>
                    <div className="form-group">
                        <label>Usuario:</label>
                        <input type="text" className="form-control" id="usuarioInput" onChange={this.emailChangeHandler} required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="passInput" onChange={this.passChangeHandler} required />
                    </div>
                    <input type="submit" className="btn btn-light" value="Iniciar sesión"></input>
                    <Link className="btn btn-light" to="/">Cancelar</Link>
                </form>                   
            </div>
        );        
    }
}

export default Login;