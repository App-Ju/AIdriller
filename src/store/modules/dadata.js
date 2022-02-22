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
            state.result = result
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