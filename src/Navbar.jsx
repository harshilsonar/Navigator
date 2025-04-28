import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navabr bg-dark text-white p-3'>
      <div className='container'>
        <Link to='/'>Home</Link>
        <Link to='/about' style={{ marginLeft: "35%" }}>About</Link>
        <Link to='/product' style={{ marginLeft: "25%" }}>Product</Link>
        <Link to='/login' style={{ marginLeft: "22%" }}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
