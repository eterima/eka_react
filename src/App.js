import logo from './logo.png';
import gif from './Jobs GIF-downsized_large (1).gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>  
          Hello epilots!
          </p>
          
          <p>
          Welcome to THE BEST React app anyone ever built! ... NOT. 
          Well this was of course just a monday joke :D 
          </p>
      
          <p>
          Next time I will release something awesome. Maybe. 
          </p>

          <p>
          Well ok. So that you are maybe less disappointed here a joke for you:
          </p>

          <p>
          3 Database SQL walked into a NoSQL bar. A little while later. 
          They walked out
          </p>
          <p>
          Because they couldn’t find a table!
          </p>

          <p>
          Have a great start into a great week!
          </p>

          <img src={gif} className="Video" alt="gif"/>

        <a
          className="App-link"
          href="https://epilot.slack.com/archives/C01E7K2RXPA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave a comment in fun-and-rockets
        </a>
      </header>
    </div>
  );
}

export default App;
