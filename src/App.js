//import logo from './logo.svg';
import React from "react";
import { Switch, Route, HashRouter} from "react-router-dom"
import './App.css';
import { Home } from'./components/home';
import { Catalogo} from './components/catalogo';
import { Carrito} from './components/carrito';
//import { ButtonModal } from './components/buttonModal';


function App() {

  
  return (

    // <Router>
    //   <div className="router-container">
    //     <Switch>
    //       <Route path="/" exact>
    //         <Home/>
    //       </Route>
    //     </Switch>
    //     <Switch>
    //       <Route path="/catalogo" exact>
    //         <Catalogo/>
    //       </Route>
    //     </Switch>
    //     <Switch>
    //       <Route path="/Carrito" exact>
    //         <Carrito/>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    <HashRouter>
    <div className="router-container">
      <Switch>
        <Route exact path="/reto-Hexacta" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/catalogo" component={Catalogo}/>
        <Route exact path="/Carrito" component={Carrito} />
      </Switch>
    </div>
    </HashRouter>



  );
}

export default App;
