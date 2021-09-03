import React,{useState, useEffect} from 'react';
import './App.css';
import User from './Components/User';
import UserSubmission from './Components/UserSubmission';


function App() {
  useEffect(() => {
    document.title="Codeforces Crawler"
  },[])
  return (
    <div className="App">
      <User/>
      <UserSubmission/>
    </div>
  );
}

export default App;
