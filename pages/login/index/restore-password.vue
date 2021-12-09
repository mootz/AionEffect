<template>
    <div class="login">
        <h2 class="login__title">
            {{ $t('restorePass.mainTitle') }}
        </h2>

        <div class="login__item">
            <AppInput :label="$t('restorePass.password.label')"
                      :placeholder="$t('restorePass.password.placeholder')"
                      :value="password"
                      :error="errors.password"
                      type="password"
                      @input="password = $event"
                      @focus="clearError('password')"
            />
        </div>

        <div class="login__item">
            <AppInput :label="$t('restorePass.passconf.label')"
                      :placeholder="$t('restorePass.passconf.placeholder')"
                      :value="passconf"
                      :error="errors.passconf"
                      type="password"
                      @input="passconf = $event"
                      @focus="clearError('passconf')"
            />
        </div>

        <AppButton :text="$t('restorePass.btn')"
                   class="login__button"
                   @click.native="resetPass"
        />
    </div>
</template>

<script>
    import AppInput from '~/components/ui/inputs/AppInput';
    import AppButton from '~/components/ui/inputs/AppButton';
    export default {
        name: 'RestorePassword',
        components: {AppButton, AppInput},
        data() {
            return {
                password: '',
                passconf: '',
                errors: {
                    password: '',
                    passconf: ''
                }
            };
        },

        mounted() {
            this.$auth.options.redirect.login = '/login';
        },

        methods: {
            async resetPass() {
                try {
                    const data = {
                        token: this.$router.history.current.query.token,
                        password: this.password,
                        passconf: this.passconf
                    };

                    await this.$axios.$post('/user/forgot-confirmation-password', data);
                    this.$toast.success(this.$t('notif.restorePass.accept'));
                    this.$router.push(this.localePath('/login'));
                } catch (err) {
                    console.warn('Restore password: ', err.response);
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
            },

            clearError(name) {
                this.errors[name] = '';
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
