import React from "react";
import "../estilos/cards.css";

export function Cards (){
  return (
    <div className ="card_container">
    
       <img src="" className="image_card" alt=""/>
         <h1 className ="card_title">{}</h1>
         <p className="card_description"></p>
         <p className="card_points_value"></p>
      <button className="card_details">Agregar a carrito</button>
      <button className="card_send_cart">Detalle</button>

    </div>

    )
}