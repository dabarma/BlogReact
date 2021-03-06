import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';

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

    tituloChangeHandler = (event) =>{
        this.setState({titulo: event.target.value});
    }

    render(){

        return(
            <div stylename="text-align:left;">
                <form onSubmit={(e) => { e.preventDefault(); this.props.data(this.state)}}>
                    <h2>Nueva entrada</h2>
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
                        <CKEditor
                            editor={ ClassicEditor }
                            data=""
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({texto: data});
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </div>
                    <input type="submit" className="btn btn-light" value="Guardar entrada"></input>
                    <Link className="btn btn-light" to="/">Cancelar</Link>
                </form>                   
            </div>
        );
        
    }
}

export default NuevaEntrada;