<template>
    <div :class="$style.login">
        <h2 :class="$style.login__title">
            Авторизация
        </h2>

        <div :class="$style.login__item">
            <AppInput label="Логин"
                      placeholder="Введите имя пользователя" />
        </div>

        <div :class="$style.login__item">
            <AppInput label="Пароль"
                      type="password"
                      placeholder="Введите пароль" />
        </div>

        <div :class="$style.login__help">
            <AppCheckbox label="Запомнить меня" />

            <a href="#"
               :class="$style.login__forgot"
               @click="$emit('change-step', 'forgot')">Забыли пароль?</a>
        </div>

        <AppButton text="Войти"
                   :class="$style.login__button"
                   @click.native="$router.push('/')"
        />
        <!--                           @click.native="$emit('change-step', 'acceptRegister')"
-->

        <a href="#"
           :class="[$style.login__forgot, $style._mobile]"
           @click="$emit('change-step', 'forgot')">Забыли пароль?</a>

        <div :class="$style.login__create"
             @click="$emit('change-step', 'register')">
            Создать учетную запись
        </div>
    </div>
</template>

<script>
    import AppInput from '~/components/ui/inputs/AppInput';
    import AppCheckbox from '~/components/ui/inputs/AppCheckbox';
    import AppButton from '~/components/ui/inputs/AppButton';

    export default {
        name: 'Login',
        components: {AppButton, AppCheckbox, AppInput},
    };
</script>

<style lang="scss" module>
    .login {
        max-width: 38rem;
        width: 100%;
        padding: 3.2rem 3.4rem;
        border-radius: 40px;
        background-color: $lightdark;

        @media screen and (max-width: 768px) {
            max-width: 400px;
        }

        &__title {
            font-size: 1.8rem;
            opacity: .9;
            text-align: center;
            margin-bottom: 3.2rem;
            font-weight: bold;
        }

        &__item {
            margin-bottom: 1.4rem;
        }

        &__help {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;
            font-size: 1.4rem;
            margin-bottom: 3.2rem;
            margin-top: 2.4rem;
        }

        &__create {
            font-weight: 500;
            font-size: 1.4rem;
            margin: 3.2rem auto 0;
            text-align: center;
            cursor: pointer;

            @include respond-to(768) {
                margin-top: 1.4rem;
            }
        }

        &__forgot {
            font-size: 1.4rem;
            font-weight: 500;

            &._mobile {
                display: none;
            }

            @include respond-to(xs) {
                display: none;

                &._mobile {
                    display: block;
                    margin-top: 3.2rem;
                    text-align: center;
                }
            }
        }

        &__button {
            height: 5.4rem;
        }
    }
</style>
