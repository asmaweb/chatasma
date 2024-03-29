// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import * as rtdb from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBidA1tpxFWigcAsKkM8ebaCfVjYGkq9nI",
    authDomain: "inclassedit.firebaseapp.com",
    databaseURL: "https://inclassedit-default-rtdb.firebaseio.com",
    projectId: "inclassedit",
    storageBucket: "inclassedit.appspot.com",
    messagingSenderId: "476612721396",
    appId: "1:476612721396:web:06717d3afdd2aaa9fefca1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

let db = rtdb.getDatabase(app);
let titleRef = rtdb.ref(db, "/");
let chatsRef = rtdb.child(titleRef,'chats');

let inputMessage = document.getElementById('inputMessage')
let submitChat = document.getElementById('button')
let deleteButton = document.getElementById('clearChats')
let listOfChats = document.getElementById('listmsg')
let username = document.getElementById('username')




//Get all chats and update window
rtdb.onValue(chatsRef, ss=>{
 let allChats = ss.val();
  listOfChats.innerHTML = '';
  //Loop through chats and append them
  for (const chat in allChats){
    let displayedMessage = document.createElement('li');
    listOfChats.appendChild(displayedMessage)
    displayedMessage.innerText = allChats[chat]
  }
});

//rtdb.set(peopleRef, 'tacoo');

//rtdb.update(peopleRef,newGuy);






//Functions

const sendChat = () => {
  let sender = username.value;
  //let fullMessage = {inputMessage.value}
  rtdb.push(chatsRef, inputMessage.value );
  //Then clear the box
  inputMessage.value = '';
}

const deleteChat = () =>{
  rtdb.set(chatsRef, '')
 
}

submitChat.addEventListener("click", sendChat);
deleteButton.addEventListener("click", deleteChat);
