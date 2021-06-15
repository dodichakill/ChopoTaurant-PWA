import CONFIG from './config';

const API_ENDPOINT = {
    LIST_DATA_RESTAURANT: `${CONFIG.BASE_URL}list`,
    IMAGE_MEDIUM_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
    IMAGE_SMALL_URL: 'https://restaurant-api.dicoding.dev/images/small/',
    POST_REVIEW: 'https://restaurant-api.dicoding.dev/review/',
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
