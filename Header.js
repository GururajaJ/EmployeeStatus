import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS

const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
        <h1>Employee Management</h1>
      </div>
      <nav className="right-side">
        <Link to="/employee" className="link">Employee</Link>
        <Link to="/post-employee" className="link">Post Employee</Link>
      </nav>
    </header>
  );
};

export default Header;
