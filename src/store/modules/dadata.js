export default {
    actions: {
        async requestAddress(context) {
            // необходимо посетить https://cors-anywhere.herokuapp.com/corsdemo и
            // активировать демо режим для работы прокси сервера
            // const proxyURL = 'https://cors-anywhere.herokuapp.com/'
            const url = "https://cors-anywhere.herokuapp.com/https://cleaner.dadata.ru/api/v1/clean/address";
            const token = "2dc9501086d6e922a76115e4ec68c517acbdc38c";
            const secret = "c6e10a0bb0855f861d3067059308cba1dd5c4558";
            const query = "мск сухонска 11/-89";

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

            context.commit('updateResult', result)
        }
    },
    mutations: {
        updateResult(state, result) {
            state.result = result
            console.log(result)
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