import styles from './Home.css';
import CarouselHome from '../others/CarouselHome';
import { IoAirplaneOutline } from 'react-icons/io5';
import { BsBoxSeam } from 'react-icons/bs'

function Home(){

    return(
        <div className="home_container">

            <div class="carousel-flex">
                <div class="carousel-pad">
                    <CarouselHome />
                </div>
                
                <div class="aside">

                    <header>
                        <h2>Be yourself</h2>
                        <p>We have the best shirts on the market, featuring prominent brands. Models ranging from basics to trend topic.</p>
                    </header>
                    
                    <div class="card-flex">
                        <div class="card-header">
                            <img 
                            src="https://media.discordapp.net/attachments/1062864750196822026/1062867730451153007/1.png" 
                            alt="batman t-shirt"/>
                            <p>batman shirt<span>$15,00</span></p>
                            <div class="card-footer">
                                <select>
                                    <option disabled>Select a option</option>
                                    <option value="small" selected>XS</option>
                                    <option value="small" selected>S</option>
                                    <option value="medium">M</option>
                                    <option value="large">L</option>
                                    <option value="xlarge">XL</option>
                                </select>
                                <button>buy</button>
                            </div>
                        </div>
                        <div class="card-header">
                            <img 
                            src="https://media.discordapp.net/attachments/1062864750196822026/1062868968282525728/38.png" 
                            alt="louis vuitton t-shirt"/>
                            <p>louis vuitton  shirt<span>$30,00</span></p>
                            <div class="card-footer">
                                <select>
                                    <option disabled>Select a option</option>
                                    <option value="small" selected>S</option>
                                    <option value="medium">M</option>
                                    <option value="large">L</option>
                                    <option value="xlarge">XL</option>
                                </select>
                                <button>buy</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <article class="informations">
                <div class="frete">
                    <p class="icons"><IoAirplaneOutline /></p>
                    <h3>Free shipping</h3>
                    <p class="no-margin">We deliver to all Brazil.</p>
                    <p>Free shipping on purchases over $100.</p>
                </div>
                <div class="prazo">
                    <p class="icons"><BsBoxSeam /></p>
                    <h3>estimated time of arrival</h3>
                    <p>7 to 15 business days after posting.</p>
                </div>
            </article>

            <section class="new-in">
                <div class="card">
                    <img 
                    src="https://media.discordapp.net/attachments/1062864750196822026/1062868949861142558/35.png" 
                    alt="nike t-shirt"/>
                    <p>nike basic t-shirt <span>$20,00</span></p>
                    <div class="end">
                        <select>
                            <option disabled>Select a option</option>
                            <option value="small" selected>S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="xlarge">XL</option>
                        </select>
                        <button>buy</button>
                    </div>
                </div>

                <div class="card">
                    <img 
                    src="https://media.discordapp.net/attachments/1062864750196822026/1062868947654934558/30.png" 
                    alt="rap t-shirt"/>
                    <p>drip t-shirt  <span>$25,00</span></p>
                    <div class="end">
                        <select>
                            <option disabled>Select a option</option>
                            <option value="small" selected>S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="xlarge">XL</option>
                        </select>
                        <button>buy</button>
                    </div>
                </div>

                <div class="card">
                    <img 
                    src="https://media.discordapp.net/attachments/1062864750196822026/1062868737314787428/13.png" 
                    alt="white t-shirt"/>
                    <p>basic t-shirt <span>$10,00</span></p>
                    <div class="end">
                        <select>
                            <option disabled>Select a option</option>
                            <option value="small" selected>S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="xlarge">XL</option>
                        </select>
                        <button>buy</button>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Home