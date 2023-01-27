import {Link} from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { BsBasket3 } from "react-icons/bs";

import { useState } from 'react';

import styles from "./NavBar.css";

import Container from './Container';
import Search from '../services/Search';
import Login from '../login/Login';
import Order from '../services/Order';

function NavBar(){

    const [loginOpen, setLogin] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    const handleCLick = event => {
        
        event.currentTarget.classList.toggle('on');
    }

    return(
        <>
            <nav class="nav">
                <Container>
                    <div class="container_nav">
                        <ul class="navbar_list">
                            <div class="flex">
                                <p class="logo">B-Skin</p>
                            </div>

                            <div class="flex-mobile">

                                <div onClick={handleCLick} class="menu-section">
                                    <div class="menu-toggle">
                                        <div class="one"></div>
                                        <div class="two"></div>
                                        <div class="three"></div>
                                    </div>

                                    <div class="menu">
                                        <li class="login"><Link to="/loginMobile">Login</Link></li>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/news">News</Link></li>
                                        <li><Link to="/shirt">Shirt</Link></li>
                                        <li class="bag"><Link to="/bag">Bag</Link></li>
                                    </div>
                                </div> 

                                <div class="flex_contact">
                                    <div class="contact">
                                        <li onClick={() => {setLogin(true)}}><BsFillPersonFill /></li>
                                        <li onClick={() => {setModalOpen(true)}}><BsBasket3 /></li>
                                    </div>
                                </div> 

                            </div>
                                              
                        </ul>

                        <ul class="services">
                            <Search class="search"/>
                        </ul>

                    </div>
                    
                </Container>
            </nav>

            {loginOpen && <Login setOpenLogin={setLogin} />}

            {modalOpen && <Order setOpenModal={setModalOpen} />}

        </>        
    )
}

export default NavBar