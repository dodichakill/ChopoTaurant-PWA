import API_ENDPOINT from '../../globals/api-endpoint';

const CreateRestaurantDetailTemplate = (restaurant) => `

    <h1 class="restaurantName">${restaurant.name}</h1>
    <div class="wrapInfo"> 
        <div class="imageWrap"> 
            <img class="lazyload" data-src="${API_ENDPOINT.IMAGE_MEDIUM_URL}${restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
        </div>
        <div class="info">
        <h2>Information</h2>
            <h3>Category</h3>
            ${restaurant.categories.map(category => category.name).join(' - ')}
            <h3>City</h3>
            ${restaurant.city}
            <h3>Address</h3>
            ${restaurant.address}
            <h3>Rating</h3>
            ⭐ ${restaurant.rating}
        </div>
    </div>

    <div class="overview">
    <h2>Overview</h2>
        <div class="description">
        <h3>description</h3>
        <p>${restaurant.description}</p>
        </div>
        <div class="menuContainer">
            <h3>Daftar Menu</h3>
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
            <h3>Review</h3>
            ${restaurant.customerReviews.map(user => ` 
            <div class="reviewer">  
                <p class="user"> ${user.name} - <span class="date"> ${user.date} </span>  </p>  
                <p class="review"> ${user.review} </p>  
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
        
    <div class="cardDesc">${restaurant.description.substring(0, 150)}</div>
</div>

  `;

const createLikeButtonTemplate = () => `
    <button class="like" aria-label="like this movie" id="likeButton">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button class="like" aria-label="unlike this movie" id="likeButton">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    CreateRestaurantDetailTemplate,
    createRestaurantItemTemplate,
};
