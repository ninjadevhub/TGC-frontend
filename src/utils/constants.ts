export const URL = {
    BASE_URL: process.env.REACT_APP_BASE_URL,
    SIGN_IN_URL: `${process.env.REACT_APP_BASE_URL}/auth/login`,
    SIGN_UP_URL: `${process.env.REACT_APP_BASE_URL}/auth/register`,
    SET_UP_PROVIDER_PAYPAL: `${process.env.REACT_APP_BASE_URL}/payment/setup?provider=paypal`,
    PAYMENT_CREATE_ORDER: `${process.env.REACT_APP_BASE_URL}/payment/create-order`,
    PAYMENT_EXECUTE_ORDER: `${process.env.REACT_APP_BASE_URL}/payment/execute-order`,
    // TODO: delete this after storring of user data
    AUTH_TOKEN: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkQ4RGFMR3lyN2o5eVpOZXoyclp1byJ9.eyJodHRwOi8vdXNlciI6NSwiaXNzIjoiaHR0cHM6Ly9hLXNoYXJrYXd5LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiI2SkN2NUpwQ1JmMFpVdnN1NlQwUTMzOHc4UU4yMlBoWEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly90Z2Mtc2VydmljZXMvYXV0aCIsImlhdCI6MTYxNTkyMTU4OSwiZXhwIjoxNjE2MDA3OTg5LCJhenAiOiI2SkN2NUpwQ1JmMFpVdnN1NlQwUTMzOHc4UU4yMlBoWCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.jJadSzhxMxagQzpxTXYI51P6zXsJohoLxm_720DvHB4lSB_4zjwCt8km6R6Om3bPTbMnYVFMn4q-EUjxbZ6nihsXYdb6wxbcAjZCq1U9xk8BQJV2ODDyVECWKy7Y5uXJAiHLCiQ_KcK_gRRdCqGhdSxZzKFxC1lgjbl724zrCXy65CahmkK1QsiF1LlWtX2KRENA92fKeSg5UCSeveMC72oSNNFf-MrgZdw_VDRtsSk5CZY1GmyuAtoGVOwqIW9xLcNMFTumiCNapELvxvRdvANM6fI6ZubPpGZwp3ZIZedeAsVwaGfMv_skkiVFKcmgDskPbpp5f1Z4TDyWc4LOaA'
}