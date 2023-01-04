import styles from './Footer.module.css';

import Master from '../img/mastercard.png';
import Visa from '../img/visto.png';
import Pix from '../img/pix.png';

import {Link} from 'react-router-dom';
import {BiCopyright} from 'react-icons/bi'

function Footer(){

    const git= "https://github.com/analuizadev";
    const git2= "https://github.com/CarlosE-Dev";

    return(
        <footer className={styles.footer}>
            <ul className={styles.rodape}>
                <div className={styles.help}>
                    <h2>Get Help</h2>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/providers">Providers</Link></li>
                </div>
                <div className={styles.payment}>
                    <h2>Payment</h2>
                    <li>
                        <img src={Master} />
                    </li>
                    <li>
                        <img src={Visa} />
                    </li>
                    <li>
                        <img src={Pix} />
                    </li>
                </div>
            </ul>

            <ul className={styles.direitos}>
                <p><span><BiCopyright /></span>2023 B-skin. Todos os direitos reservados.</p>
            </ul>
            
        </footer>
    )
}

export default Footer