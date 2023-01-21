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
                
                    <ul className={styles.navbar_list}>
                        <p className={styles.logo}>B-Skin</p>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/shirt">Shirt</Link></li>
                    </ul>
                    <ul className={styles.services}>
                        <Search className={styles.search}/>
                        <div className={styles.contact}>
                            <li onClick={() => {setLogin(true)}}><BsFillPersonFill /></li>
                            <li onClick={() => {setModalOpen(true)}}><BsBasket3 /></li>
                        </div>
                    </ul>
                </Container>
            </nav>

            {loginOpen && <Login setOpenLogin={setLogin} />}

            {modalOpen && <Order setOpenModal={setModalOpen} />}

        </>        
    )
}

export default NavBar