import React from 'react';
import '../css/contactmodal.css'
import overlaytelegram from "../images/overlaytelegram.png";
import overlaytwitter from "../images/overlaytwitter.png";

function Contactmodal() {
        
    return (
        <div>
            <div className="overlay__container">
                <div className='modal__backdrop'>
                    {}
                </div>
                <div className="overlay">
                    <h4 className="contact__header">Contact us via</h4>
                    <div className="images">
                        <a type='button' href="https://t.me/neo_49"><img  className="contact_img" src={overlaytelegram} alt=''/></a>
                        <a type='button' href="https://twitter.com/MasterNeoMods"><img  className="contact_img" src={overlaytwitter} alt=''/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactmodal