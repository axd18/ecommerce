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
      
        <nav className="bg-gray-200 py-6 relative">
          <div className="container mx-auto">
            <p>Logo</p>
          </div>
        </nav>
      
    );
  };
  
export default Navbar;