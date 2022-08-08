import React from "react";
const Navbar = () => {
    return ( 
            <div className="navbar">
                <header>
                    <div className="header-inner">
                        <h2 className="logo">LO<span>GO</span></h2>
                        <i id="bars" className="fas fa-bars bars"></i>
                        <nav className="nav-menu">
                        <a href="#" className="nav-link">Home</a>
                        <a href="#" className="nav-link">About</a>
                        <a href="#" className="nav-link">Services</a>
                        <a href="#" className="nav-link">Contact</a>
                        </nav>
                    </div>
                </header>
                <nav id="mobileMenu" className="mobile-menu">
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Services</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>
            </div>
     );
}
 
export default Navbar;