import './Footer.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';

function Footer() {
    return (
        <div>
            <div className='footer'>
                <p className='titlefooter'>P A G E S M O D E</p>
                    <img className='facebook' src={facebook} alt="facebook"></img>
                    <img className='instagram' src={instagram} alt="instagram"></img>
            </div>
            <div className='secondFooter'>
                <li>VOUS ÊTES UNE MARQUE ?</li>
                <li>VOUS ÊTES UNE BOUTIQUE ?</li>
                <li>PLAN DU SITE</li>
            </div>
        </div>
    );
}

export default Footer