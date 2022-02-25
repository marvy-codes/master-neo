import './App.css';
import headershadow from "./images/headershadow.svg";
// import overlaytelegram from "./images/overlaytelegram.svg";
// import overlaytwitter from "./images/overlaytwitter.svg";
import Header from './components/Header';
import Aside from './components/Aside';
import Whatcomponent from './components/Whatcomponent';
import Whycomponent from './components/Whycomponent';
import Happyclient from './components/Happyclient';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="headershadow">
        <img src={headershadow} alt="" />
      </div>
      <Header />
        <Aside />
            <Whatcomponent />
            <Whycomponent />
        <Happyclient />
      <Footer />
      {/* <div className="overlay__container">
        <div className="overlay">
            <h4 className="overlay__header"></h4>
            <div>
                <a><img src={overlaytelegram} alt=''/></a>
                <a><img src={overlaytwitter} alt=''/></a>
            </div>
        </div>
    </div> */}
    </div>
  );
}

export default App;
