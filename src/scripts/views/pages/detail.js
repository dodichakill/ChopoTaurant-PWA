import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { CreateRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="detail-restaurant">

        <div class="titleSkel loading" style="width:220px; height:40px; margin: 20px"></div>
        <div class="wrapInfoSkel loading" > </div>

      </div>

      <div id="likeButtonContainer"></div>
      <div class="form-reviewer">
      <h3><i class="fas fa-comment-medical"></i> buat reviewmu </h3>
          <form>
              <div class="form-name">
                  <label for="inputName" class="form-label">Name</label>
                  <input type="text" name="inputName" class="form-control" id="inputName" placeholder="masukan nama anda disini">
              </div>
              <div class="form-review">
                  <label for="inputReview" class="form-label">Review</label>
                  <textarea name="inputReview" class="form-control" id="inputReview" placeholder="masukan review anda disini" ></textarea>
              </div>
              <button type="submit" id="submit-review">Kirim</button>
          </form>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurants = await RestaurantDbSource.detailRestaurant(url.id);
    const dataRestaurant = dataRestaurants.restaurant;
    const restaurantContainer = document.getElementById("restaurant");

    // menampilkan konten halaman detail
    restaurantContainer.innerHTML = await CreateRestaurantDetailTemplate(dataRestaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
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
      }
    });
  },
};

export default Detail;
