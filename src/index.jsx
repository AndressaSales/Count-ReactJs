import React from "react";
import ReactDOM from "react-dom";
import './App.css';
class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cont: 0
        }
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset(){
        this.setState({
            cont: 0
        });
    }
    incrementar(){
        this.setState(state => ({
            cont: state.cont + 1
        }));
    }
    decrementar(){
        this.setState(state => ({
            cont: state.cont - 1
        }));
    }
    render(){
        return(
            <div className='container'>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decrementar}>Decrementar</button>
                <button onClick={this.reset}>Resetar</button>
                <h1>{this.state.cont}</h1>
        </div>
        );
    }
}

ReactDOM.render(<Count />, document.getElementById("root"));