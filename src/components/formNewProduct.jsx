import React from 'react'

function Form() {

  return (
    <>
      <form action="" className="conteinerForm">
        <div class="modal">
          <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                  <p></p>
                  <button type="button" class="close" >
                    <img src="./assets/image/cerrar2.png" width="50px" height="50px" />
                  </button>
                </div>
                <div class= "container-body">
                  <div className="contentLink">
                    <label htmlFor="">Enlace al sitio:</label>
                    <input className="formControl" type="text" name="" id="" placeholder="Ingrese Link" />
                    {/* <span><img src= "https://png.pngtree.com/png-vector/20210315/ourmid/pngtree-green-check-mark-icon-flat-style-vector-png-image_3057019.jpg"/></span> */}
                  </div>
                  <div className="contentImage">
                    <label htmlFor="">Imagen:</label>
                    <input className="formControl" type="file"/>
                    <button> 
                      {/* <img></img> */}
                    </button>
                  </div>
                  <div className="contentTitle">
                    <label htmlFor="">Titulo</label>
                    <input className="formControl" type="text" placeholder="Ingrese titulo del producto"></input>
                  </div>
                  <div className="contentSelect">
                    <select name="" id=""></select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="reset" class=" btn2"> Limpiar </button>
                  <button type="submit" class="btn2"> Agregar </button>
                </div>
            </div>
          </div>
        </div>
        </form>
      </>
    )
}

export default Form
