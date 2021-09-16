import React, { useState, useRef } from "react";
import "../estilos/formNewProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import {useModal} from '../components/useModal'
import ProcessingImg from './ProcessingImg'

export function Form() {
  const [link, setLink] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [title, setTitle] = useState("");
  const [selectCatg, setSelectCatg] = useState("");
  const [errors, setErrors] = useState({
    link: "",
    imageFile: "",
    title: "",
    selectCatg: "",
  });
  const [classDrag, setClassDrag] = useState("drag_image");
  const [btnDisable, setBtnDisable] = useState(true);
  const [image, setImage] = useState(null);
  //const [file, setFile] = useState(null);

  const refInputFile = useRef(null);

  //EXPRESIONES REGULARES PARA VALIDAR EL FORMULARIO
  const expresiones = {
    link: /^(ftp|http|https):\/\/[^ "]+$/, // Comprueba ftp, http, https, requiere www y comprueba cualquier número de caracteres válidos.
    imageFile: /(.jpg|.jpeg|.png|.gif)$/i, // Validar la extension del archivo jpg, jpeg, png, gif
    title: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  };

  //FUNCION PARA VALIDAR LINKS
  const onChangeLink = (e) => {
    if (e.target.value.length > 0) {
      setLink(e.target.value);
      //VALIDAR SI EL LINK ES HTTP, HTTPS
      let validar = expresiones.link.test(e.target.value);
      //VALIDAR SI EL LINK TERMINA EN EXE
      let validarExe = e.target.value.endsWith(".exe");
      if (validar && !validarExe) {
        setErrors({ ...errors, link: "" });
      } else {
        if (validarExe) {
          setErrors({ ...errors, link: "El link contiene un ejecutable .EXE" });
          setBtnDisable(true);
        } else {
          setErrors({ ...errors, link: "El link no es válido" });
          setBtnDisable(true);
        }
      }
    } else {
      setLink("");
      setErrors({ ...errors, link: "" });
    }
    validateButton();
  };

  //FUNCION PARA VALIDAR IMAGEN
  const onChangeImageFile = (e) => {
    setImageFile(e.target.value);
    let validar = expresiones.imageFile.test(e.target.value);
    if (validar) {
      setErrors({ ...errors, imageFile: "" });
    } else {
      setErrors({
        ...errors,
        imageFile:
          "La extensión no es válida, el formato debe ser jpg, jpeg, png y gif",
      });
      setBtnDisable(true);
    }
    const file = e.target.files[0];
    showImage(file);
    validateButton();
  };

  //FUNCION PARA VALIDAR TITLE
  const onChangeTitle = (e) => {
    if (e.target.value.length > 0) {
      setTitle(e.target.value);
      let validar = expresiones.title.test(e.target.value);
      if (validar) {
        setErrors({ ...errors, title: "" });
      } else {
        setLink("");
        setErrors({
          ...errors,
          title: "No esta permitido usar números y caracteres especiales",
        });
        setBtnDisable(true);
      }
    } else {
      setLink("");
      setErrors({ ...errors, link: "" });
    }
    validateButton();
  };

  //FUNCION PARA VALIDAR SELECT
  const onChangeSelect = (e) => {
    setSelectCatg(e.target.value);
    if (e.target.value === "") {
      setErrors({ ...errors, selectCatg: "Debe selecccionar una categoría" });
      setBtnDisable(true);
    } else {
      setErrors({ ...errors, selectCatg: "" });
    }
    validateButton();
  };

  //FUNCION VALIDAR BOTON SUBMIT
  const validateButton = () => {
    if (!link && !imageFile && !title && !selectCatg) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  };

  //FUNCION PARA BOTON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("le diste click");
  };

  //PARA LAS OPCIONES DE LAS CATEGORIAS DEL SELECT
  const valueOptions = [
    "Accesorios",
    "Celulares",
    "Mascotas",
    "Tecnología",
    "Viajes",
    "Deportes",
  ];

  //FUNCION PARA PINTAR IMAGEN
  const selectImage = () => {
    refInputFile.current.click();
  };

  const showImage = (file) => {
    const fileReader = new FileReader();
    console.log(fileReader);
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });
    // setFile(file)
  };

  const addImage = (e) => {
    e.preventDefault();

    refInputFile.current.files = e.dataTransfer.files; //Nos trae los archivos cargados en el input en la posicion 0
    const file = refInputFile.current.files[0];

    showImage(file);
  };

  return (
    <>
      <form action="" className="conteinerForm" onSubmit={handleSubmit}>
        <div className="form">
          <div className="contentForm">
            <label className='lb_form' htmlFor="link">Enlace al sitio:</label>
            <input
              className='int_form'
              type="text"
              name="link"
              value={link}
              onChange={onChangeLink}
              id="link"
              placeholder="Ingrese Link"
              required
            />
            {errors.link.length > 0 && <p className="errores">{errors.link}</p>}
          </div>

          <div className="contentForm">
            <label className='lb_form' htmlFor="imageFile">Imagen:</label>
            <input
              className='int_form'
              ref={refInputFile}
              type="file"
              name="imageFile"
              accept=".jpg,.png,.jpeg"
              value={imageFile}
              onChange={onChangeImageFile}
              onDrop={addImage}
              required
            />
            <button
              className="FontAwesomeBtn"
              id="imageFile"
              style={{ fontSize: "24px", color: "white" }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            {errors.imageFile && <p className="errores">{errors.imageFile}</p>}
          </div>
          <div className="contentForm">
            <div
              className={classDrag}
              id="divImage"
              onDragOver={(e) => {
                e.preventDefault();
                setClassDrag("drag__image active");
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setClassDrag("drag__image");
              }}
              onDrop={addImage}
              onClick={selectImage}
            >
              <img width="200px" height="200px" src={image} alt="" />
              <ProcessingImg image={image} />
            </div>
          </div>

          <div className="contentForm">
            <label  htmlFor="title">Titulo:</label>
            <input
              className="formControl"
              type="text"
              name="title"
              value={title}
              onChange={onChangeTitle}
              id="title"
              placeholder="Ingrese titulo del producto"
              required
            ></input>
            {errors.title.length > 0 && (
              <p className="errores">{errors.title}</p>
            )}
          </div>

          <div className="contentForm">
            <label htmlFor="select">Categoría: </label>
            <select
              name="select"
              id="select"
              value={selectCatg}
              onChange={onChangeSelect}
              required
            >
              <option value="">Selecciona una categoría</option>
              {valueOptions.map((item, key) => {
                return <option value={key}>{item} </option>;
              })}
            </select>
            {errors.selectCatg && (
              <p className="errores">{errors.selectCatg}</p>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button type="reset" className="btn2">
            Reiniciar
          </button>
          
          <button type="submit" className="btn2" disabled={btnDisable}>
            Agregar
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
