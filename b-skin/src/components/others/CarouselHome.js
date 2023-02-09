import  'bootstrap/dist/css/bootstrap.min.css' ;
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.discordapp.net/attachments/1062864750196822026/1062867731864637500/5.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.discordapp.net/attachments/1062864750196822026/1062868838565302282/24.png?width=442&height=515"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.discordapp.net/attachments/1062864750196822026/1062868951224287323/37.png?width=442&height=515"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.discordapp.net/attachments/1062864750196822026/1062868946988044288/29.png?width=442&height=515"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.discordapp.net/attachments/1062864750196822026/1062868948581875732/32.png?width=442&height=515"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselHome;