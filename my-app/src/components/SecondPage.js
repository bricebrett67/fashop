import Header from './Header';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import './SecondPage.css';

function SecondPage() {

    const { address } = useParams();
    const [ geoData, setGeoData ] = useState();
    const [result, setResult] = useState();
    useEffect(() => {
        fetch("https://api-adresse.data.gouv.fr/search/?q=" + encodeURI(address) + "&limit=2")
        .then(res => res.json())
        .then(res => {
            setResult(res)
        })
    }, [])
    console.log(result)
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
                            <p>{feature.properties.name + ", " + feature.properties.citycode + " " + feature.properties.city}</p>
                            <Link to={`/MapPage/${feature.properties.y}/${feature.properties.x}`} type='button' className='map'>Voir sur la carte</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SecondPage