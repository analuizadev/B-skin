import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './ShirtDetails.css';

function ShirtDetails(){

    const [shirtdet, setShirtdet] = useState([])
    
    const param = useParams()

    useEffect(() =>{
        fetch(`https://localhost:5001/t-shirts/details/${param.id}`, {
            method: 'GET'
        }).then((resp) => resp.json())
        .then((data) =>{
            setShirtdet(data)
        })

    }, [])

    console.log(shirtdet)
    console.log(shirtdet.id)

    return(
        <> 
                {shirtdet.id ? (
                    
                    <div class="shirt-details">
                        <div class="shirt-container">
                            <aside class="shirt-img">
                                <img src={shirtdet.imageUrl} alt={shirtdet.modelDescription} />
                            </aside>
            
                            <section class="shirt-info">
                                <header>
                                    <h2>{shirtdet.modelName}</h2>
                                    <p>{shirtdet.modelDescription}</p>
                                    <h3>${shirtdet.price}</h3>
                                </header>
            
                                <article class="size">
                                    <button>XS</button>
                                    <button class="more-pad">S</button>
                                    <button class="more-pad">M</button>
                                    <button class="more-pad">L</button>
                                    <button>XL</button>
                                </article>
            
                                <footer>
                                    <div class="center">
                                        <button>Add to bag</button>
                                    </div>
                                </footer>
                            </section>
                        </div>
                    </div>

                ) : (

                    <p>puta burra</p>

                )}
        </>
    )
}

export default ShirtDetails