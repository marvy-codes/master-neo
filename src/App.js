import Header from './components/Header';
import headershadow from "./images/headershadow.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="headershadow">
        <img src={headershadow} alt="" />
      </div>
      <Header />
    </div>
  );
}

export default App;
