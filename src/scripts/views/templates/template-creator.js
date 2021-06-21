import API_ENDPOINT from "../../globals/api-endpoint";

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
        <p>${restaurant.categories.map(category => category.name).join(" - ")}</p>
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
            ${restaurant.menus.foods.map(food => `<li> ▸ ${food.name} </li>`).join("")}
            </ul>
        </div>
        <div class="menuDrinks"> 
            <h4>Daftar Minuman</h4>
            <ul>
            ${restaurant.menus.drinks.map(drink => `<li> ▸ ${drink.name} </li>`).join("")}
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
        </div>`).join("")}
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
        
    <div class="cardDesc"><p>${restaurant.description.substring(0, 112)}</p></div>
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
const contentFirstHome = () => `  
<section class="hero">
    <div class="hero-inner">
    <h2 class="hero-title" tabindex="0">kami adalah perusahaan yang menyediakan jasa pencarian restaurant <br> yang
        menyajikan
        berbagai hidangan
        berkualitas dengan pelayanan terbaik
    </h2>
    </div>
</section>

<article class="precontent">
    <h3 tabindex="0">kenapa harus memakai jasa kami?</h3>
    <div class="precards">
    <div class="precard" tabindex="0">
        <div class="preimg">
        <picture>
            <source type="image/webp" class="lazyload" data-src="images/foods/1.webp">
            <img class="lazyload" data-src="images/foods/1.jpg" alt="makanan 1">
        </picture>
        </div>
        <p>kami memilih restaurant yang menyediakan hidangan sehat</p>
    </div>
    <div class="precard" tabindex="0">
        <div class="preimg">
        <picture>
            <source type="image/webp" class="lazyload" data-src="images/foods/2.webp">
            <img class="lazyload" data-src="images/foods/2.jpg" alt="makanan 2">
        </picture>
        </div>
        <p>kami memilih restaurant yang menyediakan beragam macam hidangan</p>
    </div>
    <div class="precard" tabindex="0">
        <div class="preimg">
        <picture>
            <source type="image/webp" class="lazyload" data-src="images/foods/3.webp">
            <img class="lazyload" data-src="images/foods/3.jpg" alt="makanan 3">
        </picture>
        </div>
        <p>kami memilih restaurant yang menyediakan hidangan penutup</p>
    </div>
    <div class="precard" tabindex="0">
        <div class="preimg">
        <picture>
            <source type="image/webp" class="lazyload" data-src="images/foods/4.webp">
            <img class="lazyload" data-src="images/foods/4.jpg" alt="makanan 4">
        </picture>
        </div>
        <p>kami memilih restaurant yang menyediakan hidangan higienis</p>
    </div>
    <div class="precard" tabindex="0">
        <div class="preimg">
        <picture>
            <source type="image/webp" class="lazyload" data-src="images/foods/5.webp">
            <img class="lazyload" data-src="images/foods/5.jpg" alt="makanan 5">
        </picture>
        </div>
        <p>kami memilih restaurant yang menyediakan hidangan bergizi</p>
    </div>
    <div class="precard" tabindex="0">
        <div class="preimg">
        <picture>
            <source type="image/webp" class="lazyload" data-src="images/foods/6.webp">
            <img class="lazyload" data-src="images/foods/6.jpg" alt="makanan 6">
        </picture>
        </div>
        <p>kami memilih restaurant yang menyediakan hidangan khusus diet</p>
    </div>
</div>
    </div>
</article>
<article class="content">
    
    <h3 tabindex="0">Explore Restaurant</h3>
    <div class="container">
    <div id="list-restaurant">
    <!-- dummy card -->
    
        

    </div>

    </div>

</article>

    `;

const skeletonCards = () => `
<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

<div class="card" tabindex="0">
    <div class="cardImage loading" style="width: 100%; height: 160px;"></div>
    <div class="cardTitleSkeleton">
        <h4 class="loading">
            <a href="/#/detail/"> </a>
        </h4>
    </div>
    <div class="cardDesc loading" style="height:72px"> <p></p></div>
</div>

`;

const contentDetailFirst = () => `
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
            <input type="text" name="inputName" class="form-control" id="inputName" placeholder="masukan namamu disini">
        </div>
        <div class="form-review">
            <label for="inputReview" class="form-label">Review</label>
            <textarea name="inputReview" class="form-control" id="inputReview" placeholder="masukan reviewmu disini" ></textarea>
        </div>
        <button type="submit" id="submit-review">Kirim</button>
    </form>
</div>
`;
export {
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    CreateRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    contentFirstHome,
    skeletonCards,
    contentDetailFirst,
};
