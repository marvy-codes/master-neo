import '../css/Aside.css';
import asidelogo from "../images/asidelogo.svg";
import twitterlogo from "../images/twitterlogo.svg";
import instagramlogo from "../images/instagramlogo.svg";
import mediumlogo from "../images/mediumlogo.svg";

function Aside() {
        
    return (
        <div>
            <aside className="aside">
                <div>
                   <img src={asidelogo} alt="Master neo" className="asidelogo" />
                    <button className="button asidebutton">Hire us</button>
                    <ul>
                        <li><img src={twitterlogo} alt="twitter" className="twitterlogo" /></li>
                        <li><img src={mediumlogo} alt="medium" className="mediumlogo" /></li>
                        <li><img src={instagramlogo} alt="instagram" className="instagramlogo" /></li>
                    </ul>
                </div>

                <div >
                    <div>box 1</div>
                    <div>box 2</div>
                    <div>box 3</div>
                    <div>bos 4</div>
                </div>
            </aside>
        </div>
    );
}

export default Aside;
