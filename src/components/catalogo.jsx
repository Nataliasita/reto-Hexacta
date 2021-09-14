import React from 'react'
import MyHeader from './header'
import { Footer } from './footer'
import '../estilos/home.css'
import '../estilos/footer.css'
import '../estilos/header.css'
import '../estilos/catalogo.css'
import {Cards} from './cards'

export function Catalogo() {
  return (
    <div className="contain_catalogo">
      <MyHeader/>
        <form action="">
             <input className="buscar" placeholder="Buscar producto" type="text"/>
             
        </form>
              <button className="button_buscar" type="submit">Buscar</button>

             <div className="products">
              <Cards></Cards>
             </div>
      <Footer></Footer>
    </div>
  )
}
