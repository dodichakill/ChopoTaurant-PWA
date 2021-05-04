import "regenerator-runtime"; /* for async await transpile */
import "../styles/style.css";
import data from "../DATA.json";

// script menampilkan DATA.json pada card
let bankData = "";
data.restaurants.forEach((data) => {
  bankData += `
    <div class="card" tabindex="0">
        <div class="cardImage">
        <img src="${data.pictureId}" alt="gambar ${
    data.name
  }" /> <span class="city">kota ${
    data.city
  }</span> <span class="cardRating">  Rating : ${data.rating} </span>
  </div>
        <div class="cardTitle">  <a href="#" ><h4> ${
          data.name
        } </h4></a>  </div>
        
        <div class="cardDesc">${data.description.substring(0, 200)}</div>
    </div>

    `;
});

document.getElementById("list-restaurant").innerHTML = bankData;

// script hamburger menu
document.getElementById("Hamburger-nav").addEventListener("click", () => {
  document.querySelector(".slider-nav").classList.toggle("open");
});
