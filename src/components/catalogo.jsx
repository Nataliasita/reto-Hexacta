import React, {useState} from 'react'
import MyHeader from './header'
import Form from './formNewProduct'
import '../estilos/home.css'
import '../estilos/footer.css'
import '../estilos/header.css'
import '../estilos/catalogo.css'
import {Cards} from './cards'
import lupa from '../images/lupa.png'

export function Catalogo() {
  return (
    <div className="contain_catalogo">
      <MyHeader/>
        <form action="">
             <img src={lupa} className="lupa1" alt="" />
             <input className="buscar" placeholder="Buscar producto" type="text"/>
             
        </form>
              <button className="button_buscar" type="submit">Buscar</button>

             <div className="products">
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
             </div>
            
              <div className="filtro">
              <p className="title_filtro"> Filtrar Categoria</p>

               <form  action="">
                      <label htmlFor="" className="op" ><input type="radio" name="productos" value="1"/> Accesorios</label> 
                      <label htmlFor="" className="op"><input  type="radio" name="productos" value="2"/> Celulares</label>
                      <label htmlFor="" className="op"><input  type="radio" name="productos" value="3"/> Deportes</label>
                      <label htmlFor="" className="op"><input  type="radio" name="productos" value="4"/> Mascotas</label>
                      <label htmlFor="" className="op" ><input type="radio" name="productos" value="5"/> Tecnologia</label>
                      <label htmlFor="" className="op" ><input type="radio" name="productos" value="6"/> Viajes</label>
                  </form>

              </div>


    </div>
  )
}


export function Formula(){


  const [showProductForm, setShowProductForm]= useState(true)

    return (
        <div>
            <label htmlFor="">¿No encuentraslo que buscas?</label>
            <button 
                type='button'
                onClick={() => setShowProductForm(!showProductForm)}
                >Agregar Producto
            </button>
            
            {showProductForm && <Form></Form> }
            
        </div>
    )

}