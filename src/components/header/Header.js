import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <>
            <Router>
                <Link to="/crear-cuenta">
                    Desde Header
                </Link>
            </Router>
        </>
     );
}
 
export default Header;