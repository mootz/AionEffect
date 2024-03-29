export const state = () => ({
    user: {
        avatar: {
            text: '',
            color: '',
        },
        id: '',
        login: '',
        phone: '',
        email: '',
        telegram: '',
        last_active: '',
        last_change_pass: '',
        date_create: '',
        iso: '',
        lang: '',
        status: '',
        confirm_email: '',
        balance: {
            effect: '0',
            bonus: '0',
            kinah: '0'
        },
        referral: {
            url_key: '',
            count: 0,
            gift: 0
        },
        characters: []
    },

    userPage: {
        dataChange: false,
        step: 1,
        type: ''
    },
    history: {
        account: {
            logs: [
                {
                    date: ''
                }
            ],
            page_all: ''
        },
        donation: {
            logs: [
            ],
            page_all: ''
        }
    }
});

export const getters = {
    getUserData: state => state.user,
};

export const actions = {
    async getUserData({commit}) {
        try {
            const userId = localStorage['auth.userId'];

            const user = await this.$axios.$post(`/user/${userId}`);

            commit('SET_USER_DATA', user.user, userId);
            commit('SET_USER_DATA', {user: user.user, id: userId});
        } catch (error) {
            console.warn('VueX User Data:', error.response);
            await this.$router.push(this.localePath('/login'));
            await this.$auth.logout();
            this.$auth.$storage.removeUniversal('userId');
        }
    },

    async getHistoryAccount({commit}, page) {
        try {
            const response = await this.$axios.$post(`/user/${localStorage['auth.userId']}/log/history/${page}`);

            commit('SET_HISTORY_ACCOUNT', response);
        } catch (error) {
            console.warn('VUEX user/account: ', error.response);
        }
    },

    async getHistoryDonation({commit}, page) {
        try {
            const response = await this.$axios.$post(`/user/${localStorage['auth.userId']}/log/donation/${page}`);

            commit('SET_HISTORY_DONATION', response);
        } catch (error) {
            console.warn('VUEX user/account: ', error.response);
        }
    },

    toggleDataChange({commit, state}) {
        if (state.userPage.dataChange) {
            commit('LEAVE_DATA_CHANGE');
        } else {
            commit('TOGGLE_DATA_CHANGE');
        }
    },
    changeDataStep({commit}, payload) {
        commit('CHANGE_DATA_STEP', payload);
    },
    leaveDataChange({commit}) {
        commit('LEAVE_DATA_CHANGE');
    },
};

export const mutations = {
    SET_USER_DATA(state, payload) {
        // const userText = user.login.split('')[0];
        // const userAvatar = `#${Math.floor(Math.random()*16777215).toString(16)}`;

        state.user = {...payload.user, id: payload.id};
    },
    SET_HISTORY_ACCOUNT(state, payload) {
        state.history.account = {
            logs: [...payload.logs],
            page_all: payload.page_all
        };
    },
    SET_HISTORY_DONATION(state, payload) {
        state.history.donation = {
            logs: [...payload.logs],
            page_all: payload.page_all
        };
    },

    TOGGLE_DATA_CHANGE(state) {
        state.userPage.dataChange = !state.userPage.dataChange;
    },
    LEAVE_DATA_CHANGE(state) {
        state.userPage.dataChange = false;
        state.userPage.type = '';
        state.userPage.step = 1;
    },
    CHANGE_DATA_STEP(state, payload) {
        state.userPage.step = payload.step;
        state.userPage.type = payload.type;

        // if (payload.type === 'email') {
        //     this.$toast('На новый почтовый адрес был отправлен код подтверждения');
        // } else {
        //     this.$toast('На почтовый адрес аккаунта был отправлен код подтверждения');
        // }
    },
    CREATE_AVATAR(state) {
        state.user.avatar.text = state.user.login.split('')[0];
        state.user.avatar.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
};
