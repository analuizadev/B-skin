import styles from './Home.css';
import CarouselHome from '../others/CarouselHome';
import { IoAirplaneOutline } from 'react-icons/io5';
import { BsBoxSeam } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import CardHome from '../others/CardHome';

function Home(){

    const [shirts, setShirts] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const result = await fetch(`https://localhost:5001/t-shirts/list`, {
                method: 'POST',
                headers:{ 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    pagination:{
                        page: 9,
                        pageSize: 3,
                        ignorePagination: false
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

    function shirtDetails(id){
        window.location.href=`t-shirts/details/${id}`
    }

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
                        <CardHome />
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
                {shirts.map(shirt =>{
                    return(
                    <div class="card">
                        <img 
                        src={shirt.imageUrl} 
                        alt={shirt.modelDescription}/>
                        <p>{shirt.modelName}<span>${shirt.price}</span></p>
                        <div class="end">
                            <select>
                                <option disabled>Select a option</option>
                                <option value="small" selected>S</option>
                                <option value="medium">M</option>
                                <option value="large">L</option>
                                <option value="xlarge">XL</option>
                            </select>
                            <button onClick={() => shirtDetails(shirt.id)}>buy</button>
                        </div>
                    </div>
                    )
                })}
            </section>
            
        </div>
    )
}

export default Home