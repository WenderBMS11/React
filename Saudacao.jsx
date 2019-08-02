import React, { Component } from 'react'
//Componet de classe que é usado para ser entanto 
//A classe se torna um componente
export default class saudacao extends Component{
    render(){
        const { tipo, nome } = this.props 
        return (
            <div>
                <h1>{ tipo }{ nome }</h1>
                <hr /> 
                <input type = "texte" placeholder = "Tipo..." value = {tipo} />
                <input type = "texte" placeholder = "Nome..." value = {nome} />
            </div>
        )
    }
}