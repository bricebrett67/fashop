import Header from './Header';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import './SecondPage.css';

function SecondPage() {

    const { address } = useParams();
    const [result, setResult] = useState();
    useEffect(() => {
        fetch("https://api-adresse.data.gouv.fr/search/?q=" + encodeURI(address) + "&limit=2")
        .then(res => res.json())
        .then(res => setResult(res))
    }, [])
    console.log(result)
    const [map, setMap] = useState("");
    return (
        <div>
            <div className='background'>
                <Header></Header>
                <h1 className='search'>Résultat de votre recherche</h1>
            </div>
            {
                result?.features.map((feature) => {
                    return (

                        <div className='cards'>
                            <p onChange={(e) => setMap()}>{feature.properties.name + ", " + feature.properties.citycode + " " + feature.properties.city}</p>
                            <Link type='button' className='map' to={`/MapPage/${map}`}>Voir sur la carte</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SecondPage