import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import '../css/Header.css';
import Logo from "../images/Logo.svg";
import navbarlogo from "../images/navbarlogo.svg";

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
                 <button onClick={handleToggle}>{navbarOpen ? (
                        <MdClose style={{ color:"#FCFCFC", width: "40px", height: "40px" }} />
                    ) : (
                        <FiMenu style={{ color: "#FCFCFC", width: "40px", height: "40px" }} />
                    )}
                </button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <img className="navlogo" src={navbarlogo} alt="Master neo" />
                    <li onClick={() => closeMenu()} >About us</li>
                    <li onClick={() => closeMenu()} >Why us</li>
                    <li onClick={() => closeMenu()} >Clients</li>
                    <li onClick={() => closeMenu()} >Contact us</li>
                    <button className="button navbutton" onClick={() => closeMenu()}>Hire us </button>
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
