export default {
    actions: {
        async requestAddress(context, query) {
            // необходимо посетить https://cors-anywhere.herokuapp.com/corsdemo и
            // активировать демо режим для работы прокси сервера
            const url = "https://cors-anywhere.herokuapp.com/https://cleaner.dadata.ru/api/v1/clean/address";
            const token = "0b4aad053ccb34efe48c2f209037a30d3718fe33";
            const secret = "88274eba5a5ea9644eefbcbbd472d15b1c047b53";

            const options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + token,
                    "X-Secret": secret
                },
                body: JSON.stringify([query])
            }

            const response = await fetch(url, options)
            const result = await response.json()
            console.log('async', result)
            context.commit('updateResult', result)
        }
    },
    mutations: {
        updateResult(state, result) {
            state.result[0] = {['Zip(Индекс)']: result[0].postal_code ? result[0].postal_code : 'Нет совпадений'}
            state.result[1] = {
                ['City(Город)']: result[0].city ? result[0].city
                    : result[0].region ? result[0].region
                        : 'Нет совпадений'
            }
            state.result[2] = {['Street(Улица)']: result[0].street ? result[0].street : 'Нет совпадений'}
            state.result[3] = {['House(Дом)']: result[0].house ? result[0].house : 'Нет совпадений'}
            state.result[4] = {['Flat(Квартира)']: result[0].flat ? result[0].flat : 'Нет совпадений'}
        }
    },
    state: {
        result: []
    },
    getters: {
        getResult(state) {
            return state.result
        }
    }
}