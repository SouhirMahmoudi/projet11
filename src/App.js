import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card titre="Hello World" />
        <Card titre="Openclassrooms" />
      </header>
    </div>
  );
}

export default App;
