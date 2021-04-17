import React, { Component } from "react";
import "./estilo.css"
class ListaDeCategorias extends Component {
  
  constructor(){
    super();
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    // const referenciaNovaCategoria = this._novasCategorias.bind(this);
    this.props.categorias.inscrever(this._novasCategorias);
}
componentWillUnmount() {
    // const referenciaNovaCategoria = this._novasCategorias.bind(this);
    this.props.categorias.desinscrever(this._novasCategorias);
}
  _novasCategorias(categorias){
    this.setState({...this.state,categorias})
  }
  _handlerEventoInput(e) {
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return <li key={index} className="lista-categorias_item">{categoria}</li>
          })}

        </ul>
        <input type="text" className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;