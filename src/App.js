import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue} from "firebase/database";
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyC3J5wclfqKRilIiv0kvw3m_zFh_JJ6KsE",
  authDomain: "stack-93c1e.firebaseapp.com",
  projectId: "stack-93c1e",
  storageBucket: "stack-93c1e.appspot.com",
  messagingSenderId: "121800421124",
  appId: "1:121800421124:web:b6fa01f0c928ace9022a51",
  measurementId: "G-JFRH425RX3",
  databaseURL: "https://stack-93c1e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function App() {
  //const QuestionId = "QNo1"
const [ReadData, setreadData] = useState({})
const [BloB, SetBlob] = useState("")
const [UName, SetUName] = useState("")

const callM=(eve)=>{
  SetBlob(eve.target.value)
}
const callUName=(eve)=>{
  SetUName(eve.target.value)
}

function writeUserData() {
 
    const db = getDatabase();
    set(ref(db, "users/"+BloB), {
  
      BLob : BloB,
      
    });
    
  }
useEffect(()=>{
  const db = getDatabase();
const starCountRef = ref(db, "users/");
onValue(starCountRef, (snapshot) => {
   console.log(snapshot.val())
  setreadData(snapshot.val())
  
});
},[])


 
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand"> Kreditbee <b>Blog</b></div>
    
  </div>
</nav>
    
  {Object.keys(ReadData).map(item=>(
            
            <div class="card">
            <div class="card-body">
              <h6 class="card-title">  {item}</h6>
          
            </div>
          </div>
        // <table>
        //   <tr>
        //     <th>{item.username}</th>
        //     <br/>
        //     <th>{item.email}</th>
        //     <th>{item.username === "yogi"? item.email : null}</th>
        //   </tr>
        // </table>
  ))}
<div class="sticky-bottom">
<div class="d-flex">
 
  <div class="p-2 flex-grow-1">
  <div className="form-floating mb-3 mt-3 card">
      <input type="text" className="form-control" id="floatingInput" onChange={callM}/>
      <label for="floatingInput">Write your Blob/ Thoughts/ Message here</label>
      </div>
  </div>
  
  <div class="p-2 mt-4 PostButton">
  <button className="btn btn-outline-success" type="submit" onClick={writeUserData}>Post</button>
  </div>
  </div>
  </div>
    
      {/* <button onClick={()=>{writeUserData(1,"naga","naga@gmail.com")}}>click me to add data</button> */}
    </div>
  );
}
export default App;
