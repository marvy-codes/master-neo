import React from 'react';
import '../css/overlay.css';
import overlaytelegram from "./images/overlaytelegram.png";
import overlaytwitter from "./images/overlaytwitter.png";

function Overylay() {
  return (
    <div className="overlay__container">
        <div className="overlay">
            <h4 className="overlay__header">Contact us via</h4>
            <div className="overlay__images">
                <a className="overlay__image" type='button' href="https://t.me/neo_49"><img src={overlaytelegram} alt=''/></a>
                <a className="overlay__image" type='button' href="https://twitter.com/MasterNeoMods"><img src={overlaytwitter} alt=''/></a>
            </div>
        </div>
    </div>
  )
}

export default Overylay;