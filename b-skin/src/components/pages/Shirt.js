import styles from './Shirt.css';
import { BsFilter } from 'react-icons/bs';

function Shirt(){

    return(
        <div class="shirt-body">
            <div class="shirt-container">
                <header>
                    <h3>Filters <BsFilter /></h3>
                    <select>
                        <option disabled> Sort By </option>
                        <option value="high">High price</option>
                        <option value="low">Low price</option>
                    </select>
                </header>

                <article>
                    <aside>
                        <ul>
                            <li>
                                <header>
                                    <h3>Brand</h3>
                                </header>
                                <div class="nav-filter">
                                    <label for="adidas">
                                     <input id="adidas" type="checkbox"/> Adidas
                                    </label>

                                    <label for="nike">
                                     <input id="nike" type="checkbox"/> Nike
                                    </label>

                                    <label for="gucci">
                                     <input id="gucci" type="checkbox"/> Gucci
                                    </label>

                                    <label for="lv">
                                     <input id="lv" type="checkbox"/> Louis Vuitton
                                    </label>

                                    <label for="renner">
                                     <input id="renner" type="checkbox"/> Renner
                                    </label>
                                    
                                    <label for="ca">
                                     <input id="ca" type="checkbox"/> C&A
                                    </label>
                                </div>
                            </li>
                            <li>
                                <header>
                                    <h3>Size</h3>
                                </header>
                                <div class="nav-filter">
                                    <label for="xsmall">
                                     <input id="xsmall" type="checkbox"/> XSmall
                                    </label>

                                    <label for="small">
                                     <input id="small" type="checkbox"/> Small
                                    </label>

                                    <label for="medium">
                                     <input id="medium" type="checkbox"/> Medium
                                    </label>

                                    <label for="large">
                                     <input id="large" type="checkbox"/> Large
                                    </label>

                                    <label for="xlarge">
                                     <input id="xlarge" type="checkbox"/> XLarge
                                    </label>
                                </div>
                            </li>
                            <li>
                                <header>
                                    <h3>Shop by price</h3>
                                </header>
                                <div class="nav-filter">
                                    <label for="0-25">
                                     <input id="0-25" type="checkbox"/> $0-$25
                                    </label>

                                    <label for="25-50">
                                     <input id="25-50" type="checkbox"/> $25-$50
                                    </label>
                                    
                                    <label for="50-100">
                                     <input id="50-100" type="checkbox"/> $50-$100
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </aside>
                    <section>
                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867730451153007/1.png"
                            alt="Black Batman T-shirt" />
                            <h3>Batman T-shirt</h3>
                            <p>Renner</p>
                            <span>$10</span>
                        </div>

                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867732229521498/6.png"
                            alt="Blue active shirt" />
                            <h3>Blue active shirt</h3>
                            <p>C&A</p>
                            <span>$15</span>
                        </div>

                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867730778312725/2.png?"
                            alt="Blue spider-man t-shirt" />
                            <h3>Blue spider-man t-shirt</h3>
                            <p>Renner</p>
                            <span>$10</span>
                        </div>

                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867731130613850/3.png"
                            alt="Kids sponge bob shirt" />
                            <h3>Kids sponge bob shirt</h3>
                            <p>Renner</p>
                            <span>$12</span>
                        </div>

                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867731474563172/4.png"
                            alt="Sponge bob lilac shirt" />
                            <h3>Sponge bob lilac shirt</h3>
                            <p>Renner</p>
                            <span>$10</span>
                        </div>

                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867731864637500/5.png"
                            alt="Looney Tunes t-shirt" />
                            <h3>Looney Tunes t-shirt</h3>
                            <p>Renner</p>
                            <span>$12</span>
                        </div>

                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867732636385430/7.png"
                            alt="Black basic tank" />
                            <h3>Black basic tank</h3>
                            <p>C&A</p>
                            <span>$10</span>
                        </div>

                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867733039042561/8.png"
                            alt="White basic shirt" />
                            <h3>White basic shirt</h3>
                            <p>C&A</p>
                            <span>$10</span>
                        </div>

                        <div class="grid-item">
                            <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867733324234822/9.png"
                            alt="Red basic shirt" />
                            <h3>Red basic shirt</h3>
                            <p>C&A</p>
                            <span>$10</span>
                        </div>
                    </section>
                </article>
                
            </div>
        </div>
    )
}

export default Shirt