import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router";

function SecondPage() {

    const { address } = useParams();
    const [result, setResult] = useState();
    useEffect(() => {
        fetch("https://api-adresse.data.gouv.fr/search/?q=" + encodeURI(address))
            .then(res => res.json())
            .then(res => setResult(res))
    }, [])
    console.log(address)

    result?.features.map((feature) => {
        return (
            <p>{feature.properties.context} {feature.properties.postcode} {feature.properties.city}</p>

        )
    });
}

    export default SecondPage