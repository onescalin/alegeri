import React, { Component } from "react";
import "./listasel.css";
class ListaSel extends Component {
  render() {
    const { eticheta, nume, lista } = this.props;

    const optiuni = lista.map(item => <option>{item}</option>);

    return (
      <div className="listasel form-group">
        <label htmlFor={nume}>{eticheta}</label>
        <select className="form-control" id={nume}>
          <option>Selectează județul</option>
          {optiuni}
        </select>
      </div>
    );
  }
}

export default ListaSel;
