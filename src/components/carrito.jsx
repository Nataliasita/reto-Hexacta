import React from 'react'
import  {MyHeaderCar} from './header'
import { Footer } from './footer'
// import{ProductCar} from './productCar'
import '../estilos/home.css'
import '../estilos/footer.css'
import '../estilos/header.css'
import '../estilos/carrito.css'
import { ProductCar } from './productCar'
import products from "../data/catalogo.js";


export function Carrito() {
    const information_products=products;
    return (
        <div className="containt_car">
            <MyHeaderCar/>

            <h3 className="title_pedido">Resumen Pedido</h3>

                 <div className="detalle_pro">
                      <p className="prod">Producto</p>
                      <p className="cant">Cantidad</p>
                      <p className="ptsUnd">Puntos x und</p>
                      <p className="subtotal_puntos">Subtotal puntos x und</p>

                 </div>
           


                    <div className="products1">
                        
                    {information_products.map((item) => 
                     <ProductCar {...item}>                              
                     </ProductCar>
                    )}
               
                       
                     
                    </div>
                    
                    <div className="totales">
                        <p className="cantidad_product">Cantidad articulos</p><p>{}</p>
                        <p className="sub_puntos">Subtotal puntos</p><p>{}</p>
                        <p className="total_puntos">Total puntos</p><p>{}</p>
                    </div>

                    <button className="btn_pagar">Pagar</button>

                    <Footer></Footer>
        </div>
        
    )
}
