import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        LoginState: 0,
        AccessToken: ''
    },
    mutations: {
        signIn(state) {
            state.LoginState = 1
            state.AccessToken = 'f9172570-0437-4ce8-9663-f2c08e566faf'
            sessionStorage.setItem('LoginState', 1)
            sessionStorage.setItem('AccessToken', 'f9172570-0437-4ce8-9663-f2c08e566faf')
        },
        signOut(state) {
            state.LoginState = 0
            state.AccessToken = ''
            sessionStorage.setItem('LoginState', 0)
            sessionStorage.setItem('AccessToken', '')
        },
        getState(state) {
            state.LoginState = sessionStorage.getItem('LoginState')
            state.AccessToken = sessionStorage.getItem('AccessToken')
        }
    }
})