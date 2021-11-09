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
                              @submit.prevent="changeDataStep({step: 2, type: 'password'})">
                            <p class="labelName">
                                Изменить пароль
                            </p>

                            <div :class="$style.formItem">
                                <AppInput label="Текущий пароль"
                                          type="password"
                                          placeholder="Введите текущий пароль"
                                />
                            </div>

                            <div :class="$style.formItem">
                                <AppInput label="Новый пароль"
                                          type="password"
                                          placeholder="Введите новый пароль"
                                />
                            </div>

                            <div :class="$style.formItem">
                                <AppInput label="Повторите новый пароль"
                                          type="password"
                                          placeholder="Повторите новый пароль"
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
                              @submit.prevent="changeDataStep({step: 2, type: 'email'})"
                        >
                            <p class="labelName">
                                Изменить почтовый адрес
                            </p>

                            <div :class="$style.formItem">
                                <AppInput label="Новая почта"
                                          placeholder="Введите почту"
                                />
                            </div>

                            <div :class="$style.formItem">
                                <AppInput label="Пароль"
                                          type="password"
                                          placeholder="Введите пароль"
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
                                               text="Подтвердить"
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

        computed: {
            ...mapState({
                userPage: state => state.user.userPage
            })
        },
        methods: {
            ...mapActions({
                changeDataStep: 'user/changeDataStep',
                leaveDataChange: 'user/leaveDataChange'
            })
        }
    };
</script>

<style module lang="scss">
    .UserData {
        padding: 3.2rem;
        background: $lightdark;
        border-radius: 40px;
        overflow-y: auto;
        max-height: 100%;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .form {
        margin-bottom: 3.2rem;

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
        margin-top: 3.2rem;
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
</style>
