import axios from 'axios'

const token = "0b4aad053ccb34efe48c2f209037a30d3718fe33";

const api = axios.create({
    baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token,
    },
})

export default api