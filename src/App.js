import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Become the next epilot unicorn!.
        </p>
        <a
          className="App-link"
          href="https://promise.epilot.cloud"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our promise
        </a>
      </header>
    </div>
  );
}

export default App;
