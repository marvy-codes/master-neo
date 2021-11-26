import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import '../css/Header.css';
import Logo from "../images/Logo.svg";

function Header() {
    
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    };
    const closeMenu = () => {
        setNavbarOpen(false)
    };
  
    return (
      <div>
        <header className="header">

            <nav className="navBar">
                 <button onClick={handleToggle} className="hamburger">{navbarOpen ? (
                        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                    ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                    )}
                </button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <img src={Logo} alt="Master neo" />
                    <li activeClassName="active-link" onClick={() => closeMenu()} >About us</li>
                    <li activeClassName="active-link" onClick={() => closeMenu()} >Why us</li>
                    <li activeClassName="active-link" onClick={() => closeMenu()} >Clients</li>
                    <li activeClassName="active-link" onClick={() => closeMenu()} >Contact us</li>
                </ul>
            </nav>
            

            <div className="header_logo">
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
