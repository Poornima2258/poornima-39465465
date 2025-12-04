import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(){
  const activeClass = ({isActive}) => isActive ? 'nav-link active' : 'nav-link';
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">College Portal</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink to="/" className={activeClass}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className={activeClass}>About</NavLink></li>
            <li className="nav-item"><NavLink to="/departments" className={activeClass}>Departments</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className={activeClass}>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
