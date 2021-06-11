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
        restaurant.forEach((result) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(result);
        });
    },
};

export default Favorite;
