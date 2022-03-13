import Car1 from '../images/car1.jpg'
import Car2 from "../images/car2.jpg";
import Car3 from "../images/car3.jpg";
export default function Carousel(){
    return <>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Car1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Car2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Car3} class="d-block w-100" alt="..." />
    </div>
  </div>
</div></>
}