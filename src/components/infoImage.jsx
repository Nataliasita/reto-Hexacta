import React, { useState} from "react";
import "../estilos/infoImage.css";

export const infoImage = () => {

    const [width, setWidth] = useState(0);
    const [heigth, setHeigth] = useState(0);
    const [arrayPixels, setArrayPixels] = useState([]);
    const [img, setImg] = useState(null);

    //Aqui se debe llamar toda la info desde firebase

    return (
        <div>
            <h2>Data de la Imagen</h2>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>Width:{width}</h4>
                <h4>Heigth:{heigth}</h4>
                <h5>Uint8ClampedArray:{arrayPixels}</h5>
            </div>
        </div>
    )
}
