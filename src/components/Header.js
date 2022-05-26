import React, { useState, useContext } from "react";
import Context from '../store/context';
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

    const { globalDispatch } = useContext(Context);
    const openModal = () => {
        globalDispatch({ type: "OPENMODAL"})
    }
  
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
                <ul className={`menuNav menuNavHire ${navbarOpen ? " showMenu" : ""}`}>
                    <img className="navlogo" src={navbarlogo} alt="Master neo" />
                    <li onClick={() => closeMenu()} ><a href="#aboutus">About us</a></li>
                    <li onClick={() => closeMenu()} ><a href="#whyus">why us</a></li>
                    <li onClick={() => closeMenu()} ><a href="#clients">Clients</a></li>
                    <button className="button navbutton" onClick={ () => openModal()}>Hire us</button>
                </ul>
            </nav>
            <div className="header_logo">
                <img src={Logo} alt="Master neo" />
            </div>

            <div>
                <button className="mobile__button" onClick={ () => openModal()}>
                    Hire us
                </button>
            </div>
        </header>

        <header className="header__desktop">

            <div className="header__desktop__item1">
                <img src={Logo} alt="Master neo" />
            </div>

            <div className="header__desktop__item2">
                <ul className="menuNav__desktop1">
                    <li><a href="#aboutus">About us</a></li>
                    <li><a href="#whyus">why us</a></li>
                    <li><a href="#clients">Clients</a></li>
                </ul>
            </div>

            <button className="header__desktop__item3" onClick={ () => openModal()}>
                Hire us
            </button>

        </header>
    </div>
  );
}

export default Header;
