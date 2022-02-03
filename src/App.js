import React, {useState} from 'react';
import './App.css';
import {localData} from "./data/data"
function App() {
  const [data, setData] = useState(localData);
  console.log(data)
  return (
    <div className="App">
      Hello redux      
    </div>
  );
}

export default App;
