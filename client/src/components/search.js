import { useEffect, useState } from "react";

import logo from "../logo.svg";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BreedInfo from './breedInfo'

export default function Search() {
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch(`/api/breeds`)
          .then((res) => res.json())
          .then((data) => setData(data));
    }, []);

    console.log(data)

    const handleChange = (input, data) => {
        if (!data) return;
        let cats = input === '' ? [] : data.filter((breed) => breed.name.toLowerCase().includes(input.toLowerCase()));
        console.log(cats);
        setResult(cats);
    }

    if (data === null) {
        return (<div>Loading...</div>)
    }

    let keys = []

    return (
        <div className="background" >
            <header className="App-header">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={data ? data.map((breed) => breed.name) : []}
                    sx={{ width: 400 }}
                    renderInput={(params) => 
                    <TextField 
                        {...params} 
                        label="Cat Breed" 
                        onChange={(event) => handleChange(event.target.value, data)}
                        onKeyDown={(event) => event.key === 'Enter' ? handleChange(event.target.value, data) : null}
                    />}
                />
                {Object.entries(result).map(([index, item]) => 
                    (<BreedInfo key={index} item={item} />)
                )}
            </header>
        </div>);
}