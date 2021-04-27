import axios from 'axios';

export const faucetApi = (baseUrl) => ({
    requestMoney: (address, captchaToken) => {
        return axios.post('/payment', {
            token: captchaToken,
            recipient: address
        }, {
            baseURL: baseUrl
        });
    }
});
