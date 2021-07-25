import React from 'react';

const crearCuenta = () => {
    return (
      
        <section className="bg-gray-200 text-gray-600 body-font">
          <form
            //   onSubmit={handleSubmit}
            noValidate
            className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center"
          >
            <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Crear Cuenta
              </h2>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Nombre
                </label>
                <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {/* {errores.name && <p className="text-red-600 text-sm">{errores.name}</p>} */}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {/* {errores.email && <p className="text-red-600 text-sm">{errores.email}</p>} */}
              </div>
              <div className="relative mb-4">
                <label
                  htmlfor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {/* {errores.password && <p className="text-red-600 text-sm">{errores.password}</p>} */}
              </div>
              {/* { error && <p className="text-red-600 text-sm">{error}</p> } */}
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Crear Cuenta
              </button>
              {/* <a className="text-base text-gray-500 mt-3">
                Recuperar ontraseña
              </a> */}
            </div>
          </form>
        </section>

    );
  };
  
  export default crearCuenta;