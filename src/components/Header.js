import React, { useState } from "react";
import './Header.css';
import Logo from "../images/Logo.svg";

function Header() {
    
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    };
    // const closeMenu = () => {
    //     setNavbarOpen(false)
    // };
  
    return (
      <div>
        <header className="header">

            <nav className="navBar">
                 <button onClick={handleToggle} className="hamburger">{navbarOpen ? "Close" : "Open"}</button>
                    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        ...
                    </ul>
            </nav>
            

            <div className="header_Logo">
                <img src={Logo} alt="Master neo" />
            </div>

            <div>
                <button className="button">
                    Hire us
                </button>
            </div>

        </header>
    </div>
  );
}

export default Header;
