import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  render() {
    const { culoare, numar, text } = this.props;

    const stil = {
      width: "80%",
      height: "40px",
      margin: "-12px auto 0 auto",
      backgroundColor: culoare
    };

    const stil1 = { color: "#888" };
    return (
      <div className="card text-center h-100">
        <div style={stil}></div>
        <div className="card-body">
          <h5 className="card-title">{numar}</h5>
          <p className="card-text" style={stil1}>
            {text}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
