export const state = () => ({
    user: {
        login: 'Overlord',
        avatar: 'images/avatar_placeholder.jpg',
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
                'class2?': 'Паладин',
                level: 40,
                online: false
            }
        ],

        // реферальная программа
        refferal: {
            url: 'ссылка для приглашения',
            invited: 'сколько игроков приглашено'
        },
    },
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
