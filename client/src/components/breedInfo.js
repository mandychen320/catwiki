import { Button} from "@mui/material";
import { Link, Routes, Route } from 'react-router-dom'
import invalid_image from '../invalid_image.jpg'
import InfoPage from "../routes/InfoPage";
export default function BreedInfo(item) {
    return (
        <div className="card">
            {item.item.image ? <img className="card-img" src={item.item.image.url}></img> : <img className="card-img" src={invalid_image}></img>}
            <div className="container">
                <b>{item.item.name}</b>
                <br></br>
                {item.item.alt_names ? <small>Alternate names: {item.item.alt_names}</small> : ''}
                <br></br>
                {item.item.origin ? <small>Origin: {item.item.origin}</small> : ''}
                <br></br>
                {item.item.description ? <small>{item.item.description}</small> : ''}
                <div className="link">
                    <Link to={`breed/${item.item.id}`} state={item.item}><small>More info {'>>'}</small></Link>
                </div>
            </div>
        </div>
    )
}