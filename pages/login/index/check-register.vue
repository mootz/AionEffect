<template>
    <div class="login">
        <h2 class="login__title">
            Проверьте свою почту
        </h2>

        <div class="login__info">

            Мы отправили вам электронное письмо
            со ссылкой на <span>{{ email }}</span> <br>
            для активации аккаунта<br><br>

            Не получили письмо? <br>
            Проверьте свой спам-фильтр или попробуйте другой адрес электронной почты
        </div>

        <AppButton text="Войти"
                   class="login__button"
                   @click.native="$router.push('/login')"
        />
    </div>
</template>

<script>
    import AppButton from '~/components/ui/inputs/AppButton';
    export default {
        name: 'AcceptRegister',
        components: {AppButton},
        data() {
            return {
                email: 'email@aioneffect.com'
            };
        },
        mounted() {
            this.email = localStorage.getItem('userEmail');
        },

        methods: {
            goNext() {
                this.$emit('change-step', 'login');
                localStorage.removeItem('userEmail');
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
            margin-bottom: 3.2rem;
            font-size: 1.8rem;
            opacity: .9;
            text-align: center;
            font-weight: bold;
        }

        &__item {
            margin-bottom: 3.2rem;
        }

        &__info {
            text-align: center;
            font-size: 1.4rem;
            font-weight: 500;
            color: rgba(#fff, .4);
            margin-bottom: 3.2rem;

            span {
                color: #fff;
            }
        }

        &__button {
            height: 5.4rem;
        }
    }
</style>
