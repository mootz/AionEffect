<template>
    <div class="login">
        <h2 class="login__title">
            Поздравляем!
        </h2>

        <div class="login__info">
            Аккаунт успешно зарегистрирован.
            Теперь вы можете войти в свой личный кабинет.
        </div>

        <AppButton text="Войти"
                   class="login__button"
                   @click.native="$emit('change-step', 'login')"
        />
    </div>
</template>

<script>
    import AppButton from '~/components/ui/inputs/AppButton';
    export default {
        name: 'AcceptRegister',
        components: {AppButton}
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
            margin-bottom: 3.2rem;
        }

        &__button {
            height: 5.4rem;
        }
    }
</style>
