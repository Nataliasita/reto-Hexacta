import React from 'react'
import { Contador } from './contador'
import '../estilos/productCar.css'

export function ProductCar(item) {
    return (
        <div className="productCar">
            <img src={item.image} className="image_card_car" alt=""/>
            <p className ="card_title_car">{item.title}Nombre producto</p>
            <p className="card_description_car">{item.description}Detalle producto</p>
            <p className="card_points_value_car">{item.points}puntos</p>
            <Contador></Contador>
            <p className="subtotal_product_car">subPuntos</p>
        </div>
    )
}
