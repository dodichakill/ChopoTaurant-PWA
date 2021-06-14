import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <div class="favorite">
          <h2>Your Favorited Restaurant</h2>
          <div id="restaurant" class="restaurants">
     
          </div>
        </div>`;
    },

    async afterRender() {
        const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();

        const restaurantContainer = document.querySelector('#restaurant');
        if (restaurant.length === 0) {
            restaurantContainer.innerHTML = '<div class="not-found"><h3>Kamu belum mempunyai restaurant favorite</h3></div>';
        }
        restaurant.forEach((result) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(result);
        });
    },
};

export default Favorite;
