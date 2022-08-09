import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact 
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
 
export default Navbar;