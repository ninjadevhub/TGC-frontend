import axios from "axios";
import { URL } from "../utils/constants";
import { IExecuteOrder } from "../components/PaypalButton/types";

export const executeOrder = ({ tournamentId, paymentId, payerId }: IExecuteOrder) => {
    return axios.post(URL.PAYMENT_EXECUTE_ORDER,{
        tournamentId,
        paymentId,
        payerId
    }, {
        headers: {
            'Authorization': `${URL.AUTH_TOKEN}`
        }
    })
}