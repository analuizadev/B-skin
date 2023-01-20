import styles from './Footer.module.css';

import Master from '../img/mastercard.png';
import Visa from '../img/visto.png';
import Pix from '../img/pix.png';

import {Link} from 'react-router-dom';
import {BiCopyright} from 'react-icons/bi';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

function Footer(){

    const git= "https://github.com/analuizadev";
    const git2= "https://github.com/CarlosE-Dev";

    const linkAna = "https://www.linkedin.com/in/ana-luiza-de-castro-6580081b7";
    const linkCarlos = "https://www.linkedin.com/in/carlose-dev"

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
                <div className={styles.social}>
                    <h2>Team</h2>
                    <div className={styles.medias}>
                        <div className={styles.ana}>
                            <h3>Ana Luiza</h3>
                            <li>
                                <a href={git} target="_blank"> <BsGithub /> </a>
                            </li>
                            <li>
                                <a href={linkAna} target="_blank"> <BsLinkedin /> </a>
                            </li>
                        </div>
                        <div className={styles.carlos}>
                            <h3>Carlos Eduardo</h3>
                            <li>
                                <a href={git2} target="_blank"> <BsGithub /> </a>
                            </li>
                            <li>
                                <a href={linkCarlos} target="_blank"> <BsLinkedin /> </a>
                            </li>
                        </div>
                    </div>
                    
                </div>
            </ul>

            <ul className={styles.direitos}>
                <p><span><BiCopyright /></span>2023 B-skin. All Rights Reserved.</p>
            </ul>
            
        </footer>
    )
}

export default Footer