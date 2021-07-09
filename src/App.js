import logo from './logo.png';
import gif from './Jobs GIF-downsized_large (1).gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>  
          Hello world!
          </p>
          
          <p>
          Welcome to THE BEST React app anyone ever built! ..... NOT. 
          Well this was of course just a monday joke :D 
          </p>

          <p>
          But I mean it is still a React app ;) 
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
          href="https://promise.epilot.cloud/"
          target="_blank"
          rel="noopener noreferrer"
        >

          <p>
          Ready for take-off @ epilot? Check out our promise to all (future) epilots  
          </p>


        </a>
      </header>
    </div>
  );
}

export default App;
