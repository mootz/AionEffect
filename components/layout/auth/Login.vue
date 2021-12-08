<template>
    <div :class="$style.login">
        <!--prime:0373ed8b-->
        <h2 :class="$style.login__title">
            Авторизация
        </h2>

        <form :class="$style.form"
              @submit.prevent="userLogin">

            <div :class="$style.login__item">
                <AppInput label="Логин"
                          placeholder="Введите имя пользователя"
                          :value="login"
                          :error="errors.login"
                          @focus="clearError('login')"
                          @input="setLoginValue"
                />
            </div>

            <div :class="$style.login__item">
                <AppInput label="Пароль"
                          type="password"
                          placeholder="Введите пароль"
                          :value="password"
                          :error="errors.login"
                          @focus="clearError('password')"
                          @input="setPasswordValue"
                />
            </div>

            <div :class="$style.login__help"
            >
                <div :class="$style.saveMe">
                    <AppCheckbox label="Запомнить меня"
                                 :checked="remember"
                                 @click.stop.prevent.native="setRemember"
                    />
                </div>

                <p :class="[$style.login__forgot, {[$style._disabled]: disabled}]"
                   @click="disabled ? null : $router.push('/login/forgot')">
                    Забыли пароль?
                </p>
            </div>

            <AppButton text="Войти"
                       :class="$style.login__button"
                       submit
            />
            <!--                           @click.native="$emit('change-step', 'acceptRegister')"
-->

            <a href="#"
               :class="[$style.login__forgot, $style._mobile, {[$style._disabled]: disabled}]"
               @click="disabled ? null : $router.push('/login/forgot')">Забыли пароль?</a>

            <div :class="[$style.login__create, {[$style._disabled]: disabled}]"
                 @click="disabled ? null : $router.push('/login/register')">
                Создать учетную запись
            </div>
        </form>

    </div>
</template>

<script>
    import AppInput from '~/components/ui/inputs/AppInput';
    import AppCheckbox from '~/components/ui/inputs/AppCheckbox';
    import AppButton from '~/components/ui/inputs/AppButton';

    export default {
        name: 'Login',
        components: {AppButton, AppCheckbox, AppInput},

        data() {
            return {
                login: '',
                password: '',
                remember: false,
                errors: {
                    login: '',
                    password: ''
                },

                disabled: true
            };
        },

        methods: {
            async userLogin() {
                if (this.login === '123125215') {
                    await this.$auth.loginWith('local', {data: {
                        login: this.login,
                        password: this.password,
                        remember: Number(this.remember)
                    }}).then(res => {
                        const user = {
                            id: res.data.id,
                            token: res.data.token,
                            session_end: res.data.session_end
                        };
                        this.$auth.$storage.setUniversal('userId', user.id);

                        this.$router.push('/');
                    })
                        .catch(err => {
                            if (err.response.data.validation) {
                                const listErrors = Object.entries(err.response.data.validation);

                                listErrors.forEach((e, index) => {
                                    setTimeout(() => {
                                        this.errors[e[0]] = e[1];
                                        this.$toast.error(e[1], {timeout: 5000});
                                    }, index * 500);
                                });
                            } else {
                                this.$toast.error(err.response.data.result_msg);
                            }
                        });
                } else {
                    this.$toast.error('Личный кабинет в данный момент недоступен');
                }
            },

            setPasswordValue(val) {
                this.password = val;
            },

            setLoginValue(val) {
                this.login = val;
            },

            setRemember() {
                this.remember = !this.remember;
            },

            clearError(val) {
                this.errors[val] = '';
            }
        }
    };
</script>

<style lang="scss" module>
    .form {
        width: 100%;
    }

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
            cursor: pointer;

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

    ._disabled {
        pointer-events: none;
        opacity: .2;
    }

    .saveMe {
        cursor: pointer;
    }
</style>
