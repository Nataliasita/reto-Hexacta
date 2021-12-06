import React from 'react'
import { Contador } from './contador'
import papelera from '../images/x.png'
import '../estilos/productCar.css'


export function ProductCar(item) {

    return (
        <div className="productCar">
            <img src={item.image} className="image_card_car" alt=""/>
            <p className ="card_title_car">{item.title}</p>
            <p className="card_description_car">{item.description}</p>
            <p className="card_points_value_car">{item.points}pts</p>
            <Contador></Contador>
            <p className="subtotal_product_car">{}pts</p>
            <img className='papelera' src={papelera} alt="" />
        </div>
    )
}
