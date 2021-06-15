import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { CreateRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="detail-restaurant"></div>
      <div id="likeButtonContainer"></div>
      <div class="form-reviewer">
      <h3><i class="fas fa-comment-medical"></i> buat reviewmu </h3>
          <form>
              <div class="form-name">
                  <label for="inputName" class="form-label">Name</label>
                  <input type="text" name="inputName" class="form-control" id="inputName">
              </div>
              <div class="form-review">
                  <label for="inputReview" class="form-label">Review</label>
                  <textarea name="inputReview" class="form-control" id="inputReview"> </textarea>
              </div>
              <button type="submit" id="submit-review">submit</button>
          </form>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const data = dataRestaurant.restaurant;
    const restaurantContainer = document.querySelector('#restaurant');

    // loading spinner
    restaurantContainer.innerHTML = '<div class="spinner"><i class="fas fa-search"></i></div>';

    restaurantContainer.innerHTML = CreateRestaurantDetailTemplate(data);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: data.id,
        name: data.name,
        description: data.description,
        rating: data.rating,
        city: data.city,
        pictureId: data.pictureId,
      },
    });

    // add new reviewer
    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        alert('Inputan tidak boleh ada yang kosong!');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        const dataInput = {
          id: url.id,
          name: nameInput.value,
          review: reviewInput.value,
        };
        RestaurantDbSource.postRestaurant(dataInput);
        nameInput.value = '';
        reviewInput.value = '';
        alert('berhasil menambahkan review baru');
        location.reload();
      }
    });
  },
};

export default Detail;
