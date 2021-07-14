import UrlParser from "../../routes/url-parser";
import RestaurantAPISource from "../../data/restaurant-api-source";
import { CreateRestaurantDetailTemplate, contentDetailFirst } from "../templates/template-creator";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return contentDetailFirst();
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurants = await RestaurantAPISource.detailRestaurant(url.id);
    const dataRestaurant = dataRestaurants.restaurant;
    const restaurantContainer = document.getElementById("restaurant");

    // menampilkan konten halaman detail
    restaurantContainer.innerHTML = await CreateRestaurantDetailTemplate(dataRestaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: dataRestaurant.id,
        name: dataRestaurant.name,
        description: dataRestaurant.description,
        rating: dataRestaurant.rating,
        city: dataRestaurant.city,
        pictureId: dataRestaurant.pictureId,
      },
    });

    // add new reviewer
    const btnSubmit = document.querySelector("#submit-review");
    const nameInput = document.querySelector("#inputName");
    const reviewInput = document.querySelector("#inputReview");

    btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      if (nameInput.value === "" || reviewInput.value === "") {
        alert("Inputan tidak boleh ada yang kosong!");
        nameInput.value = "";
        reviewInput.value = "";
      } else {
        const dataInput = {
          id: url.id,
          name: nameInput.value,
          review: reviewInput.value,
        };
        RestaurantAPISource.postRestaurant(dataInput);
        nameInput.value = "";
        reviewInput.value = "";
        alert("berhasil menambahkan review baru");
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    });
  },
};

export default Detail;
