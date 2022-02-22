import api from "@/api/api"

export default {
    actions: {
        async requestAddress(context, query) {
            try {
                const resultReq = await api({
                    data: JSON.stringify([query]),
                })
                context.commit('updateResult', resultReq.data[0])
            } catch (error) {
                console.log(error)
            }

        }
    },
    mutations: {
        updateResult(state, result) {
            state.result[0] = {['Zip(Индекс)']: result.postal_code ? result.postal_code : 'Нет совпадений'}
            state.result[1] = {
                ['City(Город)']: result.city ? result.city
                    : result.region ? result.region
                        : 'Нет совпадений'
            }
            state.result[2] = {['Street(Улица)']: result.street ? result.street : 'Нет совпадений'}
            state.result[3] = {['House(Дом)']: result.house ? result.house : 'Нет совпадений'}
            state.result[4] = {['Flat(Квартира)']: result.flat ? result.flat : 'Нет совпадений'}
        }
    },
    state: {
        result: [],
    },
    getters: {
        getResult(state) {
            return state.result
        }
    }
}