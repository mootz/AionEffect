export const state = () => ({
    categories: [{
        img: '',
        key: '',
        name: '',
    }],
    currensy: ['effect', 'bonus', 'kinah']
});

export const actions = {
    async getCategories({commit, state}) {
        try {
            const data = {
                currency: state.currensy
            };

            const categories = await this.$axios.$post('/shop/section', data);
            console.log(categories);
            commit('SET_CATEGORIES', categories.section);
        } catch (error) {
            console.log(error);
            console.warn('VueX Shop:', error.response);
        }
    },
};

export const mutations = {
    SET_CATEGORIES(state, payload) {
        console.log(payload);
        console.log(state);
        state.categories = payload;
    }
};
