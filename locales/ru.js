export default {
    // без переводчика
    linkRule: 'https://forum.aioneffect.com/index.php?/topic/92-общие-правила-проекта/',

    classes: {
        0: 'Воин',
        1: 'Гладиатор',
        2: 'Страж',
        3: 'Следопыт',
        4: 'Убийца',
        5: 'Стрелок',
        6: 'Маг',
        7: 'Волшебник',
        8: 'Заклинатель',
        9: 'Жрец',
        10: 'Целитель',
        11: 'Чародей',
        12: 'Инженер',
        13: 'Пилот',
        14: 'Снайпер',
        15: 'Артист',
        16: 'Бард',
    },
    login: {
        mainTitle: 'Авторизация',

        login: {
            label: 'Логин',
            placeholder: 'Введите имя пользователя',
        },
        password: {
            label: 'Пароль',
            placeholder: 'Введите пароль'
        },
        remember: 'Запомнить меня',
        forgot: 'Забыли пароль?',
        btn: 'Войти',
        register: 'Создать учетную запись'
    },

    monthsRu: '1',

    registration: {
        mainTitle: 'Регистрация',

        login: {
            label: 'Логин',
            placeholder: 'Введите имя пользователя',
        },
        email: {
            label: 'Почта',
            placeholder: 'Введите электронный адрес',
        },
        password: {
            label: 'Пароль',
            placeholder: 'Введите пароль'
        },
        passconf: {
            label: 'Повторите пароль',
            placeholder: 'Введите пароль'
        },
        conf: {
            label: 'Повторите пароль',
            placeholder: 'Введите пароль'
        },
        loginAlso: 'У меня уже есть учетная запись',
        remember: 'Запомнить меня',
        forgot: 'Забыли пароль?',
        btn: 'Создать аккаунт',
        register: 'Создать учетную запись'
    },

    forgot: {
        mainTitle: 'Восстановить пароль',
        desc: 'Пожалуйста введите почтовый адрес аккаунта, Вам будет направлено письмо с регистрационными данными.',

        email: {
            label: 'Почта',
            placeholder: 'Введите электронный адрес',
        },
        btn: 'Отправить',
    },

    restorePass: {
        mainTitle: 'Введите новый пароль',

        password: {
            label: 'Новый пароль',
            placeholder: 'Введите новый пароль',
        },
        passconf: {
            label: 'Повторите новый пароль',
            placeholder: 'Введите новый пароль',
        },
        btn: 'Отправить',
    },

    acceptReg: {
        mainTitle: 'Поздравляем!',
        desc1: 'Аккаунт успешно зарегистрирован.',
        desc2: 'Теперь вы можете войти в свой личный кабинет.',
        btn: 'Войти',
    },

    checkRegister: {
        mainTitle: 'Проверьте свою почту',
        desc1: 'Мы отправили вам электронное письмо со ссылкой ',
        desc2: 'для активации аккаунта',
        desc3: 'Не получили письмо?',
        desc4: 'Проверьте свой спам-фильтр или попробуйте другой адрес электронной почты',
        btn: 'Войти',
    },

    header: {
        title: {
            profile: {
                title: 'Мой профиль',
                desc: 'Информация об аккаунте'
            },
            shop: {
                title: 'Магазин',
                desc: 'Уникальные айтемы'
            }
        },
        forum: 'Форум',
        help: 'Поддержка',
        menu: {
            promo: 'Промокод',
            history: 'История',
            logout: 'Сменить аккаунт',
            exit: 'Выход'
        }
    },

    sideBar: {
        profile: 'Мой профиль',
        shop: 'Магазин',
        achievements: 'Достижения',
        rating: 'Рейтинг',
        fortune: 'Колесо удачи'
    },

    profile: {
        balance: 'Баланс',
        myAccount: 'Мой аккаунт',
        listCharacters: 'Список персонажей',
        level: 'Ур.',

        accountCard: {
            lastLogin: 'Последний вход в личный кабинет',
            changePass: 'Изменение пароля',
            registration: 'Регистрация'
        }
    },

    checkbox: {
        accept: 'Я ознакомился(-ась) с',
        rules: 'правилами'
    },

    promoModal: {
        title: 'Активация промокода',
        desc: 'Если у вас есть промокод, его можно активировать здесь.',
        code: {
            label: 'Промокод',
            placeholder: 'Введите код'
        },
        btn: 'Активировать',
    },

    userData: {
        changePass: {
            title: 'Изменить пароль',
            password: {
                label: 'Новый пароль',
                placeholder: 'Введите новый пароль'
            },
            passconf: {
                label: 'Повторите новый пароль',
                placeholder: 'Введите новый пароль'
            },
            btn: 'Изменить пароль'
        },
        changeEmail: {
            title: 'Изменить почтовый адрес',
            email: {
                label: 'Новая почта',
                placeholder: 'Введите почту'
            },
            btn: 'Изменить почту'
        }
    },

    notif: {
        listChar: {
            accept: 'Персонаж успешно отправлен в столицу',
            errOnline: 'Чтобы использовать эту функцию, персонаж должен быть вне игры'
        },

        userData: {
            accept: 'На адрес электронной почты учетной записи было отправлено письмо с подтверждением'
        },

        acceptReg: {
            accept: 'Аккаунт успешно зарегистрирован'
        },

        changeEmail: {
            accept: 'Почтовый адрес учетной записи был успешно обновлен'
        },

        changePassword: {
            accept: 'Пароль учетной записи был успешно обновлен'
        },

        forgot: {
            accept: 'На указанный адрес электронной почты учетной записи было отправлено письмо с подтверждением'
        },

        restorePass: {
            accept: 'Ваш пароль успешно изменен'
        },

        paymentMeth: {
            error: 'Ошибка платежа. Повторите позже',
            accept: 'Оплата прошла успешно, спасибо за пожертвование!'
        },
        ruleEffect: {
            error: 'Вы должны согласиться с правилами пожертвования'
        },
        bonusModal: {
            accept: 'Обмен прошел успешно'
        }
    },

    effectModal: {
        desc: 'При пожертвовании вы получаете 10% от суммы в виде бонусов.',
        paymentMethod: 'Способ оплаты',
        label: 'Количество монет',
        accept1: 'Я согласен с ',
        accept2: 'правилами пожертвования',
        btn: 'Продолжить'
    },

    effectRules: {
        title: 'Правила пожертвования',
        desc1: 'Делая пожертвование, вы не покупаете какой-либо продукт или услугу.',
        desc2: 'Чтобы выразить свою благодарность, мы вознаграждаем доноров в обмен на их поддержку.',
        desc3: 'Coin of Effect это награда за добровольное пожертвование от частного лица.',
        desc4: 'Пожертвования используются для поддержания работы сервера, а так же для улучшения проекта.',
        desc5: 'Все сделанные транзакции являются окончательными и не подлежат возврату.',
        btn: 'Назад'
    },

    paypalModal: {
        desc1: 'Администрация проекта Aion Effect к сожалению не можем добавить автоматический обработчик платежей через PayPal. Поэтому было принято решение обрабатывать платежи вручную через Discord.',
        desc2: 'Свяжитесь с главным администратором проекта',
        desc3: 'Напишите, что вы хотите пополнить свой кошелек через PayPal, обязательно укажите логин своей учетной записи и сумму, которую необходимо зачислить.',
        btn: 'Назад'
    },

    bonusModal: {
        title: 'Как я могу получить Bonus?',
        desc1: 'За каждый час, проведенный в игре, мы начисляем вам 5 бонусов.',
        desc2: 'При пожертвовании вы получаете 10% от суммы в виде бонусов.',
        title2: 'Обменивайте свои бонусы',
        desc3: '10 бонусов можно обменять на Coin of Effect',
        calc1: 'Ваш баланс',
        calc2: 'К обмену',
        calc3: 'Вы получите',
        calc4: 'Остаток',
        btn: 'Обменять'
    },

    history: {
        tabs: {
            account: 'Аккаунт',
            donate: 'Пожертвования',
            promo: 'Промокод'
        },
        account: {
            action: 'Действие',
            date: 'Дата'
        }
    },
};
