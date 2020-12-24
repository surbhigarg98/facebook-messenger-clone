
import { useEffect, useState } from 'react';
import './App.css';
import {Button, FormControl,InputLabel,Input, IconButton} from '@material-ui/core'
import {Message} from './Message';
import firebase from 'firebase'
import { db } from './firebase';
import SendIcon from '@material-ui/icons/Send';
import FlipMove from 'react-flip-move';

function App() {
  const[input,setInput] = useState("")
  const[messages,setMessages] = useState([])
  const [username,setUsername] = useState("")
  

  useEffect(()=>{
    setUsername(prompt("Enter your Username"))
  },[])
  
  
  const sendMessage =(e)=>{
    e.preventDefault()
   db.collection("messages").add({
     username:username,
     text:input,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
   })
    setInput('')
  }
  useEffect(()=>{
  db.collection('messages').orderBy("timestamp","desc").onSnapshot((snapshot)=>{
    setMessages(snapshot.docs.map((doc)=>({id:doc.id , message:doc.data()})))
  })
  },[])
 
  return (
    <div className="App">
          <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" className="app__image"/> 
      <h1>Hello {username}</h1>
     <form className="app__form">
     <FormControl className="app__formControl">
     
     <Input className="app__input" placeholder="Enter your message" type="text" value={input} onChange={e=>setInput(e.target.value)}/>
     <IconButton className="app__button" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
       <SendIcon/>
     </IconButton>
          </FormControl>
     </form>
    
     <FlipMove>
     {messages.map(({id , message})=>(
       <Message key={id} user={username} message={message}/>
     ))}
     </FlipMove>

      
          </div>
  );
}

export default App;
