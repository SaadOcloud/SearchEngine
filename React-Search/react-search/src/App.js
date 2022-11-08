import { useState,useCallback } from 'react';
import { debounce } from 'lodash';
import React from 'react';
import List from "./Components/List";
import Checkbox from "./Components/Checkbox/Checkbox.component";
import { TextField } from '@mui/material';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [checkboxdata, setcheckboxdata] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const space = new RegExp(" ");

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    
    setIsSubscribed(!isSubscribed);

    setInputText(lowerCase);
    if (
      !space.test(lowerCase) &&
      lowerCase.length > 0 &&
      !checkboxdata.includes(lowerCase)
    ) {
      setcheckboxdata([...checkboxdata, lowerCase]);
    }
  };

  const debouncedChangeHandler = useCallback(debounce(inputHandler, 1000), [
    inputText,
  ]);

  const SelectAllhandling = (e) => {
    if (e.target.checked) {
      setInputText("");
    }
  };

  const clearAllhandling = (e) => {
    if (e.target.checked) {
      setcheckboxdata([]);
      setInputText("");
    } else {
      setcheckboxdata(
        checkboxdata.filter((item) => item !== e.target.value)
      );
    }
  };


  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
      <TextField
          className="search-bar"
          id="outlined-basic"
          onChange={debouncedChangeHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      <div className="checkbox">
        <input id="allfilter" type="checkbox" defaultChecked="checked" onChange={(e)=>{SelectAllhandling(e)}} />
        <label htmlFor="allfilter"> Select All</label>
        <input id="clearfilter" type="checkbox" value={isSubscribed} onChange={(e)=>{clearAllhandling(e)}} />
        <label htmlFor="clearfilter"> Clear All</label>
      </div>
      <div className="checkbox-container">
          <Checkbox checkboxdata={checkboxdata} clearAllhandling={clearAllhandling} />
        </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
