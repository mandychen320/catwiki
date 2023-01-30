import React from "react";
import logo from "./logo.svg";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/breeds")
      .then((res) => res.json())
      .then((data) => {setData(data)});
  }, []);

  console.log(data);

  const search = (data, inputValue) => {
    if (!data) return;
    let cats = data.filter((breed) => breed.name.toLowerCase().includes(inputValue.toLowerCase()))
    console.log(cats)
  };

  return (
    <div className="background" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data ? data.map((breed) => breed.name) : []}
          sx={{ width: 400 }}
          renderInput={(params) => <TextField 
            {...params} 
            label="Cat Breed" 
            onKeyDown={(event) => event.key === 'Enter' ? search(data, event.target.value) : null}
          />}
        />
        <button className="button">
          Click here for Home!
        </button>
      </header>
    </div>
  );
}

export default App;
