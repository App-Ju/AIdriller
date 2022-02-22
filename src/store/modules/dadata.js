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
        result: {},
        requestCompleted: false
    },
    getters: {
        getResult(state) {
            return {
                postal_code: state.result.postal_code,
                cityOrRegion: state.result.city || state.result.region,
                street: state.result.street,
                house: state.result.house,
                flat: state.result.flat,
            }
        },
        getRequestCompleted(state) {
            return state.requestCompleted
        }
    }
}