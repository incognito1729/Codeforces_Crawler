import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import User from "./Components/User";
import UserSubmission from "./Components/UserSubmission";

function App() {
  useEffect(() => {
    document.title = "Codeforces Crawler";
  }, []);
  return (
    <Card>
      <div className="App">
        <User />
        <UserSubmission />
      </div>
    </Card>
  );
}

export default App;
