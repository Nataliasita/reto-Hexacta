import React, {useState, useEffect} from 'react'
import MyHeader from './header'
import '../estilos/home.css'
import '../estilos/footer.css'
import '../estilos/header.css'
import '../estilos/catalogo.css'
import {Cards} from './cards'
import lupa from '../images/lupa.png'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore/lite';

function searchingTerm(term){ 
  return function(x){ 
    return x.title.toLowerCase().includes(term) || !term;
   }

 }




export function Catalogo() {

  // async function getCities(db) {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   return cityList;
  // }

  const [productos, setProductos] = useState([]);
  const [term, setTerm] = React.useState('');

  useEffect(()=>{
    const dbCollection = collection(db, "Productos");
    getDocs(dbCollection).then((snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push({ ...doc.data() })
        })
        console.log(data)
        setProductos(data)
      })
  },[]);

  return (
    <div className="contain_catalogo">
      <MyHeader/>
        <form action="">
             <img src={lupa} className="lupa1" alt="" />

             <input className="buscar"
              onChange= {e => setTerm(e.target.value)} 
              name='term'
              placeholder="Buscar producto" type="text"/>
             
        </form>
              <button className="button_buscar" type="submit">Buscar</button>

             <div className="products">

               {productos.filter(searchingTerm(term)).map((item) =>    
               <Cards {...item}>                              
               </Cards>
               )}
             </div>
            
              <div className="filtro">
              <p className="title_filtro"> Filtrar Categoria</p>

               <form  action="" className="op">
                      <label >
                      <input type="radio" name="productos"  value="accesorios"/> 
                      Accesorios
                      </label> 
                      <label >
                      <input type="radio" name="productos"  value="celulares"/> 
                      Celulares
                      </label> 
                      <label >
                      <input type="radio" name="productos"  value="deportes"/> 
                      Deportes
                      </label> 
                      <label >
                      <input type="radio" name="productos"  value="mascotas"/> 
                      Mascotas
                      </label> 
                      <label >
                      <input type="radio" name="productos"  value="tecnologia"/> 
                      Tecnologia
                      </label> 
                      <label >
                      <input type="radio" name="productos"  value="viajes"/> 
                      Viajes
                      </label> 
                     
                  </form>

              </div>


    </div>
  )
}
