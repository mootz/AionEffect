import Vuex from 'vuex';
// import router from '../router';
// import modules from './modules';

export const store = new Vuex.Store({
    strict: true,
    state: {},
    getters: {
        // Получить имя из списочных данных по ID
        // getUserById: state => id => {
        // return state.appData.usersList.find(user => user.id === id).name
        // },
        // Получить списочные данные
        // usersList: state => state.appData.usersList
    },
    mutations: {},
    actions: {
        closeAllPopups({commit}) {
            // switch (router.currentRoute.name) {
            // case 'UserList':
            //     break;
            // case 'DepartmentsTree':
            //     break;
            // }
            console.log(commit('header/SET_PROFILE_MENU'));
            commit('header/SET_PROFILE_MENU', false);
        }
    }
});
