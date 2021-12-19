export const state = () => ({
    categories: [{
        img: '',
        key: '',
        name: '',
    }],

    activeCategory: {
        key: '',
        name: ''
    },
    items: [],
    itemsPag: {
        page_all: 1,
        count: 1,
        product_count: 1
    },
    subcategories: [],
    activeSubCategory: '',
    currency: ['effect', 'bonus', 'kinah'],
    currentPage: 1
});

export const actions = {
    async getCategories({commit, state, dispatch}) {
        try {
            const data = {
                currency: state.currency
            };

            const categories = await this.$axios.$post('/shop/section', data);
            await commit('SET_CATEGORIES', categories.section);
            await commit('SET_ACTIVE_CATEGORY');

            if (state.items.length) {
                await dispatch('updateItems');
            } else {
                await dispatch('getItems');
            }
        } catch (error) {
            console.log(error);
            console.warn('VueX Shop:', error.response);
        }
    },
    async updateCategories({commit, state}) {
        try {
            const data = {
                currency: state.currency
            };

            const categories = await this.$axios.$post('/shop/section', data);
            console.log(categories);
            await commit('SET_CATEGORIES', categories.section);
        } catch (error) {
            console.log(error);
            console.warn('VueX Shop:', error.response);
        }
    },
    async getItems({commit, state}, payload) {
        try {
            const data = {
                currency: state.currency
            };

            if (payload?.name) {
                await commit('SET_ACTIVE_CATEGORY', payload.name);
            }

            if (state.activeCategory?.key) {
                const subCategory = state.activeSubCategory;
                const category = state.activeCategory.key;

                const items = await this.$axios.$post(`/shop/product/${category}${subCategory ? `/${subCategory}` : ''}/1`, data);

                if (payload?.updateItems) {
                    commit('UPDATE_ITEMS', items);
                } else {
                    commit('SET_ITEMS', items);
                }
            }
        } catch (error) {
            console.log(error);
            console.warn('VueX Shop:', error.response);
        }
    },
    async getSubCategories({commit, state}) {
        try {
            const data = {
                currency: state.currency
            };

            const category = this.$router.history.current.params.slug;
            const subcategories = await this.$axios.$post(`/shop/get-category/${category}`, data);
            commit('SET_SUBCATEGORIES', subcategories);
        } catch (error) {
            console.log(error);
            console.warn('VueX Shop:', error.response);
        }
    },
    async setPageItems({commit, state}, page) {
        try {
            const data = {
                currency: state.currency
            };

            const subCategory = state.activeSubCategory;
            const category = state.activeCategory.key;

            const items = await this.$axios.$post(`/shop/product/${category}${subCategory ? `/${subCategory}` : ''}/${page}`, data);

            commit('SET_NEW_CURRENT_PAGE', page);
            commit('ADD_ITEMS', items);
        } catch (error) {
            console.log(error);
            console.warn('VueX Shop:', error.response);
        }
    },
    async updateItems({commit, state}) {
        try {
            const data = {
                currency: state.currency
            };

            const category = state.activeCategory.key;
            const items = await this.$axios.$post(`/shop/product/${category}/1`, data);
            commit('UPDATE_ITEMS', items);
        } catch (error) {
            console.log(error);
            console.warn('VueX Shop:', error.response);
        }
    },

    async setActiveCategory({commit}) {
        await commit('SET_ACTIVE_CATEGORY');
    },

    clearActiveCategory({commit}) {
        commit('CLEAR_ACTIVE_CATEGORY');
    },

    clearSubCategories({commit}) {
        commit('CLEAR_SUBCATEGORIES');
    },

    updateCurrency({commit}, val) {
        commit('UPDATE_CURRENCY', val);
    },

    setSubCategories({commit, dispatch}, val) {
        commit('SET_SUBCATEGORY', val);
        commit('SET_NEW_CURRENT_PAGE', 1);
        dispatch('getItems');
    },
};

export const mutations = {
    SET_CATEGORIES(state, payload) {
        state.categories = payload;
    },
    SET_ITEMS(state, payload) {
        state.items = payload.product;

        state.itemsPag.page_all = payload.page_all;
        state.itemsPag.count = payload.count;
        state.itemsPag.product_count = payload.product_count;
    },
    ADD_ITEMS(state, payload) {
        state.items.push(...payload.product);

        state.itemsPag.page_all = payload.page_all;
        state.itemsPag.count = payload.count;
        state.itemsPag.product_count = payload.product_count;
    },
    UPDATE_ITEMS(state, payload) {
        state.items = payload.product;

        state.itemsPag.page_all = payload.page_all;
        state.itemsPag.count = payload.count;
        state.itemsPag.product_count = payload.product_count;
    },

    SET_ACTIVE_CATEGORY(state, name) {
        if (name) {
            state.activeCategory = state.categories.filter(e => e.key === name).pop();
            return true;
        } else if (this.$router.history.current.params.slug) {
            const category = this.$router.history.current.params.slug;
            state.activeCategory = state.categories.filter(e => e.key === category).pop();
            return true;
        }
        return false;
    },

    CLEAR_ACTIVE_CATEGORY(state) {
        state.activeCategory = {
            key: '',
            name: ''
        };
    },

    CLEAR_SUBCATEGORIES(state) {
        state.subcategories = [];
        state.activeSubCategory = '';
    },

    UPDATE_CURRENCY(state, val) {
        state.currency = val.map(e => e.value);
    },

    SET_SUBCATEGORIES(state, val) {
        state.subcategories = val.category;
    },

    SET_SUBCATEGORY(state, val) {
        state.activeSubCategory = val;
    },

    SET_NEW_CURRENT_PAGE(state, val) {
        state.currentPage = val;
    }
};
