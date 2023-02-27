import { useEffect, useState } from "react";
import styles from './ShirtDetails.css';

function ShirtDetails(){

    const [shirtDetails, setShirtDetails] = useState([])

    useEffect(() =>{
        fetch(`https://localhost:5001/t-shirts/details/3`,{
            method: 'GET'
        }).then((resp) => resp.json)
        .then((data) =>{
            setShirtDetails(data)
        })
    })

    return(
        <>
            <div class="shirt-details">
                <aside class="shirt-img">
                    <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867730451153007/1.png" alt="" />
                </aside>

                <section class="shirt-info">
                    <header>
                        <h2>Shirt</h2>
                        <p>shirt description</p>
                        <h3>$price</h3>
                    </header>

                    <article class="size">
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </article>

                    <footer>
                        <button>Add to bag</button>
                    </footer>
                </section>
            </div>
        </>
    )
}

export default ShirtDetails