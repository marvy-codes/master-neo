import './App.css';
import headershadow from "./images/headershadow.svg";
import Header from './components/Header';
import Aside from './components/Aside';
import Whatcomponent from './components/Whatcomponent';
import Whycomponent from './components/Whycomponent';
import Happyclient from './components/Happyclient';
import Footer from './components/Footer';
// import Overylay from './components/Overylay';

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
      {/* <Overylay /> */}
    </div>
  );
}

export default App;
