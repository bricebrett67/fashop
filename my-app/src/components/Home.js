import './Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';

function Home() {
  const [address, setAddress] = useState("");
  return (
    <div className="mainpage">
      <Header></Header>
      <p className='paragraph'>Trouvez toutes les marques de prêt-à-porter et de chaussure à deux pas de chez vous</p>
      <input type="text" placeholder="Saisir une adresse" onChange={(e) => setAddress(e.target.value)} className='address' />
      <Link  className='button' to={`/SecondPage/${address}`}>Rechercher</Link>
    </div>
  );
}

export default Home;
