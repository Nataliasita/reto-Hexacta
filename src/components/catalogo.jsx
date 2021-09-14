import React from 'react'
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
             </div>
            
    </div>
  )
}


export function formulario(){

  const [showProductForm, setShowProductForm]= useState(true)

    return (
        <div>
            <label htmlFor="">¿No encuentras lo que buscas?</label>
            <button 
                type='button'
                onClick={() => setShowProductForm(!showProductForm)}
                >Agregar Producto
            </button>
            
            {showProductForm && <Form></Form> }
            
        </div>
    )

}