/* eslint-disable no-unreachable */
import React from 'react'
import MyHeader from './header'
import '../estilos/home.css'
import '../estilos/footer.css'
import '../estilos/header.css'
import '../estilos/catalogo.css'
import '../estilos/buttonModal.css'
import {Cards} from './cards'
// import {CardsNew} from './cards2'
import lupa from '../images/lupa.png'
// import { db } from '../firebase'
// import { collection, getDocs } from 'firebase/firestore/lite';
import { ButtonModal } from './buttonModal';
// import { useLocation } from 'react-router-dom';
import products from "../data/catalogo.js";

const information_products=products;
console.log(information_products);


// function searchingTerm(term){ 
//   return function(x) {
//     if (term === 'todas') return true
//     return x.title.toLowerCase().includes(term) || x.categories.toLowerCase().includes(term)|| !term ;
//   }
// }

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

// export function Catalogo(props) {
//   let query = useQuery();
//   const [productos, setProductos] = useState([]);
//   const [nuevoProducto, setnuevoProducto] = useState([]);
//   const [term, setTerm] = React.useState(() => query.get('category') || null);
//   const [selectedCategory, setSelectedCategory] = useState({
//     checked: query.get('category') || null
//   })
//   const [reload, setReload] = React.useState(true);

//   const handleChange = e => {
//     setTerm(e.target.value);
//     setSelectedCategory({
//        checked: e.target.value
//     })
//   }
  
//   useEffect(()=>{
//     const dbCollection = collection(db, "Productos");
//     getDocs(dbCollection).then((snapshot) => {
//         const data = [];
//         snapshot.forEach((doc) => {
//           data.push({ ...doc.data() })
//         })
//         console.log(data)
//         setProductos(data)
//       })
//   },[reload]);

//   useEffect(()=>{
//     const dbCollection = collection(db, "nuevoProducto");
//     getDocs(dbCollection).then((snapshot) => {
//         const data = [];
//         snapshot.forEach((doc) => {
//           data.push({ ...doc.data() })
//         })
//         console.log(data)
//         setnuevoProducto(data)
//       })
//   },[reload]);

//   return (
//     <div className="contain_catalogo">
//       <MyHeader/>
//         <form action="">
//              <img src={lupa} className="lupa1" alt="" />

//              <input className="buscar"
//               onChange= {e => setTerm(e.target.value)} 
//               name='term'
//               placeholder="Buscar producto o categoria" type="text"/>
             
//         </form>

//              <div className="products">

//                {productos.filter(searchingTerm(term)).map((item) =>    
//                <Cards {...item}>                              
//                </Cards>
//                )}

//                {nuevoProducto.filter(searchingTerm(term)).map((item1) =>    
//                <CardsNew {...item1}>                              
//                </CardsNew>
//                )}


//              </div>
            
//               <div className="filtro">
//               <p className="title_filtro"> Filtrar Categoria</p>

//                <form  action="" className="op">
//                 <label >
//                       <input type="radio"
//                        name="productos"  
//                        value="todas"
//                        checked={selectedCategory.checked === "todas"}
//                        onChange={handleChange}/> 
//                       Todas
//                       </label> 
//                       <label >
//                       <input type="radio"
//                        name="productos"  
//                        value="accesorios"
//                        checked={selectedCategory.checked === "accesorios"}
//                        onChange={handleChange}/> 
//                       Accesorios
//                       </label> 
//                       <label >
//                       <input type="radio"
//                        name="productos"  
//                        value="celulares"
//                        checked={selectedCategory.checked === "celulares"}
//                        onChange={handleChange}/>
//                       Celulares
//                       </label> 
//                       <label >
//                       <input type="radio"
//                        name="productos" 
//                        value="deportes"
//                        checked={selectedCategory.checked === "deportes"}
//                        onChange={handleChange}/> 
//                       Deportes
//                       </label> 
//                       <label >
//                       <input type="radio"
//                        name="productos"  
//                        value="mascotas"
//                        checked={selectedCategory.checked === "mascotas"}
//                        onChange={handleChange}/> 
//                       Mascotas
//                       </label> 
//                       <label >
//                       <input type="radio"
//                       name="productos"  
//                       value="tecnologia"
//                       checked={selectedCategory.checked === "tecnologia"}
//                       onChange={handleChange}/> 
//                       Tecnologia
//                       </label> 
//                       <label >
//                       <input type="radio" 
//                       name="productos"  
//                       value="viajes"
//                       checked={selectedCategory.checked === "viajes"}
//                       onChange={handleChange}/>
//                       Viajes
//                       </label> 
                     
//                   </form>

//               </div>


//             <div className='dimension_btn'>
//               <ButtonModal reload = {reload} setReload = {setReload} />
//             </div>

          



//     </div>

//   )
// }




function searchingTerm(term){ 
  return function(x) {
    if (term === 'todas') return true
    return x.title.toLowerCase().includes(term) ||x.categories[0].toLowerCase().includes(term) || !term ;
  }
}

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

export function Catalogo() {
  const information_products=products;
  console.log(information_products);
  // let query = useQuery();
  // const [productos, setProductos] = useState([]);
  // const [nuevoProducto, setnuevoProducto] = useState([]);
  const [term, setTerm] = React.useState([]);
  // const [selectedCategory, setSelectedCategory] = useState({
  //   checked: query.get('category') || null
  // })
  // const [reload, setReload] = React.useState(true);

  // const handleChange = e => {
  //   setTerm(e.target.value);
  //   setSelectedCategory({
  //      checked: e.target.value
  //   })
  // }
  
  // useEffect(()=>{
  //   const dbCollection = collection(db, "Productos");
  //   getDocs(dbCollection).then((snapshot) => {
  //       const data = [];
  //       snapshot.forEach((doc) => {
  //         data.push({ ...doc.data() })
  //       })
  //       console.log(data)
  //       setProductos(data)
  //     })
  // },[reload]);

  // useEffect(()=>{
  //   const dbCollection = collection(db, "nuevoProducto");
  //   getDocs(dbCollection).then((snapshot) => {
  //       const data = [];
  //       snapshot.forEach((doc) => {
  //         data.push({ ...doc.data() })
  //       })
  //       console.log(data)
  //       setnuevoProducto(data)
  //     })
  // },[reload]);

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

               {information_products.filter(searchingTerm(term)).map((item) =>    
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
                       value="todas"
                       checked={true}
                       /> 
                      Todas
                      </label> 
                      <label >
                      <input type="radio"
                       name="productos"  
                       value="accesorios"/> 
                      Accesorios
                      </label> 
                      <label >
                      <input type="radio"
                       name="productos"  
                       value="celulares"/>
                      Celulares
                      </label> 
                      <label >
                      <input type="radio"
                       name="productos" 
                       value="deportes"/> 
                      Deportes
                      </label> 
                      <label >
                      <input type="radio"
                       name="productos"  
                       value="mascotas"/> 
                      Mascotas
                      </label> 
                      <label >
                      <input type="radio"
                      name="productos"  
                      value="tecnologia"/> 
                      Tecnologia
                      </label> 
                      <label >
                      <input type="radio" 
                      name="productos"  
                      value="viajes"/>
                      Viajes
                      </label> 
                     
                  </form>

              </div>


            <div className='dimension_btn'>
              <ButtonModal/>
            </div>

          



    </div>

  )
}
