import React from 'react';
import logo from '../logo.svg';

class Head extends React.Component{
  
    constructor(props){
      super(props);
      this.state = {
        date: new Date(),
        isToggleOn: true,
      };
  
      //Este enlace es necesario para hacer que 'this' funcione en el callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    componentDidMount(){
      this.timerID = setInterval(
        ()=> this.tick(),
        1000
      );
    }
  
    tick(){
      this.setState({
        date: new Date()
      });
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    handleClick(){
      this.setState(state=> ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render(){
      return (
        <div className="head row">
            
            <div className="col-sm-6">
                <h1>
                <img src={logo} className="App-logo" alt="logo" />
                    React Blog {this.props.name}
                </h1>
            </div>
            <div className="col-sm-6">
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>  
        </div>   
      );
    }
  }

  export default Head;