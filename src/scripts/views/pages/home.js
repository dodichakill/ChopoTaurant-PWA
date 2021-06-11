import { createRestaurantItemTemplate } from '../templates/template-creator';
import CONFIG from '../../globals/config';

const Home = {
  async render() {
    return `
        
    <section class="hero">
      <div class="hero-inner">
        <h2 class="hero-title" tabindex="0">kami adalah perusahaan yang menyediakan jasa pencarian restaurant <br> yang
          menyajikan
          berbagai hidangan
          berkualitas dengan pelayanan terbaik
        </h2>
      </div>
    </section>

    <article class="precontent">
      <h3 tabindex="0">kenapa harus memakai jasa kami?</h3>
      <div class="precards">
        <div class="precard" tabindex="0">
          <div class="preimg"><img class="lazyload" data-src="images/foods/1.jpg" alt="makanan 1"></div>
          <p>kami memilih restaurant yang menyediakan hidangan sehat</p>
        </div>
        <div class="precard" tabindex="0">
          <div class="preimg"><img class="lazyload" data-src="images/foods/2.jpg" alt="makanan 2"></div>
          <p>kami memilih restaurant yang menyediakan beragam macam hidangan</p>

        </div>
        <div class="precard" tabindex="0">
          <div class="preimg"><img class="lazyload" data-src="images/foods/3.jpg" alt="makanan 3"></div>
          <p>kami memilih restaurant yang menyediakan hidangan penutup</p>
        </div>
        <div class="precard" tabindex="0">
          <div class="preimg"><img class="lazyload" data-src="images/foods/4.jpg" alt="makanan 4"></div>
          <p>kami memilih restaurant yang menyediakan hidangan higienis</p>
        </div>
        <div class="precard" tabindex="0">
          <div class="preimg"><img class="lazyload" data-src="images/foods/5.jpg" alt="makanan 5"></div>
          <p>kami memilih restaurant yang menyediakan hidangan bergizi</p>
        </div>
        <div class="precard" tabindex="0">
          <div class="preimg"><img class="lazyload" data-src="images/foods/6.jpg" alt="makanan 6"></div>
          <p>kami memilih restaurant yang menyediakan hidangan khusus diet</p>
        </div>
      </div>
    </article>
    <article class="content">
     
      <h3 tabindex="0">Explore Restaurant</h3>
      <div class="container">
        <div id="list-restaurant"></div>

      </div>

    </article>

        `;
  },

  async afterRender() {
    // script fetch data API restaurant
    const urlRestaurantList = `${CONFIG.BASE_URL}list`;
    const containerRestaurants = document.getElementById("list-restaurant");
    containerRestaurants.innerHTML = '<div class="spinner"><i class="fas fa-search"></i></div>';
    fetch(urlRestaurantList, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then((res) => {
        let dataRestaurant = "";
        const dataRest = res.restaurants;
        dataRest.forEach((data) => {
          dataRestaurant += createRestaurantItemTemplate(data);
        });

        containerRestaurants.innerHTML = dataRestaurant;
      });
  },
};

export default Home;
