import React, { Component } from 'react';
import logo from './logo.png';
import gif from './Jobs GIF-downsized_large (1).gif';
import './App.css';
import CommentBox from './CommentBox';
import Comments from './Comments';


function Myapp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>  
          Hello world, TGIF!
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

        </a>

        
      </header>
      
    </div>
    
    
  );
}
;

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddComment = this.handleAddComment.bind(this);

    this.state = {
      comments: []
    }
  }
  
  componentDidMount() {
    /*global Ably*/
    const channel = Ably.channels.get('comments');
  
    channel.attach();
      channel.once('attached', () => {
        channel.history((err, page) => {
          // create a new array with comments only in an reversed order (i.e old to new)
          const comments = Array.from(page.items, item => item.data)
  
          this.setState({ comments });
  
          channel.subscribe((msg) => {
            const commentObject = msg.data;
            this.handleAddComment(commentObject);
          })
        });
      });
  }
  

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat(comment)
      };
    });
  }
  
  render()
  
   {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <CommentBox />
              <Comments comments={this.state.comments} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

<CommentBox handleAddComment={this.handleAddComment} />

export default App;
