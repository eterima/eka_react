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
          Well this is of course just a small joke from the HR ;)
          </p>

          <p>
          Our Devs surely are doing much better stuff! 
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
          Have a nice day!
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          import DOMPurify from "dompurify";

          const myHTML = `<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="de_DE" data-type="horizontal" data-theme="dark" data-vanity="eterima"><a class="LI-simple-link" href='https://de.linkedin.com/in/eterima?trk=profile-badge'>Eka Terima</a></div>`;

          const mySafeHTML = DOMPurify.sanitize(myHTML);

          const App = () = > <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />;

          
>>>>>>> parent of 644a58d (Update App.js)
=======
>>>>>>> parent of f699eeb (Update App.js)
=======
>>>>>>> parent of f699eeb (Update App.js)

        </a>
      </header>
    </div>
  );
}

export default App;
