<template>
    <div class="login">
        <form class="login__form"
              @submit.prevent="userRegister"
        >
            <h2 class="login__title">
                {{ $t('registration.mainTitle') }}
            </h2>

            <div class="login__item">
                <AppInput :label="$t('registration.login.label')"
                          :placeholder="$t('registration.login.placeholder')"
                          :value="login"
                          :error="errors.login"
                          @input="setValueLogin"
                          @focus="clearError('login')"
                />
            </div>

            <div class="login__item">
                <AppInput :label="$t('registration.email.label')"
                          :placeholder="$t('registration.email.placeholder')"
                          type="text"
                          :value="email"
                          :error="errors.email"
                          @input="setValueEmail"
                          @focus="clearError('email')"
                />
            </div>

            <div class="login__item">
                <AppInput :label="$t('registration.password.label')"
                          :placeholder="$t('registration.password.placeholder')"
                          type="password"
                          :value="password"
                          :error="errors.password"
                          @input="setValuePassword"
                          @focus="clearError('password')"
                />
            </div>

            <div class="login__item">
                <AppInput :label="$t('registration.passconf.label')"
                          :placeholder="$t('registration.passconf.placeholder')"
                          type="password"
                          :value="passconf"
                          :error="errors.passconf"
                          @input="setValueRePassword"
                          @focus="clearError('passconf')"
                />
            </div>

            <div class="login__help">
                <AppCheckbox :rules="true"
                             :checked="rule"
                             @click-check="setRule" />
            </div>

            <AppButton :text="$t('registration.btn')"
                       :disabled="!btnEnable"
                       class="login__button"
            />

            <nuxt-link :to="localePath('/login')"
                       class="login__create">
                {{ $t('registration.loginAlso') }}
            </nuxt-link>
        </form>
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
                login: '',
                email: '',
                password: '',
                passconf: '',
                rule: false,
                errors: {
                    login: '',
                    email: '',
                    password: '',
                    passconf: ''
                },

                disabled: false,
            };
        },

        computed: {
            btnEnable() {
                return this.login && this.email && this.password && this.passconf && this.rule;
            }
        },

        methods: {
            async userRegister() {
                if (!this.disabled) {
                    try {
                        const data = {
                            login: this.login,
                            email: this.email,
                            password: this.password,
                            passconf: this.passconf,
                            rules: this.rule,
                        };

                        if (this.$router.history.current.query.userReferral) {
                            data.referral = Number(this.$router.history.current.query.userReferral);
                        }


                        await this.$recaptcha.execute('register');

                        await this.$axios.$post('/user/registration', data);

                        localStorage.setItem('userEmail', this.email);

                        await this.$router.push(this.localePath('/login/check-register'));
                    } catch (err) {
                        console.log(err.response);

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
                    }
                } else {
                    this.$toast.error('Регистрация в данный момент недоступена');
                }
            },

            loginUsed() {
                this.$toast('Такой логин уже используется!', {
                    toastClassName: 'toastMain',
                });
            },

            setValueLogin(val) {
                this.login = val;
            },
            setValueEmail(val) {
                this.email = val;
            },
            setValuePassword(val) {
                this.password = val;
            },
            setValueRePassword(val) {
                this.passconf = val;
            },

            setRule() {
                this.rule = !this.rule;
            },

            clearError(val) {
                this.errors[val] = '';
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
            font-weight: bold;
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
            display: block;
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
