import styles from './Shirt.css';
import { BsArrowReturnRight, BsFilter } from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useState } from 'react';

function Shirt(){

    const [shirts, setShirts] = useState([])
    const [shirtsPerPage, setShirtsPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(shirts.length / shirtsPerPage)
    const startIndex = currentPage * shirtsPerPage;
    const endIndex = startIndex + shirtsPerPage;
    const currentShirts = shirts.slice(startIndex, endIndex)

    useEffect(() =>{
        const fetchData = async () => {
            const result = await fetch(`https://localhost:5001/t-shirts/list`, {
                method: 'POST',
                headers:{ 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    pagination:{
                        page: 1,
                        pageSize: 1,
                        ignorePagination: true
                    }, 
                    filters: null
                })
            })
            .then((resp) => resp.json())
            .then((data) => data)

            setShirts(result)
        }
        fetchData()
    }, [])

    const [active, setActive] = useState(false)
    const click = () => setActive(!active)

    function shirtDetails(id){
        window.location.href=`t-shirts/details/${id}`
    }

    const [search, setData] = useState([])

    const handleInputChange = (e) => {
        e.preventDefault();

        const {value} = e.target;

        if(!value) return;

        fetch(`https://localhost:5001/t-shirts/search/${value}?resultsLimit=8`, {
            method: 'POST'
        })
        .then((resp) => resp.json())
        .then((data) => setData(data))
    }

    const resultList = search.map((item) =>{
        return(
            <div onClick={() => shirtDetails(search.id)} class="grid-item" key={item.id}>
                <img src={item.imageUrl}
                alt={item.modelDescription} />
                <h3>{item.modelName}</h3>
                <p>{item.brand}</p>
                <span>${item.price}</span>
            </div>
        )
    })

    return(
        <div class="shirt-body">
            <div class="shirt-container">
                <header>
                    <h3 onClick={click}>Filters <BsFilter /></h3>

                    <div class="search">
                        <input
                        onChange={handleInputChange} 
                        type='search'
                        placeholder="Digite um produto"/>
                    </div>

                    <select>
                        <option disabled> Sort By </option>
                        <option value="high">High price</option>
                        <option value="low">Low price</option>
                    </select>
                </header>

                <article>
                    <aside class={`filter ${active ? "active" : "inactive"}`}>
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
                        <section class="grid">
                            {!search.length ? (
                                <>
                                    {currentShirts.map(shirt =>{
                                        return(
                                            <div onClick={() => shirtDetails(shirt.id)} class="grid-item" key={shirt.id}>
                                                <img src={shirt.imageUrl}
                                                alt="Black Batman T-shirt" />
                                                <h3>{shirt.modelName}</h3>
                                                <p>{shirt.brand}</p>
                                                <span>${shirt.price}</span>
                                            </div>
                                        )
                                    })}
                                </>
                            ): (
                                <>{resultList}</>
                            )}
                        </section>
                        <div class="pag">
                            <div class="seta">
                                <div class="right" onClick={() => setCurrentPage(currentPage - 1)}><AiOutlineLeft /></div>
                            </div>
                            {Array.from(Array(pages), (shirt, index) => {
                                return (<button class="pagi" value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>)
                            })}
                            <div class="seta">
                                <div class="left" onClick={() => setCurrentPage(currentPage + 1)}><AiOutlineRight /></div>
                            </div>
                        </div>
                    </div>
                    
                </article>
                
            </div>
        </div>
    )
}

export default Shirt