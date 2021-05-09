import "regenerator-runtime"; /* for async await transpile */
import "../styles/style.css";
import App from './views/app'

// script navigasi drawer
const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('.hero'),
});

// script fetch API data restaurant
const urlRestaurantList = 'https://restaurant-api.dicoding.dev/list';
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
      const datas = res.restaurants;
      datas.forEach((data) => {
        bankRestaurant += `

<div class="card" tabindex="0">
  <div class="cardImage">
    <img src="https://restaurant-api.dicoding.dev/images/small/${data.pictureId}" alt="gambar ${data.name
          }" /> <span class="city">kota ${data.city
          }</span> <span class="cardRating">  Rating : ${data.rating} </span>
  </div>
  <div class="cardTitle">  <a href="#" ><h4> ${data.name
          } </h4></a>  </div>
        
  <div class="cardDesc">${data.description.substring(0, 150)}</div>
</div>

    `;
      });

      document.getElementById("list-restaurant").innerHTML = bankRestaurant;

    })

}
GetDataRestaurant()
