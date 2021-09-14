import React from 'react'
import logo from '../images/logo.jpg'

export function Header() {
    return (
        <header className="header">
            <img src={logo} className="logoH" alt="" />

            <nav className="main">
                <ul className="main1">Inicio</ul>
                <ul className="main1">Catalogo</ul>
                <ul className="main1">Carrito</ul>

            </nav>

        </header>
    )
}


