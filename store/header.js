export const state = () => ({
    isActiveProfileMenu: false,
});

export const actions = {
    openProfileMenu({commit}) {
        commit('SET_PROFILE_MENU', true);
    },

    closeProfileMenu({commit}) {
        commit('SET_PROFILE_MENU', false);
    },
};

export const mutations = {
    SET_PROFILE_MENU(state, payload) {
        state.isActiveProfileMenu = payload;
    },
};
