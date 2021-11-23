import './Header.css';
import masterneologo from "../images/MNlogo.svg";

function Header() {
  return (
      <div>
        <header className="header">
            <div>
                <p>hamburgermenu</p>
            </div>
            <div>
                <span className="header__logo">
                    <img src={masterneologo} alt="M" />
                </span>
                <span className="header__text">
                    <h1>MASTER NEO</h1>
                    <p>moderations</p>
                </span>
            </div>
            <div>
                <button>
                    Hire us
                </button>
            </div>
        </header>
    </div>
  );
}

export default Header;
