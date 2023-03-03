import {Link} from 'react-router-dom';
import { BsBasket3 } from "react-icons/bs";

import { useState } from 'react';

import styles from "./NavBar.css";

import Container from './Container';
import Search from '../services/Search';

function NavBar(){

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
                                <Link to="/">
                                    <img alt="B-SKIN logo" src="https://cdn.discordapp.com/attachments/1015469538738970636/1080567173967261796/b-skinLogo.png" />
                                </Link>
                            </div>

                            <div class="flex-mobile">

                                <div onClick={handleCLick} class="menu-section">
                                    <div class="menu-toggle">
                                        <div class="one"></div>
                                        <div class="two"></div>
                                        <div class="three"></div>
                                    </div>

                                    <div class="menu">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shirt">Shirt</Link></li>
                                        <li><Link to="/providers">Providers</Link></li>
                                        <li class="bagMobile"><Link to="/bag">Bag</Link></li>
                                    </div>
                                </div> 

                                <div class="flex_contact">
                                    <div class="bag-order">
                                        <li><Link to="/bag"><BsBasket3 /></Link></li>
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

        </>        
    )
}

export default NavBar