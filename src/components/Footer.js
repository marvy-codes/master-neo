import '../css/Footer.css';
import footermlogo from "../images/footermlogo.svg";
// import twitterlogo from "../images/twitterlogo.svg";
// import instagramlogo from "../images/instagramlogo.svg";

function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="foot1">
                <h5><span className="MNMA">want to work us?</span></h5>
                <button className="button footerbutton"><a href="https://t.me/neo_49">Hire us</a></button>
                <h4><p className="MNMA f-m quick">Quick Links</p></h4>
                <ul className="footernav">
                    <li><a href="#aboutus" className="f-m">About us</a></li>
                    <li><a href="#whyus" className="f-m">why us</a></li>
                    <li><a href="#clients" className="f-m">Clients</a></li>
                </ul>
                {/* <ul  className="footerul">
                    <li><img src={twitterlogo} alt="twitter" className="twitterlogo" /></li>
                </ul> */}
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
