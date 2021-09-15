import React from 'react'
import logo from '../images/log.jpg'
import {Link} from 'react-router-dom'

export function Header() {
    return (
        <header className="header">
            <img src={logo} className="logoH" alt="" />
            <p className="nameH" >Points Team Hexacta</p>

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