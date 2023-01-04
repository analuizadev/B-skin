import styles from './Search.module.css';
import { RiSearch2Line } from "react-icons/ri";

function Search(){

    return(
        <div className={styles.search}>
            <input type='text' placeholder="Digite um produto"/>
            <button type="submit"><RiSearch2Line /></button>
        </div>
    )
}

export default Search