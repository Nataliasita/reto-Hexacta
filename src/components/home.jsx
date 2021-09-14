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


export function Home() {
    return (
        <div className ="container">
            <Header></Header>

            <video className="vd1" autoplay="1" loop="1" muted preload="auto">
             <source src={video_d } type="video/mp4" />
            </video>
                     <p className="title1">Diversion</p>
                
                <img src={mascota} className="lectura" alt="" />
                     <p className="title2">Mascotas</p>
                <img src={bolso} className="bolso1" alt="" />
                     <p className="title3">Accesorios</p>

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
