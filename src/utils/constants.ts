export const URL = {
    BASE_URL: process.env.REACT_APP_BASE_URL,
    SIGN_IN_URL: `${process.env.REACT_APP_BASE_URL}/auth/login`,
    SIGN_UP_URL: `${process.env.REACT_APP_BASE_URL}/auth/register`,
    SET_UP_PROVIDER_PAYPAL: `${process.env.REACT_APP_BASE_URL}/payment/setup?provider=paypal`,
    PAYMENT_CREATE_ORDER: `${process.env.REACT_APP_BASE_URL}/payment/create-order`,
    PAYMENT_EXECUTE_ORDER: `${process.env.REACT_APP_BASE_URL}/payment/execute-order`,
    GET_USER_DATA: `${process.env.REACT_APP_BASE_URL}/users/info`,
}