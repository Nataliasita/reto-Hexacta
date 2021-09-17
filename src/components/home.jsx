import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import '../estilos/home.css'
import '../estilos/footer.css'
import '../estilos/header.css'
import mascota from '../images/mascotas.jpg'
import bolso from '../images/bolso.jpg'
import log1 from '../images/log1.png'
import log2 from '../images/log2.png'
import log3 from '../images/log3.png'
import video_d from '../images/deporte.mp4'
import celular from '../images/celu.jpg'
import deporte from '../images/deporte.jpg'
import compu from '../images/compu.jpg'
import viaje from '../images/viaje.jpg'

export function Home() {
    return (
        <div className ="container">
            <Header></Header>

            <video className="vd1" autoplay="1" loop="1" muted preload="auto">
             <source src={video_d } type="video/mp4" />
            </video>
                     <p className="title1">Acumula puntos y disfruta la aventura...</p>
                
                
                <img src={bolso} className="bolso1" alt="" />
                     <p className="title3">Accesorios</p>
                <img src={celular} className="celular1" alt="" />
                     <p className="title5">Celulares</p>
                <img src={deporte} className="deportes" alt="" />
                     <p className="title6">Deportes</p>

                <img src={mascota} className="mascota" alt="" />
                    <p className="title2">Mascotas</p>
                <img src={compu} className="compu" alt="" />
                    <p className="title7">Tecnologia</p>
                <img src={viaje} className="viaje" alt="" />
                    <p className="title8">Viajes</p>

              <div className="redes">
                <p className="title4">Encuentranos en :</p>
                <div className="group">
                  <img src={log1} className="log" alt="" />
                  <img src={log2} className="log" alt="" />
                  <img src={log3} className="log" alt="" />
                </div>
              </div>

           <Footer></Footer>

        </div>
    )
}
