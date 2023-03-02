import styles from './Search.module.css';
import { RiSearch2Line } from "react-icons/ri";
import { useState, useEffect } from 'react';

function Search(){

    const handleInputChange = (e) => {
        e.preventDefault();

        const {value} = e.target;

        if(!value) return;

        const url = `https://localhost:5001/t-shirts/search/${value}`

        fetch(url).then((resp) => resp.json()).then(console.log)
    }

    return(
        <div className={styles.search}>
            <input
            onChange={handleInputChange} 
            type='search' 
            placeholder="Digite um produto"/>
            <button type="submit"><RiSearch2Line /></button>
        </div>
    )
}

export default Search