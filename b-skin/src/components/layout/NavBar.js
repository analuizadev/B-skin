import {Link} from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { BsBasket3 } from "react-icons/bs";

import styles from "./NavBar.module.css";

import Container from './Container';
import Search from '../services/Search';

function NavBar(){

    return(
        <nav className={styles.nav}>
            <Container>
               
                <ul className={styles.navbar_list}>
                    <p className={styles.logo}>B-Skin</p>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/shirt">Shirt</Link></li>
                </ul>
                <ul className={styles.services}>
                    <Search className={styles.search}/>
                    <div className={styles.contact}>
                        <li><Link to="/log"><BsFillPersonFill /></Link></li>
                        <li><Link to="/shoppage"><BsBasket3 /></Link></li>
                    </div>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar