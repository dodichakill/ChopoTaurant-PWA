import "regenerator-runtime"; /* for async await transpile */
import "../styles/style.css";
import data from "../DATA.json";

// console.log(data);

let bankData = "";
data.restaurants.forEach((data) => {
  bankData += `
    <div class="card">
        <div class="cardImage">
        <img src="${data.pictureId}" alt="gambar ${
    data.name
  }" /> <span class="city">kota ${
    data.city
  }</span> <span class="cardRating">  Rating : ${data.rating} </span>
  </div>
        <div class="cardTitle"> <a href="#" > ${data.name} </a> </div>
        
        <div class="cardDesc">${data.description.substring(0, 200)}</div>
    </div>

    `;
});

document.getElementById("list-restaurant").innerHTML = bankData;
