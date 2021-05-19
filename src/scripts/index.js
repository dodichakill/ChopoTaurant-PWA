import "regenerator-runtime"; /* for async await transpile */
import "../styles/style.css";
import App from './views/app';
import CONFIG from "./globals/config";
import swRegister from './utils/sw-register';

// script navigasi drawer
const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('#maincontent'),
});

// script fetch API data restaurant
const urlRestaurantList = `${CONFIG.BASE_URL}list`;
const GetDataRestaurant = () => {
  fetch(urlRestaurantList, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(res => res.json())
    .then((res) => {
      let bankRestaurant = "";
      const dataRest = res.restaurants;
      dataRest.forEach((data) => {
        bankRestaurant += `

      <div class="card" tabindex="0">
        <div class="cardImage">
          <img src="https://restaurant-api.dicoding.dev/images/small/${data.pictureId}" alt=" ${data.name
          }" /> <span class="city">kota ${data.city
          }</span> <span class="cardRating">  Rating : ${data.rating} </span>
        </div>
        <div class="cardTitle">  <h4><a href="/#/detail/${data.id}" > ${data.name} </a> </h4>  </div>
              
        <div class="cardDesc">${data.description.substring(0, 150)}</div>
      </div>

          `;
      });

      document.getElementById("list-restaurant").innerHTML = bankRestaurant;
    });
};

GetDataRestaurant();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
