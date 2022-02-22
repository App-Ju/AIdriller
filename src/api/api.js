import axios from 'axios'

const token = "0b4aad053ccb34efe48c2f209037a30d3718fe33";
const secret = "88274eba5a5ea9644eefbcbbd472d15b1c047b53";

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://cleaner.dadata.ru/api/v1/clean/address',
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + token,
        "X-Secret": secret
    },
})

export default api