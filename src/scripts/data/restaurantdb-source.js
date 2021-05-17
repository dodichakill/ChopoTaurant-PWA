import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
    static async listDataRestaurant() {
        const response = await fetch(API_ENDPOINT.LIST_DATA_RESTAURANT);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default RestaurantDbSource;
