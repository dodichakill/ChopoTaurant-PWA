import API_ENDPOINT from '../../globals/api-endpoint';

const CreateRestaurantDetailTemplate = (restaurant) => `

    <h1 class="restaurantName">${restaurant.name}</h1>
    <div class="wrapInfo"> 
        <div class="imageWrap"> 
            <img class="lazyload" data-src="${API_ENDPOINT.IMAGE_MEDIUM_URL}${restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
        </div>
        <div class="info">
            <h2>Informasi</h2>
            <hr />
            <h3><i class="fas fa-tags"></i> Kategori</h3>
            <p>${restaurant.categories.map(category => category.name).join(' - ')}</p>
            <h3><i class="fas fa-map-marker-alt"></i> Kota</h3>
            <p>${restaurant.city}</p>
            <h3><i class="fas fa-search-location"></i> Alamat</h3>
            <p>${restaurant.address}</p>
            <h3><i class="fas fa-star"></i> Penilaian</h3>
            <p>⭐ ${restaurant.rating}</p>
        </div>
    </div>

    <div class="overview">
    <h2>Informasi Lanjutan</h2>
    <hr />
        <div class="description">
        <h3><i class="fas fa-info-circle"></i> Rincian</h3>
        <p>${restaurant.description}</p>
        </div>
        <div class="menuContainer">
            <h3>▉ Menu</h3>
            <div class="menuFoods"> 
                <h4>Daftar Makanan</h4>
                <ul>
                ${restaurant.menus.foods.map(food => `<li> ▸ ${food.name} </li>`).join('')}
                </ul>
            </div>
            <div class="menuDrinks"> 
                <h4>Daftar Minuman</h4>
                <ul>
                ${restaurant.menus.drinks.map(drink => `<li> ▸ ${drink.name} </li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="review-container">
            <h3><i class="fas fa-comments"></i> Review</h3>
            ${restaurant.customerReviews.map(user => ` 
            <div class="reviewer">  
                <div class="logoUser">
                    <i class="fas fa-user"></i>
                </div>
                <div class="content"> 
                    <div class="head">
                         <div class="name"> ${user.name}</div> <div class="date"> ${user.date} </div>
                    </div>
                    <p class="review"> ${user.review} </p>  
                </div>
            </div>`).join('')}
        </div>
    </div>`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="card" tabindex="0">
    <div class="cardImage">
        <img class="lazyload" data-src="${API_ENDPOINT.IMAGE_SMALL_URL}${restaurant.pictureId}" crossorigin="anonymous" alt="${restaurant.name
    }" /> 
        <span class="city">kota ${restaurant.city
    }</span> 
        <span class="cardRating">  Rating : ${restaurant.rating} </span>
    </div>
    <div class="cardTitle">  
        <h4>
            <a href="/#/detail/${restaurant.id}" > ${restaurant.name} </a> 
        </h4>  
    </div>
        
    <div class="cardDesc">${restaurant.description.substring(0, 112)}</div>
</div>

  `;

const createLikeButtonTemplate = () => `
    <button class="like" aria-label="like this restaurant" id="likeButton">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button class="like" aria-label="unlike this restaurant" id="likeButton">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    CreateRestaurantDetailTemplate,
    createRestaurantItemTemplate,
};
