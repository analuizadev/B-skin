import styles from './Carousel.module.css'

function CarouselHome() {
  return (
    <div>
      <ul className={styles.slider}>

        <li> 
          <input type="radio" id="slide1" name="slide" checked />
          <label for="slide1"></label>
          <img src="https://media.discordapp.net/attachments/1062864750196822026/1062868968282525728/38.png" /> 
        </li>

        <li> 
          <input type="radio" id="slide2" name="slide" />
          <label for="slide2"></label>
          <img src="https://media.discordapp.net/attachments/1062864750196822026/1062868946988044288/29.png?width=644&height=663" /> 
        </li>

        <li> 
          <input type="radio" id="slide3" name="slide" />
          <label for="slide3"></label>
          <img src="https://media.discordapp.net/attachments/1062864750196822026/1062867731864637500/5.png" /> 
        </li>
      </ul>
    </div>
  );
}

export default CarouselHome;