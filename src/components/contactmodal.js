import React, { useContext } from 'react';
import Context from '../store/context';
import '../css/contactmodal.css'
import overlaytelegram from "../images/overlaytelegram.png";
import overlaytwitter from "../images/overlaytwitter.png";

function Contactmodal() {
    
    const { globalState,  globalDispatch } = useContext(Context);
    const state = globalState.isModalOpen

    return (
        <div>
            <div className={state ? 'overlay__containershow' : 'overlay__containerhide'}>
                <div className='modal__backdrop' onClick={() => globalDispatch({ type: "CLOSEMODAL"})}>
                    {}
                </div>
                <div className="overlay">
                    <h4 className="contact__header">Contact us via</h4>
                    <div className="images">
                    {/* eslint-disable-next-line */}
                        <a type='button' target="_blank" onClick={() => globalDispatch({ type: "CLOSEMODAL"})} href="https://t.me/neo_49"><img  className="contact_img" src={overlaytelegram} alt=''/></a>
                    {/* eslint-disable-next-line */}
                        <a type='button' target="_blank" onClick={() => globalDispatch({ type: "CLOSEMODAL"})} href="https://twitter.com/MasterNeoMods"><img  className="contact_img" src={overlaytwitter} alt=''/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactmodal