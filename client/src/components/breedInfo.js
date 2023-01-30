import { useState, useEffect } from "react";
import { Link, Routes, Route } from 'react-router-dom'
import invalid_image from '../invalid_image.jpg'

export default function BreedInfo(item) {
    return (
        <div className="container">
            <div className="card">
                {item.item.image ? <img className="card-img" src={item.item.image.url} /> : <img className="card-img" src={invalid_image} />}
                <div className="container">
                    <b data-testid="name">{item.item.name}</b>
                    {item.item.alt_names ? <small id="alt_names"><br />Alternate names: {item.item.alt_names}</small> : ''}
                    {item.item.origin ? <small id="origin"><br />Origin: {item.item.origin}</small> : ''}
                    {item.item.description ? <small id="description"><br />{item.item.description}</small> : ''}
                    <div id="link" className="link">
                        <Link to={`breed/${item.item.id}`} state={item.item}><small>More info {'>>'}</small></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}