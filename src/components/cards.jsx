/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../estilos/cards.css";

export function Cards (){
  return (
    <div className ="card_container">
    
             <img src="" className="image_card" alt=""/>
         <p className ="card_title">{}</p>
         <p className="card_description">{}</p>
         <p className="card_points_value">{}</p>
         <a href="" className="card_send_cart">+ Detalles</a>
                <button className="card_details">Agregar a carrito</button>


    </div>

    )
}