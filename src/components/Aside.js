import React, {useContext } from "react";
import Context from '../store/context';
import '../css/Aside.css';
import asidelogo from "../images/asidelogo.svg";
import card1 from "../images/card1.svg";
import card2 from "../images/card2.svg";
import card3 from "../images/card3.svg";
import card4 from "../images/card4.svg";


function Aside() {
    const { globalDispatch } = useContext(Context);
    const openModal = () => {
        globalDispatch({ type: "OPENMODAL"})
    }
        
    return (
        <div>
            <aside className="aside">
                <div>
                   <img src={asidelogo} alt="Master neo" className="asidelogo" />
                    <button className="aside__top" onClick={ () => openModal()}>Hire us</button>
                </div>

                <div className="cards">
                    <div className="card">
                        <img src={card1} alt="versatility" className="card1" />
                        <div className="glowDot"></div>
                    </div>
                    <div className="card">
                        <img src={card2} alt="Fully Doxxed Moderation" className="card2" />
                        <div className="glowDot"></div>
                    </div>
                    <div className="card">
                        <img src={card3} alt="Multi App Management" className="card3" />
                        <div className="glowDot"></div>
                    </div>
                    <div className="card">
                        <img src={card4} alt="community Focus" className="card4" />
                        <div className="glowDot"></div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Aside; 
