import { Link } from "react-router-dom";
import bagimg from '../img/bag.png';
import styles from "./Bag.css"

function Bag() {

    return(
        <div class="body">
            <header>
                <h2>Bag</h2>
            </header>
                <div class="container">
                    <h2><img src={bagimg}></img></h2>
                    <p>There are no items in your bag!</p>
                    <div>
                        <button class="shop"><Link to='/shirt'>shop</Link></button>
                    </div>
                </div>
        </div>
    )
}

export default Bag