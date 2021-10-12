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
      <div className="container mx-auto flex">
        <div className="flex flex-grow">
          <p>Logo</p>
        </div>
        <div className="flex flex-grow justify-between"> 
            <div>
              <a href="#" className="lg:mr-7">Novedades</a>
              <a href="#" className="lg:mr-7">Hombre</a>
              <a href="#" className="lg:mr-7">Mujer</a>
              <a href="#" className="lg:mr-7">Niña/o</a>
              <a href="#" className="lg:mr-7">Ofertas</a>
            </div>
            <div>
              <a href="#" className="lg:mr-4">buscar</a>
              <a href="#">carrito</a>
            </div>
        </div>
      </div>
    </nav>
  );
};
  
export default Navbar;