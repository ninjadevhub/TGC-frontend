import axios from "axios";
import { URL } from "../utils/constants";

export const setPaypalProvide = () => {
    return axios.get(URL.SET_UP_PROVIDER_PAYPAL, {
        headers: {
            'Authorization': `${URL.AUTH_TOKEN}`
        }
    })
}