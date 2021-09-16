import React from 'react'
import '../estilos/modal.css'

export const Modal = ({children, isOpen, closeModal1}) => {
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-container">
                 <h3 className='title_sug'>Productos Sugeridos</h3>
                <button className="modal-close" onClick={closeModal1}></button>
                {children}
            </div>
        </article>
    )
}

export default Modal