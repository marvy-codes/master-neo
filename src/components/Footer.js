import '../css/Footer.css';
import footermlogo from "../images/footermlogo.svg";
import twitterlogo from "../images/twitterlogo.svg";
// import instagramlogo from "../images/instagramlogo.svg";

function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="foot1">
                <h5><span className="MNMA">want to work us?</span></h5>
                <button className="button footerbutton"><a href="https://t.me/neo_49">Hire us</a></button>
                <h4><span className="MNMA">Quick Links</span></h4>
                <ul className="footernav">
                    <li>About Us</li>
                    <li>Why US</li>
                    <li>Clients</li>
                </ul>
                {/* <ul  className="footerul">
                    <li><img src={twitterlogo} alt="twitter" className="twitterlogo" /></li>
                </ul> */}
            </div>
            <div className="foot2">
                <img src={footermlogo} alt="Master Logo" className="footerlogo" />
            </div>
        </div>
    </div>
  );
}

export default Footer;
