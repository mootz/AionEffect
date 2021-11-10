export const state = () => ({
    isActiveProfileMenu: false,
    isActiveNotifications: false
});

export const actions = {
    openProfileMenu({commit}) {
        commit('SET_PROFILE_MENU', true);
    },

    closeProfileMenu({commit}) {
        commit('SET_PROFILE_MENU', false);
    },

    openNotifications({commit}) {
        commit('SET_NOTIFICATIONS', true);
    },

    closeNotifications({commit}) {
        commit('SET_NOTIFICATIONS', false);
    },
};

export const mutations = {
    SET_PROFILE_MENU(state, payload) {
        state.isActiveProfileMenu = payload;
    },
    SET_NOTIFICATIONS(state, payload) {
        state.isActiveNotifications = payload;
    },
};
