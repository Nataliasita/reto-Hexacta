import React from 'react'
import '../estilos/modal.css'

export const Modal = ({children, isOpen, closeModal1}) => {
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeModal1}>X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal