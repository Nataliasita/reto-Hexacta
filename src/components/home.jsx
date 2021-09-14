import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import './home.css'
import './footer.css'
import './header.css'
import colaborador from '../images/colaborador.jpg'
import lectura from '../images/lectura.jpg'


export function Home() {
    return (
        <div className ="container">
            <Header></Header>
           <img src={colaborador} className="imagen1" alt="" />
           <img src={lectura} className="lectura" alt="" />
           <Footer></Footer>
        </div>
    )
}
