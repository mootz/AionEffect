<template>
    <div :class="$style.HomePage">
        <div class="containerWSide">
            <div class="lSide">
                <div :class="$style.balanceWrap">
                    <div class="labelName">
                        Баланс
                    </div>

                    <div :class="$style.balanceList">
                        <div :class="$style.balanceItem">
                            <BalanceCard type="effect"
                                         value="12,241"
                            />
                        </div>
                        <div :class="$style.balanceItem">
                            <BalanceCard type="bonus"
                                         value="102"
                            />
                        </div>
                        <div :class="$style.balanceItem">
                            <BalanceCard type="kinah"
                                         value="726"
                            />
                        </div>
                    </div>
                </div>

                <div :class="$style.accountWrap">
                    <div class="labelName">
                        Мой аккаунт
                    </div>

                    <AccountCard :user="user" />
                </div>

                <div :class="$style.refferalWrap">
                    <div class="labelName">
                        Реферальная программа
                    </div>

                    <div :class="$style.refferal">
                        <div :class="$style.buttonWrap">
                            <AppButton text="Скопировать ссылку"
                                       height="100%"
                            />
                        </div>

                        <div :class="$style.number">
                            {{ user.refferal.invited }}
                        </div>
                        <p :class="$style.rText">
                            Игроков приглашено
                        </p>

                        <div :class="$style.rIcons">
                            <div :class="$style.rIconWrap">
                                <div :class="$style.rIcon">
                                    <svg>
                                        <use xlink:href="#icon-gift" />
                                    </svg>
                                </div>
                            </div>
                            <div :class="$style.rIconWrap">
                                <div :class="$style.rIcon">
                                    <svg>
                                        <use xlink:href="#icon-info" />
                                    </svg>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div class="rSide">
                <transition name="fade"
                            mode="out-in">
                    <UserData v-if="userPage.dataChange" />

                    <ListCharacters v-else
                                    :characters="user.characters" />

                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import FormExample1 from '~/components/layout/modals/FormExample1';
    import BalanceCard from '@/components/pages/homePage/BalanceCard';
    import AccountCard from '@/components/pages/homePage/AccountCard';
    import AppButton from '@/components/ui/inputs/AppButton';
    import ListCharacters from '@/components/pages/homePage/ListCharacters';
    import UserData from '@/components/pages/homePage/UserData';

    export default {
        name: 'HomePage',
        components: {UserData,
                     ListCharacters,
                     AppButton,
                     AccountCard,
                     BalanceCard},

        computed: {
            ...mapState({
                user: state => state.user.user,
                userPage: state => state.user.userPage
            })
        },

        methods: {
            openModal() {
                this.$modal.open(FormExample1);
            },
        },
    };
</script>

<style lang="scss" module>
    .balanceWrap {
        margin-bottom: 3.2rem;
    }

    .balanceList {
        display: flex;
        justify-content: space-between;
    }

    .balanceItem {
        width: calc(33% - 1.5rem);
    }

    .refferalWrap {
        margin-top: 3.2rem;
    }

    .refferal {
        display: flex;
        align-items: center;
        padding: 3.2rem;
        border-radius: 40px;
        background-color: $lightdark;
    }

    .rIcons {
        margin-left: auto;
        display: flex;
    }

    .rIconWrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.4rem;
        height: 5.4rem;
        margin-right: 1.2rem;
        border-radius: 100%;
        border: 1px solid #fff;
        opacity: .2;
        transition: $transition;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }

        &:last-child {
            margin-right: 0;
        }
    }

    .rIcon {
        width: 2.4rem;
        height: 2.4rem;
        fill: #fff;
    }

    .rText {
        width: min-content;
        font-size: 1.4rem;
        font-weight: 500;
    }

    .number {
        font-size: 3.4rem;
        font-weight: 600;
        margin-right: .6rem;
    }

    .buttonWrap {
        max-width: 20rem;
        height: 5.4rem;
        margin-right: 1rem;
    }
</style>
