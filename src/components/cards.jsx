import React from "react";
import "../estilos/cards.css";

export function Cards (){
  return (
    <div className ="card_container">
      <section>
        <img className ="card_image"/>
        <h1 className ="card_title"></h1>
      </section>
      <p className="card_description"></p>
      <p className="card_points_value"></p>
      <button className="card_details">Detalles</button>
      <button className="card_send_cart">Agregar</button>
    </div>
    )
}