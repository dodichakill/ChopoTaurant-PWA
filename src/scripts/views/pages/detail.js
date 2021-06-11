import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { CreateRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
    async render() {
        return `
            <div id="restaurant" class="detail-restaurant"></div>
            <div id="likeButtonContainer"></div>
            `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const dataRestaurant = await RestaurantDbSource.detailRestaurant(url.id);
        const data = dataRestaurant.restaurant;
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = '<div class="spinner"><i class="fas fa-search"></i></div>';
        restaurantContainer.innerHTML = CreateRestaurantDetailTemplate(data);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: data.id,
                name: data.name,
                description: data.description,
                backdrop_path: data.backdrop_path,
                rating: data.rating,
                city: data.city,
                pictureId: data.pictureId,
            },
        });
    },
};

export default Detail;
