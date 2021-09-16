//import logo from './logo.svg';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import { Home } from'./components/home';
import { Catalogo, BotonModal} from './components/catalogo';
import { Carrito} from './components/carrito';
//import { ButtonModal } from './components/buttonModal';


function App() {

  
  return (
    <Router>
      <div className="router-container">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/catalogo" exact>
            <Catalogo/>
            <BotonModal/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/Carrito" exact>
            <Carrito/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
