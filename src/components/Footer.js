import React, { useContext } from "react";
import Context from '../store/context';
import '../css/Footer.css';
import footermlogo from "../images/footermlogo.svg";

function Footer() {

    const { globalDispatch } = useContext(Context);
    const openModal = () => {
        globalDispatch({ type: "OPENMODAL"})
    }

  return (
    <div>
        <div className="footer">
            <div className="foot1">
                <h5><span className="MNMA">Want us to work for you?</span></h5>
                <button className="footerbutton" onClick={ () => openModal()}>Hire us</button>
                <h4><p className="MNMA f-l quick">Quick Links</p></h4>
                <ul className="footernav">
                    <li><a href="#aboutus" className="f-m">About us</a></li>
                    <li><a href="#whyus" className="f-m">why us</a></li>
                    <li><a href="#clients" className="f-m">Clients</a></li>
                </ul>
            </div>
            <div className="foot2">
                <img src={footermlogo} alt="Master Logo" className="footerlogo" />
            </div>
        </div>
        <div className="copyright">            
            <span className="f-sm">2022 © Master-Neo Moderation Agency...</span>
        </div>
    </div>
  );
}

export default Footer;
