<template>
    <transition name="fade">
        <div :class="$style.UserData">
            <transition name="fade"
                        mode="out-in">
                <div v-if="userPage.step === 1"
                     key="dataChange"
                >
                    <div>

                        <form :class="$style.form"
                              @submit.prevent="changePassword">
                            <p :class="['labelName', $style.labelName]">
                                Изменить пароль
                            </p>

                            <div :class="$style.formItem">
                                <AppInput label="Новый пароль"
                                          type="password"
                                          placeholder="Введите новый пароль"
                                          :value="password"
                                          :error="errors.password"
                                          @input="setInputNewPass"
                                          @focus="clearInputError('password')"
                                />
                            </div>

                            <div :class="$style.formItem">
                                <AppInput label="Повторите новый пароль"
                                          type="password"
                                          placeholder="Введите новый пароль"
                                          :value="passconf"
                                          :error="errors.passconf"
                                          @input="setInputNewPassConf"
                                          @focus="clearInputError('passconf')"
                                />
                            </div>

                            <div :class="$style.buttonWrap">
                                <div :class="$style.button">
                                    <AppButton height="5.4rem"
                                               text="Изменить пароль"
                                    />
                                </div>
                            </div>
                        </form>

                        <form :class="$style.form"
                              @submit.prevent="changeEmail"
                        >
                            <p :class="['labelName', $style.labelName]">
                                Изменить почтовый адрес
                            </p>

                            <div :class="$style.formItem">
                                <AppInput label="Новая почта"
                                          placeholder="Введите почту"
                                          :value="email"
                                          :error="errors.email"
                                          @input="setEmail"
                                          @focus="clearInputError('email')"
                                />
                            </div>

                            <div :class="$style.buttonWrap">
                                <div :class="$style.button">
                                    <AppButton height="5.4rem"
                                               text="Изменить почту"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div v-else-if="userPage.step === 2"
                     key="acceptChange"
                >
                    <div>
                        <div :class="$style.form">
                            <p class="labelName">
                                Код подтверждение
                            </p>

                            <p :class="$style.text">
                                Введите полученный код в соответствующее поле и нажмите кнопку.
                            </p>

                            <div :class="$style.formItem">
                                <AppInput label="Код подтверждения"
                                          placeholder="Введите код"
                                />
                            </div>

                            <div :class="$style.buttonWrap">
                                <div :class="$style.button">
                                    <AppButton height="5.4rem"
                                               text="Продолжить"
                                               @click.native="leaveDataChange"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </transition>

        </div>
    </transition>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import AppInput from '@/components/ui/inputs/AppInput';
    import AppButton from '@/components/ui/inputs/AppButton';
    export default {
        name: 'UserData',
        components: {AppButton,
                     AppInput},

        data() {
            return {
                password: '',
                passconf: '',
                email: '',

                errors: {
                    password: '',
                    passconf: '',
                    email: ''
                }
            };
        },

        computed: {
            ...mapState({
                userPage: state => state.user.userPage
            })
        },
        methods: {
            ...mapActions({
                changeDataStep: 'user/changeDataStep',
                leaveDataChange: 'user/leaveDataChange'
            }),

            async changePassword() {
                try {
                    const data = {
                        password: this.password,
                        passconf: this.passconf,
                    };
                    await this.$axios.$post(`user/${localStorage['auth.userId']}/change-password`, data);

                    this.password = '';
                    this.passconf = '';

                    this.$toast('На почтовый адрес аккаунта была отправлена ссылка подтверждения');
                } catch (err) {
                    console.warn('changePass: ', err.response);

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

            async changeEmail() {
                try {
                    const data = {
                        email: this.email,
                    };
                    await this.$axios.$post(`user/${localStorage['auth.userId']}/change-email`, data);

                    this.email = '';

                    this.$toast('На новый почтовый адрес была отправлена ссылка подтверждения');
                } catch (err) {
                    console.warn('changeEmail: ', err.response);

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

            setInputNewPass(val) {
                this.password = val;
            },

            setInputNewPassConf(val) {
                this.passconf = val;
            },

            setEmail(val) {
                this.email = val;
            },

            clearInputError(name) {
                this.errors[name] = '';
            }
        }
    };
</script>

<style module lang="scss">
    .UserData {
        padding: 3.2rem;
        background: $lightdark;
        border-radius: 40px;
        overflow-y: hidden;
        max-height: 100%;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .form {
        margin-bottom: 2.8rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .formItem {
        margin-bottom: 1.4rem;
    }

    .buttonWrap {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: 3rem;
    }

    .button {
        height: 5.4rem;
        width: 17.4rem;
    }

    .text {
        margin: 3.2rem 0 2.4rem;
        font-size: 1.4rem;
        opacity: .4;
    }

    .labelName {
        margin-bottom: 1.2rem;
    }
</style>
