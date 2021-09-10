import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';



const cardproducto = () => {
    return ( 

        <Router>

        <Link to="/">

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
    <img src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt=""></img>
    <div className="p-5">
      <h1 className="text-2xl font-bold">El poder de la lampara</h1>
      <p className="mt-2 text-lg font-semibold text-gray-600">by John Smith</p>
      <p className="mt-1 text-gray-500 font-">Lorem ipsum carrots, enhanced undergraduate developer, 
        but they do occaecat time and vitality, Lorem ipsum carrots, 
        enhanced undergraduate developer, but they do occaecat time 
        and vitality</p>
    </div>
  </div>
</div>

</Link>
</Router>


     );
}
 
export default cardproducto;