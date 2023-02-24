import styles from './Shirt.css';
import { BsFilter } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import ShirtFetch from '../others/ShirtFetch';
import { usePagination } from 'react-table';

function Shirt(){

    const { tshirt, fetchData } = ShirtFetch(9)

    const { actualPage, setActualPage } = usePagination()

    useEffect(() =>{
        fetchData()
    }, [actualPage])

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
                    <div class="pag-style">
                        <section>
                            {tshirt.map(shirt =>{
                                return(
                                    <div class="grid-item" key={shirt.id}>
                                        <img src={shirt.imageUrl}
                                        alt="Black Batman T-shirt" />
                                        <h3>{shirt.modelName}</h3>
                                        <p>{shirt.brand}</p>
                                        <span>${shirt.price}</span>
                                    </div>
                                )
                            })}
                        </section>
                        <div class="pag">
                            {
                                Array(5).fill('').map((_, index) => {
                                    return <button key={index} onClick={() => setActualPage(index + 1)}>
                                        {index + 1}
                                    </button>
                                })
                            }
                        </div>
                    </div>
                    
                </article>
                
            </div>
        </div>
    )
}

export default Shirt