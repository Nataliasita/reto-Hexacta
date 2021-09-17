import React , {useState}from 'react'
import '../estilos/contador.css'

export function Contador() {
    // Declaración de una variable de estado que llamaremos "count"
    const [count, setCount] = useState(0);
  
    return (
      <div className="contador_global">
        <button className="suma" onClick={() => setCount(count + 1)}>
         +
        </button>
        <p className="cantidad"> {count}</p>
        <button className="resta" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    );
  }