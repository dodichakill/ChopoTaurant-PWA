import CONFIG from '../../globals/config';

const CreateRestaurantDetailTemplate = (restaurant) => `

    <h1 class="restaurantName">${restaurant.name}</h1>
    <div class="wrapInfo"> 
        <div class="imageWrap"> 
            <img src="${CONFIG.IMAGE_URL}${restaurant.pictureId}" />
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
                <p class="user"> ${user.name} - ${user.date}  </p>  
                <p class="review"> ${user.review} </p>  
            </div>`).join('')}
        </div>
    </div>`;

const createLikeButtonTemplate = () => `
    <button class="like" aria-label="like this movie" id="likeButton">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button class="like" aria-label="like this movie" id="likeButton">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    CreateRestaurantDetailTemplate,
};
