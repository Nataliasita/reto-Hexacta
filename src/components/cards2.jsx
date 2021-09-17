/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../estilos/cards2.css";

export function CardsNew (item1){
  return (
    <div className ="card_container">
    
             <img src={item1.image} className="image_card" alt=""/>
             <p className="category_producto">{item1.categories}</p>
         <p className ="card_title">{item1.title}</p>
   
         <p className="title_alert">Producto aun no disponible</p>
         <button className="infoImagen">Informacion Imagen</button>
  


    </div>

    )
}