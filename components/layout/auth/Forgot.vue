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
                      placeholder="Введите электронный адрес" />
        </div>

        <AppButton text="Отправить"
                   class="login__button"
                   @click.native="$emit('change-step', 'login')"
        />
    </div>
</template>

<script>
    import AppInput from '~/components/ui/inputs/AppInput';
    import AppButton from '~/components/ui/inputs/AppButton';
    export default {
        name: 'Forgot',
        components: {AppButton, AppInput}
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
