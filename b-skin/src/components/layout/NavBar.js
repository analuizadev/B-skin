import {Link} from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { BsBasket3 } from "react-icons/bs";

import { useState } from 'react';

import styles from "./NavBar.module.css";

import Container from './Container';
import Search from '../services/Search';
import Login from '../login/Login';
import Order from '../services/Order';

function NavBar(){

    const [loginOpen, setLogin] = useState(false)

    const [modalOpen, setModalOpen] = useState(false);

    return(
        <>
            <nav className={styles.nav}>
                <Container>
                    <div className={styles.container_nav}>
                        <ul className={styles.navbar_list}>
                            <p className={styles.logo}>B-Skin</p>
                            <div className={styles.menu}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/news">News</Link></li>
                                <li><Link to="/shirt">Shirt</Link></li>
                            </div>
                        </ul>
                        <ul className={styles.services}>
                            <Search className={styles.search}/>
                        </ul>
                        <div className={styles.flex_contact}>
                            <div className={styles.contact}>
                                <li onClick={() => {setLogin(true)}}><BsFillPersonFill /></li>
                                <li><Link to="/shoppage"><BsBasket3 /></Link></li>
                            </div>
                        </div>
                        
                    </div>
                    
                </Container>
            </nav>

            {loginOpen && <Login setOpenLogin={setLogin} />}

            {modalOpen && <Order setOpenModal={setModalOpen} />}

        </>        
    )
}

export default NavBar