import React, { useState } from 'react'
import Form from '../components/formNewProduct.jsx'
// import Form from '../components/form.jsx'

export function Catalogo() {

    const [showProductForm, setShowProductForm]= useState(true)

    return (
        <div>
            <label htmlFor="">¿No encuentras lo que buscas?</label>
            <button 
                type='button'
                onClick={() => setShowProductForm(!showProductForm)}
                >Agregar Producto
            </button>
            
            {showProductForm && <Form></Form> }
            
        </div>
    )
}
