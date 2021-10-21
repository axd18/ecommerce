import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const dispatch = useDispatch();

  const handlLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="bg-gray-200 py-6 relative">
      <div className="container mx-auto flex px-8 xl:px-0">
        
        <div className="flex flex-grow">
          <p>Logo</p>
        </div>
        <div className="flex lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        
        <div className="lg:flex hidden flex-grow justify-between">
          
          <div>
            <a href="#" className="lg:mr-7">
              Novedades
            </a>
            <a href="#" className="lg:mr-7">
              Hombre
            </a>
            <a href="#" className="lg:mr-7">
              Mujer
            </a>
            <a href="#" className="lg:mr-7">
              Niña/o
            </a>
            <a href="#" className="lg:mr-7">
              Ofertas
            </a>
          </div>
          
          <div className="flex flex-grow">
            <div class=" mx-auto text-gray-600">
              <input
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Buscar"
              />
              <button
                type="submit"
                class=" right-0 top-0 mt-5 mr-4"
              ></button>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        
        </div>
          
      </div>
    </nav>
  );
};
  
export default Navbar;