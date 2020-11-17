import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://icanhazdadjoke.com"
const headers = { Accept: "application/json" }

export default new Vuex.Store({
    state: {
        currentJoke: '',
        allCurrentJoke: []
    },

    mutations: {
        add(state, payload) {
            state.currentJoke = payload
            state.allCurrentJoke.push(payload)
        }
    },
    actions: {
        async getJoke({commit}) {
            const joke = await fetch(url, { headers })
            const j = await joke.json()
            commit('add', j.joke)
        }
    },
    getters: {
        showCurrentJoke: s => s.currentJoke,
        showAllCurrentJoke: s => s.allCurrentJoke
    }
})