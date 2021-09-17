/* eslint-disable no-unreachable */
import React, {useState, useEffect} from 'react'
import MyHeader from './header'
import '../estilos/home.css'
import '../estilos/footer.css'
import '../estilos/header.css'
import '../estilos/catalogo.css'
import '../estilos/buttonModal.css'
import {Cards} from './cards'
import lupa from '../images/lupa.png'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import { ButtonModal } from './buttonModal';

function searchingTerm(term){ 
  return function(x){ 
    return x.title.toLowerCase().includes(term) || x.categories.toLowerCase().includes(term)|| !term ;
   }

 }


export function Catalogo(props) {

  // async function getCities(db) {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   return cityList;
  // }

  const [productos, setProductos] = useState([]);
  const [term, setTerm] = React.useState();
  const [selectedCategory, setSelectedCategory] = useState({
    checked:null
  })

  const handleChange = e =>{
    const newTerm=setTerm(e.target.value);
    setSelectedCategory({

       checked:(e.target.value)
    })

  }

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
              placeholder="Buscar producto o categoria" type="text"/>
             
        </form>


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
                      <input type="radio"
                       name="productos"  
                       value="accesorios"
                       checked={selectedCategory.checked === "accesorios"}
                       onChange={handleChange}/> 
                      Accesorios
                      </label> 
                      <label >
                      <input type="radio"
                       name="productos"  
                       value="celulares"
                       checked={selectedCategory.checked === "celulares"}
                       onChange={handleChange}/>
                      Celulares
                      </label> 
                      <label >
                      <input type="radio"
                       name="productos" 
                       value="deportes"
                       checked={selectedCategory.checked === "deportes"}
                       onChange={handleChange}/> 
                      Deportes
                      </label> 
                      <label >
                      <input type="radio"
                       name="productos"  
                       value="mascotas"
                       checked={selectedCategory.checked === "mascotas"}
                       onChange={handleChange}/> 
                      Mascotas
                      </label> 
                      <label >
                      <input type="radio"
                      name="productos"  
                      value="tecnologia"
                      checked={selectedCategory.checked === "tecnologia"}
                      onChange={handleChange}/> 
                      Tecnologia
                      </label> 
                      <label >
                      <input type="radio" 
                      name="productos"  
                      value="viajes"
                      checked={selectedCategory.checked === "viajes"}
                      onChange={handleChange}/>
                      Viajes
                      </label> 
                     
                  </form>

              </div>


            <div className='dimension_btn'><ButtonModal /></div>

    </div>
  )
}