<template>
    <!--    <transition name="fade" v-if="!l">-->
    <!--        -->
    <!--    </transition>-->
    <div :class="$style.Account">
        <div :class="$style.head">
            <div :class="$style.row">
                <div :class="[$style.column1, $style.cell]">
                    ID
                </div>
                <div :class="[$style.column2, $style.cell]">
                    IP
                </div>
                <div :class="[$style.column3, $style.cell]">
                    {{ $t('history.account.action') }}
                </div>
                <div :class="[$style.column4, $style.cell]">
                    {{ $t('history.account.date') }}
                </div>
            </div>

        </div>

        <transition name="fade">
            <div v-if="history.logs.length"
                 :class="$style.table">
                <!--            <transition-group name="fade"-->
                <!--                              mode="in-out"-->
                <!--                              tag="div">-->

                <div v-for="log in history.logs"
                     :key="log.id"
                     :class="$style.row">
                    <div :class="[$style.column1, $style.cell]">
                        {{ log.id }}
                    </div>
                    <div :class="[$style.column2, $style.cell]">
                        {{ log.ip }}
                    </div>
                    <div :class="[$style.column3, $style.cell]">
                        {{ log.msg }}
                    </div>
                    <div :class="[$style.column4, $style.cell]">
                        {{ getDate(log.date) }}
                    </div>
                </div>
            <!--            </transition-group>-->
            </div>

        </transition>

        <Pagination v-if="history.page_all !== 1"
                    :all-pages="history.page_all"
                    :current-page="currentPage"
                    :class="$style.pagination"
                    @change-page="changePage"
        />

    </div>
</template>

<script>
    import {mapState} from 'vuex';
    // import {state, actions} from 'store/user';
    import {timestampToDate} from 'assets/js/utils/commonUtils';
    import Pagination from '@/components/pages/history/Pagination';

    export default {
        name: 'Account',
        components: {Pagination},
        data() {
            return {
                currentPage: '1',
            };
        },

        computed: {
            ...mapState({
                userId: state => state.user.user.id,
                history: state => state.user.history.account
            }),
        },

        async mounted() {
            await this.changePage(1);
        },

        methods: {
            getDate(val) {
                return timestampToDate(val, 'history', this.$t('monthsRu'));
            },

            async changePage(page) {
                await this.$store.dispatch('user/getHistoryAccount', page);
                this.currentPage = page;
            },

            // nameOfAction(name) {
            //     switch (name) {
            //         case 'User::login':
            //             return 'Вход в личный кабинет';
            //         case 'User::forgotConfirmationPassword':
            //             return 'Восстановление пароля';
            //         case 'User::changeConfirmationPassword':
            //             return 'Подтверждение нового пароля';
            //         case 'User::forgotPassword':
            //             return 'Изменение пароля';
            //         case 'User::changePassword':
            //             return 'Изменение пароля';
            //         case 'User::confirmEmail':
            //             return 'Подтверждение электронной почты';
            //         case 'User::changeEmail':
            //             return 'Изменение электронной почты';
            //         case 'User::changeConfirmationForEmail':
            //             return 'Подтверждение новой электронной почты';
            //     }
            //     return name;
            // }
        },
    };
</script>

<style module lang="scss">
    .head {
        .row {
            border-bottom: 0;
        }
    }

    .table .row:hover .cell {
        opacity: 1;
    }

    .row {
        display: flex;
        border-bottom: 1px solid rgba(#fff, .04);
    }

    .cell {
        width: 100%;
        margin-right: 8.4rem;
        padding: 2.2rem 0;
        opacity: .4;
        font-weight: 500;
        transition: opacity $transition;

        &:first-child {
            padding-left: 2rem;
        }

        &:last-child {
            margin-right: 0;
            padding-right: 3.2rem;
        }
    }

    // columns

    .column1 {
        max-width: 6.2rem;
    }

    .column2 {
        max-width: 7rem;
    }

    .column3 {
        max-width: 100%;
    }

    .column4 {
        margin-left: auto;
        width: 23rem;
        flex-shrink: 0;
    }

    .pagination {
        width: fit-content;
        margin: 5rem auto 0;
        padding-bottom: 4.2rem;
    }
</style>
