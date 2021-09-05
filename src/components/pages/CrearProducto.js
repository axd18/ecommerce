import React from "react";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const CrearProducto = () => {
  
  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui);

  const [ formValues, handelInputChange ] = useForm({
    name:"",
    email:"",
    password:"",
    password2:""
  });

  const { name, email, password, password2 } = formValues;


  const handleRegister = e => {
    e.preventDefault();
    if( isFormValid() ) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    } 
  }

  const isFormValid = () => {
    if(name.trim().length === 0) {
      dispatch(setError('El nombre es requerido'))
      return false
    } else if ( !validator.isEmail(email)) {
      dispatch(setError('El email no es válido'))
      return false;
    } else if ( password !== password2 || password.length < 5) {
      dispatch(setError('El password debe contener al menos 6 caracteres'))
      return false;
    } 
    dispatch(removeError());
    return true;
  }

  
  
  return (
    <section className="bg-gray-200 text-gray-600 body-font">
      <form
        onSubmit={handleRegister}
        noValidate
        className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center"
      >
        <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
        {
          msgError &&
         ( <div className="text-white bg-red-400 border-0 py-2 px-8 text-sm rounded ">
            { msgError }
          </div>)
        }
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Crear Producto
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="nombre"
              onChange={handelInputChange}
              value={name}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {/* {errores.name && <p className="text-red-600 text-sm">{errores.name}</p>} */}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              descripción
            </label>
            <input
              onChange={handelInputChange}
              value={email}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {/* {errores.email && <p className="text-red-600 text-sm">{errores.email}</p>} */}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
             Precio
            </label>
            <input
              type="text"
              name="password"
              placeholder="precio"
              onChange={handelInputChange}
              value={password}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {/* {errores.password && <p className="text-red-600 text-sm">{errores.password}</p>} */}
          </div>
         
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Agregar producto
          </button>
          {/* <a className="text-base text-gray-500 mt-3">
                Recuperar ontraseña
              </a> */}
        </div>
      </form>
    </section>
  );
};