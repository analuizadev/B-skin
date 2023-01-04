import styles from './Footer.module.css';
import Order from '../services/Order';
import Investors from '../services/Investors';

import {BsGithub} from 'react-icons/bs';

function Footer(){

    return(
        <footer className={styles.footer}>
            <ul>
                <div>
                    <h2>Get Help</h2>
                    <li>
                        contato
                    </li>
                    <li>
                        pedidos
                        <Order />
                    </li>
                    <li>
                        fornecedores
                        <Investors />
                    </li>
                </div>
                <div>
                    <h2>Payment</h2>
                    <li>
                        <p>cartao</p>
                    </li>
                </div>
                <div className={styles.social}>
                    <h2>Social</h2>
                    <li>
                        <BsGithub />
                    </li>
                </div>
            </ul>
            
        </footer>
    )
}

export default Footer