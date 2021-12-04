import '../css/Footer.css';
import footermlogo from "../images/footermlogo.svg";

function Footer() {
  return (
    <div>
        <div className="Footer">
            <div>
                <h5><span className="MNMA">want to work us?</span></h5>
                <button className="button">Hire us</button>
                <h5><span className="MNMA">Quick Links</span></h5>
                <ul>
                    <li>About Us</li>
                    <li>Why US</li>
                    <li>Clients</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <img src={footermlogo} alt="Master Logo" className="footerlogo" />
            </div>
        </div>
    </div>
  );
}

export default Footer;
