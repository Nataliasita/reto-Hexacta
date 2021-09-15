import React from 'react'
import logo from '../images/log.jpg'
import {Link} from 'react-router-dom'
import punto from '../images/punto.png'
import idioma from '../images/idioma.png'
import user from '../images/user.png'

export function Header() {
    return (
        <header className="header">
            <img src={logo} className="logoH" alt="" />
            <p className="nameH" >Points Team Hexacta</p>

                     <div className="global_points">
                         <img src={punto} className="point" alt="" />
                         <p className="sumaP">Tus puntos 5360</p>
                     </div>
                     <div className="user">
                         <img src={user} className="point1" alt="" />
                         <p className="name_u">Kelly G.</p>
                     </div>
                     <div className="idioma">
                         <img src={idioma} className="point2" alt="" />
                         <p className="es">ES</p>
                     </div>  

            <nav className="main">
                <Link to="/" exact>
                    <ul className="main1">Inicio</ul>
                </Link>
                <Link to="/Catalogo">
                    <ul className="main1">Catálogo</ul>
                </Link>
                <Link to = "/Carrito">
                    <ul className="main1">Carrito</ul>
                </Link>

            </nav>

        </header>
    )
}

class MyHeader extends React.Component {
    render() {
      return (
        <header style={{backgroundColor: "#c50000" }} className="header">
             <img src={logo} className="logoH" alt="" />
            <p className="nameH" >Points Team Hexacta</p>

            
                     <div className="global_points">
                         <img src={punto} className="point" alt="" />
                         <p className="sumaP">Tus puntos 5360</p>
                     </div>
                     <div className="user">
                         <img src={user} className="point1" alt="" />
                         <p className="name_u">Kelly G.</p>
                     </div>
                     <div className="idioma">
                         <img src={idioma} className="point2" alt="" />
                         <p className="es">ES</p>
                     </div>  

          
            <nav className="main">
                <Link to="/" exact>
                    <ul className="main1">Inicio</ul>
                </Link>
                <Link to="/Catalogo">
                    <ul className="main1">Catálogo</ul>
                </Link>
                <Link to = "/Carrito">
                    <ul className="main1">Carrito</ul>
                </Link>
            </nav>

        </header>
      );
    }
  }

export default MyHeader

export class MyHeaderCar extends React.Component {
    render() {
      return (
        <header style={{backgroundColor: "#008b35" }} className="header">
             <img src={logo} className="logoH" alt="" />
            <p className="nameH" >Points Team Hexacta</p>

                      <div className="global_points">
                         <img src={punto} className="point" alt="" />
                         <p className="sumaP">Tus puntos 5360</p>
                     </div>
                     <div className="user">
                         <img src={user} className="point1" alt="" />
                         <p className="name_u">Kelly G.</p>
                     </div>
                     <div className="idioma">
                         <img src={idioma} className="point2" alt="" />
                         <p className="es">ES</p>
                     </div>  

            <nav className="main">
                <Link to="/" exact>
                    <ul className="main1">Inicio</ul>
                </Link>
                <Link to="/Catalogo">
                    <ul className="main1">Catálogo</ul>
                </Link>
                <Link to = "/Carrito">
                    <ul className="main1">Carrito</ul>
                </Link>
            </nav>

        </header>
      );
    }
  }

