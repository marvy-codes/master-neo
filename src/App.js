import './App.css';
import headershadow from "./images/headershadow.svg";
import Header from './components/Header';
import Aside from './components/Aside';
import Whatcomponent from './components/Whatcomponent';
import Whycomponent from './components/Whycomponent';
import Happyclient from './components/Happyclient';
import Footer from './components/Footer';
import Contactmodal from './components/contactmodal';
import GlobalStateProvider from './store/GlobalStateProvider';

function App() {
    return (
      <GlobalStateProvider>
        <div>
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
          </div>
          <Contactmodal />
        </div>
      </GlobalStateProvider>
    );
}

export default App;
