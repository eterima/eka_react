import logo from './logo.png';
import gif from './Jobs GIF-downsized_large (1).gif';
import './App.css';

import React, { PureComponent, useState } from 'react'
import data from "./data.json"
import { CommentSection } from 'react-comments'
import 'react-comments/dist/index.css'
import "./App.css"


 const App = () => {
   const [comment, setComment] = useState(data)
   const userId = "01a"
   const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
   const name = "xyz"
   const signinUrl = "/signin"
   const signupUrl = "/signup"
   let count = 0
   comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )

   return <div className="commentSection">
 <div className="header">{count} Comments</div>

 <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment}
 setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl}/>
     </div>
 }
 
 export default App

 import React, { PureComponent, useState } from 'react'
 import data from "./data.json"
 import { CommentSection } from 'react-comments'
 import 'react-comments/dist/index.css'
 import "./App.css"
 
 class App extends PureComponent{
   state={ 
     comment : data
   }
 
   handleState=(value)=>{
     this.setState({comment:value})
   }
 
   render() {
     const userId = "01a"
     const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
     const name = "xyz"
     const signinUrl = "/signin"
     const signupUrl = "/signup"
     let count = 0
    this.state.comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )
 
     return <div className="commentSection">
      <div className="header">{count} Comments</div>
     
      <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name:name }} commentsArray={this.state.comment}
      setComment={this.handleState} signinUrl={signinUrl} signupUrl={signupUrl} />
          </div>
 }
 }
 
 export default App
 
 


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

        </a>

        
      </header>
      
    </div>
    
    
  );
}

export default App;
