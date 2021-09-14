import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import '../estilos/home.css'
import '../estilos/footer.css'
import '../estilos/header.css'
import colaborador from '../images/colaborador.jpg'
import lectura from '../images/lectura.jpg'


export function Home() {
    return (
        <div className ="container">
            <Header></Header>
                <img src={colaborador} className="imagen1" alt="" />
                <img src={lectura} className="lectura" alt="" />

              <div className="redes">
                
              </div>

           <Footer></Footer>

        </div>
    )
}
