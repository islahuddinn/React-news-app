import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = ()=> {
 
    return (
    
  <nav className="navbar navbar-expand-lg fixed-top bg-dark" >
    <div className="container-fluid">
  
      <ul className="nav justify-content-center">
      <Link className="navbar-brand text-primary" to="/">NewsMonkey</Link>

  <li className="nav-item">
    <Link className="nav-link active text-info" aria-current="page" to="/">Home</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link text-info" to="/Business">Business</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-info" to="/Entertainment">Entertainment</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-info" to="/General">General</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-info" to="/Health">Health</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-info" to="/Science">Science</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-info" to="/Sports">Sports</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-info" to="/Technology">Technology</Link>
  </li>
 
</ul>
    </div>
    
  </nav>
    )
  
}
export default Navbar