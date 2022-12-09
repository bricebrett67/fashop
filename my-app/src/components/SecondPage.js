import Header from './Header';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router";
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
    return (
        <div>
            <Header></Header>
            <h1 className='search'>Résultat de votre recherche</h1>
            {
                result?.features.map((feature) => {
                    return (

                        <div>
                            <p>{feature.properties.name + ", " + feature.properties.citycode + " " + feature.properties.city}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SecondPage