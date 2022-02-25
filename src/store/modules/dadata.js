import api from "@/api/api"

export default {
    actions: {
        async requestAddress(context, query) {
            try {
                const resultReq = await api({
                    data: JSON.stringify({query: query}),
                })
                context.commit('updateResult', resultReq.data.suggestions)
            } catch (error) {
                console.log(error)
                context.commit('clearResult')
            }
        }
    },
    mutations: {
        updateResult(state, result) {
            state.result = result
            state.requestCompleted = true
        },
        clearResult(state) {
            state.result = {}
            state.requestCompleted = false
        }
    },
    state: {
        result: {}, requestCompleted: false
    },
    getters: {
        getResult(state) {
            if (state.result) {
                const result = {
                    postal_code: [], city: [], street: [], house: [], flat: []
                }
                for (let i = 0; i < state.result.length; i++) {
                    result.postal_code.push(state.result[i].data.postal_code)
                    result.city.push(state.result[i].data.city || state.result[i].data.settlement_with_type)
                    result.street.push(state.result[i].data.street)
                    result.house.push(state.result[i].data.house)
                    result.flat.push(state.result[i].data.flat)
                }
                return result
            }
        },
        getRequestCompleted(state) {
            return state.requestCompleted
        }
    }
}