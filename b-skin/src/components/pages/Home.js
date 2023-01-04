import styles from './Home.module.css';

import Carousel from '../services/Carousel';

function Home(){

    return(
        <div className={styles.home_container}>
            <Carousel />

            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>

            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>

            <p>home</p>
            
        </div>
    )
}

export default Home