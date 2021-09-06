import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';


const Navbar = () => {
    
  const [navbarOpen, setNavbarOpen] = useState(false);
  const dispatch = useDispatch();

  const handlLogout = () => {
    dispatch(startLogout());
  }
  
    return (
      <header>
        <nav className="md:bg-transparent bg-white absolute w-full h-14 items-center justify-center px-2 md:bg-opacity-0 z-10">
          <div className="container md:bg-transparent bg-white px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              
                <a className="inline-block mr-4  content-start whitespace-no-wrap object-contain w-20 md:w-36 cursor-pointer">
                  <p>Logo</p>
                </a>
              
              <button
                className="text-gray-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded   block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto font-semibold">
                <li className="nav-item pr-10">
                  
                    <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">
                      LinkUno
                    </a>
                  
                </li>
                <li className="nav-item pr-10">
                  
                    <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">
                      LinkDos
                    </a>
                  
                </li>
                <li className="nav-item pr-10">
                  
                    <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">
                      LinkTres
                    </a>
                  
                </li>
                {/* <li className="nav-item pr-10">
                          <Link href="/asistencia">
                              <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Asistencia</a>
                          </Link>
                      </li> */}
                <li className="nav-item">
                  
                    <button 
                      className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer pr-8"
                      onClick={ handlLogout }
                      >
                      Logout
                    </button>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
export default Navbar;