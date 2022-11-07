import { React, useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import Checkbox from "./Components/Checkbox/Checkbox";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [checkboxdata, setcheckboxdata] = useState([]);
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase)
    setcheckboxdata([...checkboxdata, lowerCase]);
    
  };

  const clickHandler = (e) => {
    if (e.target.checked) {

    }
}

useEffect(() => {
    return () => {
      
    }
    
}, [inputText])


  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          className="search-bar"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      <div className="checkbox">
        <Checkbox key={checkboxdata} checkboxdata={checkboxdata} />
        <input type="checkbox" defaultChecked="checked" onClick={clickHandler} />
        <label for="filter"> Select All</label>
        <input type="checkbox" />
        <label for="filter"> Clear All</label>
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
