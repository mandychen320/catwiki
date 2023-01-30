import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import invalid_image from '../invalid_image.jpg'

export default function InfoPage() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation()
    const cat = location.state

    return (<div className="background">
        <header className="App-header">
            <div className="image-details">
                <div className="image-column">
                    {cat.image ? <img className="image-details" src={cat.image.url}></img> : <img className="image-details" src={invalid_image}></img>}

                </div>
                <div className="container">
                    <font size='8'>{cat.name}</font>
                    {cat.alt_names ? <font size='4'><br/><strong>Altername names</strong><br/>{cat.alt_names}</font> : ''}
                    {cat.origin ? <font size='4'><br/><strong>Origin</strong><br/>{cat.origin}</font> : ''}
                    {cat.description ? <font size='4'><br/><strong>Description</strong><br/>{cat.description}</font> : ''}
                    {cat.life_span ? <font size='4'><br/><strong>Life span</strong><br/>{cat.life_span} years</font> : ''}
                    {cat.temperament ? <font size='4'><br/><strong>Temperament</strong><br/>{cat.temperament}</font> : ''}
                    {cat.adaptability ? <font size='4'><br/><strong>Adaptability</strong><br/>{cat.adaptability}/5</font> : ''}
                    {cat.affection_level ? <font size='4'><br/><strong>Affection level</strong><br/>{cat.affection_level}/5</font> : ''}
                    {cat.child_friendly ? <font size='4'><br/><strong>Child friendly</strong><br/>{cat.child_friendly}/5</font> : ''}
                    {cat.grooming ? <font size='4'><br/><strong>Grooming</strong><br/>{cat.grooming}/5</font> : ''}
                    {cat.intelligence ? <font size='4'><br/><strong>Intelligence</strong><br/>{cat.intelligence}/5</font> : ''}
                    {cat.health_issues ? <font size='4'><br/><strong>Health issues</strong><br/>{cat.health_issues}/5</font> : ''}
                    {cat.social_needs ? <font size='4'><br/><strong>Social needs</strong><br/>{cat.social_needs}/5</font> : ''}
                    {cat.stranger_friendly ? <font size='4'><br/><strong>Stranger friendly</strong><br/>{cat.stranger_friendly}/5</font> : ''}
                </div>
            </div>
            <div className="container"> 
            </div>
        </header>
    </div>)
}