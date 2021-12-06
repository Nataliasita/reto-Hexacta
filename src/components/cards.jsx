/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../estilos/cards.css";
// import products from "../data/catalogo.js";



// console.log(information_products);



// export function Cards (item){
//   return (
//     <div className ="card_container">
    
//              <img src={item.image} className="image_card" alt=""/>
//              <p className="category_producto">{item.categories}</p>
//          <p className ="card_title">{item.title}</p>
//          <p className="card_description">{item.description}</p>
//          <p className="card_points_value">{item.points}</p><p className="name_puntos">Puntos</p>
//          <a href="" className="card_send_cart">+ Detalles</a>
//                 <button className="card_details">Agregar a carrito</button>


//     </div>

//     )
// }


export function Cards (item){
  return (

    <div className ="card_container">
    
             <img src={item.image} className="image_card" alt=""/>
             <p className="category_producto">{item.categories}</p>
         <p className ="card_title">{item.title}</p>
         <p className="card_description">{item.description}</p>
         <p className="card_points_value">{item.points}</p><p className="name_puntos">Puntos</p>
         <a href="" className="card_send_cart">+ Detalles</a>
                <button className="card_details">Agregar a carrito</button>


    </div>

    )
}
