import { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BreedInfo from '../components/breedInfo'

export default function Search() {
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch(`/api/breeds`)
          .then((res) => res.json())
          .then((data) => setData(data));
        fetch(`/api/images`)
          .then((res) => res.json())
          .then((data) => setRandom(data));
    }, []);

    // console.log(data);
    // console.log(random);

    const handleChange = (input, data) => {
        if (!data) return;
        let cats = input === '' ? [] : data.filter((breed) => breed.name.toLowerCase().includes(input.toLowerCase()));
        console.log(cats);
        setResult(cats);
    }

    if (data === null) {
        return (<div>Loading...</div>)
    }

    return (
        <div className="background" >
            <header className="App-header">
                <div className="container">
                <font size='14'>Find a cat breed that you like!</font>
                <br/>
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
                        data-testid='search'
                    />}
                />
                </div>
                {Object.entries(result).map(([index, item]) => 
                    <BreedInfo key={index} item={item} />
                )}
                <div className="random-images">
                    { random ? Object.entries(random).map(([index, item]) => 
                        <img key={index} className="random-image" src={item.url} />
                    ) : ''}
                </div>
            </header>
        </div>);
}