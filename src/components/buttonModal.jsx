import React from 'react'
import Modal from './modal'
import {useModal} from './useModal'
import Form from './formNewProduct'


export function ButtonModal() {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    return (
        <div className="btn_product_sug">
            <label className='label_btn' htmlFor="">¿No encontraste el producto que buscabas?</label>
            <button className='btn_sug'type='button' onClick={openModal1}>Sugerir Producto</button>
            <Modal isOpen={isOpenModal1} closeModal1={closeModal1}>
                
                <Form/> 
            </Modal> 
        </div>
    )
}

export default ButtonModal