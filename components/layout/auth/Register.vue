<template>
    <div class="login">
        <h2 class="login__title">
            Регистрация
        </h2>

        <div class="login__item">
            <AppInput :value="login"
                      label="Логин"
                      placeholder="Введите имя пользователя"
                      @input="changeLogin"
            />
        </div>

        <div class="login__item">
            <AppInput label="Почта"
                      type="text"
                      placeholder="Введите электронный адрес" />
        </div>

        <div class="login__item">
            <AppInput label="Пароль"
                      type="password"
                      placeholder="Введите пароль" />
        </div>

        <div class="login__item">
            <AppInput label="Повторите пароль"
                      type="password"
                      placeholder="Введите пароль" />
        </div>

        <div class="login__help">
            <AppCheckbox :rules="true" />
        </div>

        <AppButton text="Создать аккаунт"
                   :disabled="true"
                   class="login__button"
        />

        <div class="login__create"
             @click="registerSubmit">
            У меня уже есть учетная запись
        </div>
    </div>
</template>

<script>
    import AppInput from '~/components/ui/inputs/AppInput';
    import AppCheckbox from '~/components/ui/inputs/AppCheckbox';
    import AppButton from '~/components/ui/inputs/AppButton';
    export default {
        name: 'Register',
        components: {AppButton, AppCheckbox, AppInput},

        data() {
            return {
                login: 'admin'
            };
        },

        methods: {
            registerSubmit() {
                this.login !== 'admin' ? this.loginUsed() : this.$emit('change-step', 'login');
            },

            loginUsed() {
                this.$toast('Такой логин уже используется!', {
                    toastClassName: 'toastMain',
                });
            },

            changeLogin(val) {
                console.log(val);
                this.login = val;
            }
        }
    };
</script>

<style lang="scss" scoped>

    .login {
        max-width: 38rem;
        width: 100%;
        padding: 3.2rem 3.4rem;
        border-radius: 40px;
        background-color: $lightdark;

        &__title {
            font-size: 1.8rem;
            opacity: .9;
            text-align: center;
            margin-bottom: 3.2rem;
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
        }

        &__button {
            height: 5.4rem;
        }
    }
</style>
