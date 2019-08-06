import React, { Component } from 'react'
//Componet de classe que é usado para ser entanto 
//A classe se torna um componente
export default class saudacao extends Component{
 
//State é para mostrar o que está acontecendo encima . 
    state = {
        tipo : this.props.tipo,
        nome : this.props.nome
    }
//Para receber os valores digitados.
setTipo(e){
    this.setState({ tipo: e.target.value })
}

setNome(e){
    this.setState({ nome: e.target.nome })
}

     render(){
         const { tipo, nome } = this.state
         return (
             <div>
                 <h1>{ tipo }{ nome }</h1>
                 <hr />
                 <input type = "text" placeholder = "tIPO..." value = {tipo}
                 onChange={e => this.setTipo(e)}/>
                 <input type = "text" placeholder = "Nome..." value = {nome}
                 omChange={e => this.setNome(e)}/>
             </div>
         )
     }
}