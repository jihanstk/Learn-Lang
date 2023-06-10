import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://news.cgtn.com/news/2020-10-10/Overcoming-the-digital-divide-in-online-education-UtQ3NUNOM0/img/60e933395aef48f2a3e77d7962aa7ec4/60e933395aef48f2a3e77d7962aa7ec4.jpeg" />
      </div>
      <div>
        <img src="https://news.cgtn.com/news/2020-10-10/Overcoming-the-digital-divide-in-online-education-UtQ3NUNOM0/img/60e933395aef48f2a3e77d7962aa7ec4/60e933395aef48f2a3e77d7962aa7ec4.jpeg" />
      </div>
      <div>
        <img src="https://news.cgtn.com/news/2020-10-10/Overcoming-the-digital-divide-in-online-education-UtQ3NUNOM0/img/60e933395aef48f2a3e77d7962aa7ec4/60e933395aef48f2a3e77d7962aa7ec4.jpeg" />
      </div>
    </Carousel>
  );
};

export default Banner;
