import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router";

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
            {
                result?.features.map((feature) => {
                    return (
                        <p>{feature.properties.name + ", " + feature.properties.citycode + " " + feature.properties.city}</p>
                    )
                })
            }
        </div>
    )
}

export default SecondPage