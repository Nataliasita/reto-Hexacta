import React from 'react'
import Modal from './modal'
import {useModal} from './useModal'
import Form from './formNewProduct'


export function ButtonModal() {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    return (
        <div>
            <label htmlFor="">¿No encuentras lo que buscas?</label>
            <button type='button' onClick={openModal1}>Sugerir Producto</button>
            <Modal isOpen={isOpenModal1} closeModal1={closeModal1}>
                <h3>Productos Sugeridos</h3>
                <Form/> 
            </Modal> 
        </div>
    )
}

export default ButtonModal