import './App.css';
import headershadow from "./images/headershadow.svg";
import Header from './components/Header';
import Aside from './components/Aside';
import Whatcomponent from './components/Whatcomponent';
import Whycomponent from './components/Whycomponent';
import Happyclient from './components/Happyclient';

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
    </div>
  );
}

export default App;
