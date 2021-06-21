import API_ENDPOINT from "../globals/api-endpoint";
import CONFIG from "../globals/config";

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

    static async postRestaurant(data) {
        const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "X-Auth-Token": CONFIG.KEY,
            },
            body: JSON.stringify(data),
        });
        return rawResponse;
    }
}

export default RestaurantDbSource;
