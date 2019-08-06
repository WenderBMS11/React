import React , { Component } from 'react';
import './Botton.css';

//Componente botão teste 
class BotoesTeste extends Component{
    render(){
        return(
            <button onClick={()=>{this.props.handleclick(this.props.label);}}
                    >
                        {this.props.label}
                    </button>
        );
    }
}

// Componente texto
class Mylabel extends Component{
    render() {
        return <span>Clique no: {this.props.text}</span>
    }
} 

//Construtor
class Botoes extends Component{
    constructor(props){
        super (props)

        this.state = {
            labelText:''
        }
    }

//setState atualizando o quando clicando
setLabelText = (labelText) =>{
    this.setState({ labelText });
}
//rederizando html na tela 
render() {
    return(
        <div className = "Botoes">
            <Mylabel text = {this.state.labelText}/>
            <br/>
            <BotoesTeste handleclick = {this.setLabelText} label = "Bom dia"/>
            <BotoesTeste handleclick = {this.setLabelText} label = "Bao Tarde"/>
            <BotoesTeste handleclick = {this.setLabelText} label = "Boa Noite"/>
        </div>
        )
    }
}       
//exportando nossa classe 
export default Botoes