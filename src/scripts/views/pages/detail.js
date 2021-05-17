import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';

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
        const containerData = `

    
    <h1 class="restaurantName">${data.name}</h1>
    <div class="wrapInfo"> 
        <div class="imageWrap"> 
            <img src="${CONFIG.IMAGE_URL}${data.pictureId}" />
        </div>
        <div class="info">
         <h2>Information</h2>
            <h3>Category</h3>
            ${data.categories.map(category => category.name).join(' - ')}
            <h3>City</h3>
            ${data.city}
            <h3>Address</h3>
            ${data.address}
            <h3>Rating</h3>
            ⭐ ${data.rating}
        </div>
    </div>

    
    <div class="overview">
    <h2>Overview</h2>

        <div class="description">
        <h3>description</h3>
          <p>${data.description}</p>

        </div>
        
        <div class="menuContainer">
            <div class="menuFoods"> 
            <h3>Daftar Makanan</h3>
            <ul>
            ${data.menus.foods.map(food => `<li> ${food.name} </li>`).join('')}

            
            <ul>
            </div>
            <div class="menuDrinks"> 
            <h3>Daftar Minuman</h3>

            <ul>
            ${data.menus.drinks.map(drink => `<li> ${drink.name} </li>`).join('')}
            <ul>
            </div>
        </div>
        <div class="review-container">
            <h3>Review</h3>
            ${data.customerReviews.map(user => ` 
            <div class="reviewer">  
                <p class="user"> ${user.name} - ${user.date}  </p>  
                <p class="review"> ${user.review} </p>  
            </div>`).join('')}
        </div>
    </div>
   

        `;
        document.querySelector('#restaurant').innerHTML = containerData;
        console.log(data);
    },
};

export default Detail;
