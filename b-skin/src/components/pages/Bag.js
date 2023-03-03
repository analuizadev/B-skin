import { Link } from "react-router-dom";
import bagimg from '../img/bag.png';
import styles from "./Bag.css"

function Bag() {

    function home() {
        window.location.href='/shirt'
    }

    return(
        <div class="body">
            <div class="container-bag">
                <header>
                    <h2>Bag</h2>
                </header>
                <div class="container">
                    <h2><img src={bagimg}></img></h2>
                    <p>There are no items in your bag!</p>
                    <div>
                        <button class="shop" onClick={home}>shop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bag