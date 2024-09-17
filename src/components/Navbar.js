// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="logo">CrickBidders</div>
//       <ul>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/matches">Matches</Link>
//         <Link to="/contact">Contact Us</Link>
//         <Link to="/signup">Signup</Link>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CrickBidders</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/matches" className="nav-link">Matches</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
        <Link to="/admin-dashboard" className="nav-link">Admin Dashboard</Link>

      </div>
    </nav>
  );
};

export default Navbar;
