import React, { useState } from "react";
import './Header.css';
import Logo from "../images/Logo.svg";

function Header() {
    
    const [navbarOpen, setNavbarOpen] = useState(false)
  
    return (
      <div>
        <header className="header">

            <div>
                <p>text</p>
            </div>

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
