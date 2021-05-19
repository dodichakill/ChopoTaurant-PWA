import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { CreateRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
            <div id="restaurant" class="detail-restaurant"></div>
            `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const dataRestaurant = await RestaurantDbSource.detailRestaurant(url.id);
        const data = dataRestaurant.restaurant;
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = CreateRestaurantDetailTemplate(data);
    },
};

export default Detail;
