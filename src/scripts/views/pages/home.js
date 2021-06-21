import { createRestaurantItemTemplate, contentFirstHome, skeletonCards } from "../templates/template-creator";
import CONFIG from "../../globals/config";

const Home = {
  async render() {
    return contentFirstHome();
  },

  async afterRender() {
    // script fetch data API restaurant
    const urlRestaurantList = `${CONFIG.BASE_URL}list`;
    const containerRestaurants = document.getElementById("list-restaurant");

    containerRestaurants.innerHTML = skeletonCards();

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
