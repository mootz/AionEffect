<template>
    <div class="login">
        <h2 class="login__title">
            Напомнить пароль
        </h2>

        <div class="login__info">
            Пожалуйста введите почтовый адрес аккаунта, Вам будет направлено письмо
            с регистрационными данными.
        </div>

        <div class="login__item">
            <AppInput label="Почта"
                      :value="email"
                      :error="errors.email"
                      placeholder="Введите электронный адрес"
                      @input="email = $event"
                      @focus="clearError"
            />
        </div>

        <AppButton text="Отправить"
                   class="login__button"
                   @click.native="resetPass"
        />
    </div>
</template>

<script>
    import AppInput from '~/components/ui/inputs/AppInput';
    import AppButton from '~/components/ui/inputs/AppButton';
    export default {
        name: 'Forgot',
        components: {AppButton, AppInput},
        data() {
            return {
                email: '',
                errors: {
                    email: ''
                }
            };
        },
        methods: {
            async resetPass() {
                try {
                    const res = await this.$axios.$post('/user/forgot-password', {email: this.email});
                    console.log(res);
                    this.$emit('change-step', 'login');
                } catch (err) {
                    console.warn(err.response);
                    if (err?.response?.data?.validation) {
                        this.$toast.error(err.response.data.validation.email);
                        this.errors.email = err.response.data.validation.email;
                    } else {
                        this.$toast.error(err.response.data.result_msg);
                    }
                }
            },

            clearError() {
                this.errors.email = '';
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
            margin-bottom: 3.2rem;
        }

        &__info {
            text-align: center;
            font-size: 1.4rem;
            font-weight: 500;
            opacity: .4;
            margin-bottom: 2.4rem;
        }

        &__button {
            height: 5.4rem;
        }
    }
</style>
