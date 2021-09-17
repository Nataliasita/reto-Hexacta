import React from "react";
import "../estilos/notificacion.css";

export function Notificacion() {
  
  return (
    <div className="conteiner">
      <div id="notificacion" className="contenNotificacion">
        <div className="message">Su sugerencia fue enviada con éxito.</div>
      </div>
    </div>
  );
}

export default Notificacion;
