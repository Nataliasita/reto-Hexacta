import React, { useState, useRef } from "react";
import "../estilos/formNewProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore/lite';
import { Notificacion } from "./notificacion"

export function Form(props) {
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
  const [message, setMessage] = useState(false);
 
  const refInputFile = useRef(null);

  //PARA AGREGAR NUEVO PRODUCTO A FIREBASE
  const addNewProduct = (selectCatg, link, image, title) => {
    const form={
          categories: selectCatg,
          description: link,
          image: image,
          points: null,
          title: title,
          newImage: null,
          imageWidth: null,
          imageHeight: null,
          imageArray: null,
        }

    const dbCollection = collection(db, "nuevoProducto");
    addDoc(dbCollection,form).then((resp) => {
    })
  }  

  //EXPRESIONES REGULARES PARA VALIDAR EL FORMULARIO
  const expresiones = {
    link: /^(ftp|http|https):\/\/[^ "]+$/, // Comprueba ftp, http, https, requiere www y comprueba cualquier número de caracteres válidos.
    imageFile: /(.jpg|.jpeg|.png|.gif)$/i, // Validar la extension del archivo jpg, jpeg, png, gif
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
        setErrors({ ...errors, link: "", linkClass: "valid_form"});
      } else {
        if (validarExe) {
          setErrors({ ...errors, link: "El link contiene un ejecutable .EXE", linkClass: "error_form" });
          setBtnDisable(true);
        } else {
          setErrors({ ...errors, link: "El link no es válido", linkClass: "error_form" });
          setBtnDisable(true);
        }
      }
    } else {
      setLink("");
      setErrors({ ...errors, link: "", linkClass: "valid_form" });
    }
    validateButton();
  };

  //FUNCION PARA VALIDAR IMAGEN
  const onChangeImageFile = (e) => {
    setImageFile(e.target.value);
    let validar = expresiones.imageFile.test(e.target.value);
    if (validar) {
      setErrors({ ...errors, imageFile: "", imageFileClass:"valid_form"});
    } else {
      setErrors({
        ...errors,
        imageFile:
          "La extensión no es válida, el formato debe ser jpg, jpeg, png y gif",
          imageFileClass:"error_form"
      });
      setBtnDisable(true);
    }
    const file = e.target.files[0];
    showImage(file);
    validateButton();
  };

  //FUNCION PARA VALIDAR TITLE
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value === "") {
      setErrors({ ...errors, title: "El campo 'título' es requerido",titleClass:"error_form" });
      setBtnDisable(true);
    } else {
      setErrors({ ...errors, title: "",titleClass:"valid_form"});
    }
    validateButton();
  };

  //FUNCION PARA VALIDAR SELECT
  const onChangeSelect = (e) => {
    setSelectCatg(e.target.value);
    if (e.target.value === "") {
      setErrors({ ...errors, selectCatg: "Debe selecccionar una categoría", selectCatgClass:"error_form" });
      setBtnDisable(true);
    } else {
      setErrors({ ...errors, selectCatg: "",selectCatgClass:"valid_form" });
    }
    validateButton();
  };

  //FUNCION VALIDAR BOTON SUBMIT
  const validateButton = () => {
    if (!errors) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  };

  //FUNCION PARA BOTON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct(selectCatg, link, image, title);
    reset();
    setMessage(true);
    setTimeout(()=>{
      setMessage(false);
      props.closeModal()
      props.setReload(!props.reload)
    },3000)
  };

  //PARA RESETEAR EL FORM
  const reset=()=>{
    setLink("");
    setImageFile("");
    setTitle("");
    setSelectCatg("");
  }

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
            <label className="lb_form" htmlFor="link">
              Enlace al sitio:
            </label>
            <input
              className= {`int_form ${errors.linkClass}`}
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
            <label className="lb_form" htmlFor="imageFile">
              Imagen:
            </label>
            <input
              className={`int_form ${errors.imageFileClass}`}
              ref={refInputFile}
              type="file"
              name="imageFile"
              accept=".jpg,.png,.jpeg"
              value={imageFile}
              onChange={onChangeImageFile}
              onDrop={addImage}
              required
            />
            {/* <button
              className="FontAwesomeBtn"
              id="imageFile"
              style={{ fontSize: "24px", color: "white" }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button> */}
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
            </div>
          </div>

          <div className="contentForm">
            <label htmlFor="title" className="lb_form">Título:</label>
            <input
              className={`int_form ${errors.titleClass}`}
              type="text"
              name="title"
              value={title}
              onChange={onChangeTitle}
              id="title"
              placeholder="Ingrese título del producto"
              required
            ></input>
            {errors.title.length > 0 && (
              <p className="errores">{errors.title}</p>
            )}
          </div>

          <div className="contentForm selectCatg">
            <label htmlFor="select" className="lb_form">Categoría: </label>
            <select
              className={`int_form ${errors.selectCatgClass}`}
              name="select"
              id="select"
              value={selectCatg}
              onChange={onChangeSelect}
              required
            >
              <option value="">Selecciona una categoría</option>
              {valueOptions.map((item, key) => {
                return <option key={key} value={item}>{item} </option>;
              })}
            </select>
            {errors.selectCatg && (
              <p className="errores">{errors.selectCatg}</p>
            )}
          </div>
        </div>


        <div className="modal-footer">
          <button type="button" className="btn2" onClick={reset}>
            Reiniciar
          </button>

          <button type="submit" className="btn2" disabled={btnDisable}>
            Agregar
          </button>
        </div>
      </form>
      {message && <Notificacion/>}
    </>
  );
}

export default Form;
