export const state = () => ({
    user: {
        login: 'Overlord',
        avatar: {
            text: '',
            color: '',
        },
        email: 'aioneffect@mail.ru',
        // последний вход в игру
        last_entrance: '17 августа в 22:53',
        // дата регистрации
        register_date: '06 мая 2013',
        // последняя смена пароля
        last_change_password: '10 августа в 22:53',
        coins: {
            effect: '12,241',
            bonus: '102',
            kinah: '726'
        },
        characters: [
            {
                name: 'Assassin',
                class: 'Убийца',
                level: 40,
                online: false
            },
            {
                name: 'Hello',
                class: 'Лучник',
                level: 12,
                online: true
            }
        ],

        // реферальная программа
        refferal: {
            url: 'ссылка для приглашения',
            invited: '66',
            gifts: '2'
        },

        // уведомления
        notifications: [
            {
                type: 'bonus',
                text: 'Спасибо за поддержку! Вам начислено 23 Bonus'
            },
            {
                type: 'bonus',
                text: 'Спасибо за поддержку! Вам начислено 23 Bonus'
            },
            {
                type: 'bonus',
                text: 'Спасибо за поддержку! Вам начислено 23 Bonus'
            },
            {
                type: 'bonus',
                text: 'Спасибо за поддержку! Вам начислено 23 Bonus'
            },
            {
                type: 'bonus',
                text: 'Спасибо за поддержку! Вам начислено 23 Bonus'
            },
            {
                type: 'bonus',
                text: 'Спасибо за поддержку! Вам начислено 23 Bonus'
            },
            {
                type: 'bonus',
                text: 'Спасибо за поддержку! Вам начислено 23 Bonus'
            },
        ]
    },

    userPage: {
        dataChange: false,
        step: 1,
        type: ''
    }
});

export const actions = {
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

        if (payload.type === 'email') {
            this.$toast('На новый почтовый адрес был отправлен код подтверждения');
        } else {
            this.$toast('На почтовый адрес аккаунта был отправлен код подтверждения');
        }
    },
    CREATE_AVATAR(state) {
        state.user.avatar.text = state.user.login.split('')[0];
        state.user.avatar.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
};
