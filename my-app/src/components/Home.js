import './Home.css';
import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';

function Home() {
	const [address, setAddress] = useState('');

	function changeColor() {
		document.body.style.backgroundColor = '#eff0ff';
	}

	return (
		<div className='mainpage'>
			<Header></Header>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<p className='paragraph'>
				Trouvez toutes les marques de prêt-à-porter et de chaussure à deux pas
				de chez vous
			</p>
			<input
				type='text'
				placeholder='Saisir une adresse'
				onChange={(e) => setAddress(e.target.value)}
				className='address'
			/>
			<Link
				className='button'
				onClick={changeColor}
				to={`/SecondPage/${address}`}
			>
				Rechercher
			</Link>
		</div>
	);
}

export default Home;
