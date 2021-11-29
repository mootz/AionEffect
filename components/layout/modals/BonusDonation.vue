<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.BonusDonation">
            <div :class="$style.wrap">
                <div :class="$style.iconWrap">
                    <div :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-bonus" />
                        </svg>
                    </div>
                </div>

                <div :class="$style.content">
                    <h5 :class="$style.title">
                        Как я могу получить Bonus?
                    </h5>

                    <ol :class="$style.list">
                        <li>
                            За каждый час, проведенный в игре,
                            мы начисляем вам 1 бонус.
                        </li>
                        <li>
                            При пожертвовании от 500 CoE
                            вы получаете 10% вознаграждение
                            в виде бонусов.
                        </li>
                        <!--                        <li>-->
                        <!--                            Голосуя за сервер, вы можете получать-->
                        <!--                            от 7 до 23 бонусов каждый день!-->
                        <!--                        </li>-->
                    </ol>

                    <!--                    <div :class="$style.server"-->
                    <!--                         @click.stop="openVoteDesc">-->
                    <!--                        <svg :class="$style.serverIcon">-->
                    <!--                            <use xlink:href="#icon-finger" />-->
                    <!--                        </svg>-->

                    <!--                        <span>Голосовать за сервер</span>-->
                    <!--                    </div>-->


                    <h5 :class="$style.title">
                        Обменивайте свои бонусы
                    </h5>

                    <div :class="$style.desc">
                        10 бонусов можно обменять на Coin of Effect
                    </div>

                    <ul :class="$style.listCoin">
                        <li :class="$style.itemCoin">
                            <span :class="$style.itemText">Ваш баланс</span>
                            <div :class="$style.itemValue">
                                <div :class="$style.itemIcon">
                                    <svg>
                                        <use xlink:href="#icon-bonus" />
                                    </svg>
                                </div>
                                <span :class="$style.itemTextValue">13,228</span>
                            </div>
                        </li>

                        <li :class="$style.itemCoin">
                            <span :class="$style.itemText">К обмену</span>

                            <div :class="$style.itemChange">
                                <AppInputTrade />
                            </div>

                            <div :class="$style.itemValue">
                                <div :class="$style.itemIcon">
                                    <svg>
                                        <use xlink:href="#icon-bonus" />
                                    </svg>
                                </div>
                                <span :class="$style.itemTextValue">280</span>
                            </div>
                        </li>

                        <li :class="$style.itemCoin">
                            <span :class="$style.itemText">Вы получите</span>
                            <div :class="$style.itemValue">
                                <div :class="[$style.itemIcon, $style._effect]">
                                    <svg>
                                        <use xlink:href="#icon-coin-effect" />
                                    </svg>
                                </div>
                                <span :class="$style.itemTextValue">28</span>
                            </div>
                        </li>

                        <li :class="$style.itemCoin">
                            <span :class="$style.itemText">Остаток</span>
                            <div :class="$style.itemValue">
                                <div :class="$style.itemIcon">
                                    <svg>
                                        <use xlink:href="#icon-bonus" />
                                    </svg>
                                </div>
                                <span :class="$style.itemTextValue">12,948</span>
                            </div>
                        </li>

                    </ul>

                    <div :class="$style.btn">
                        <AppButton text="Обменять"
                                   height="5.4rem"
                                   @click.native="closeModal"
                        />
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>

    import AppButton from '@/components/ui/inputs/AppButton';
    import VoteDescription from '@/components/layout/modals/VoteDescription';
    import AppInputTrade from '@/components/ui/inputs/AppInputTrade';

    export default {
        components: {AppInputTrade,
                     AppButton},
        props: {
            visible: Boolean,

            data: {
                type: Object,
                default: () => ({}),
            },
        },

        methods: {
            openVoteDesc() {
                this.$modal.open(VoteDescription);
            },
            closeModal() {
                this.$modal.close();
            }
        }
    };
</script>

<style lang="scss" module>
    .BonusDonation {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        pointer-events: none;
        background-color: $lightdark;

        &:global(.form-appear-enter-active) {
            transition: transform .8s;
        }

        &:global(.form-appear-leave-active) {
            transition: transform .4s;
        }

        &:global(.form-appear-enter),
        &:global(.form-appear-leave-to) {
            transform: translateX(110%);
        }
    }

    .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 37.8rem;
        pointer-events: all;
        overflow: auto;
    }

    .iconWrap {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 100%;
        height: 10rem;
        background: linear-gradient(141.24deg, #ff00c7 2.72%, #ff5c00 128.61%);
    }

    .icon {
        width: 8rem;
        height: 8rem;
        fill: #fff;
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 3.2rem;
    }

    .title {
        margin-bottom: 3.2rem;
        font-size: 1.6rem;
        font-weight: 500;
    }

    .list {
        margin-top: 0;
        margin-bottom: 3rem;
        padding-left: 1.6rem;
        font-weight: 500;
        font-size: 1.4rem;
        color: rgba(#fff, .4);

        li {
            line-height: 1.3;
            list-style: auto;
        }
    }

    .btn {
        margin: 0 0 0 auto;
        width: 12.6rem;
    }

    .accent {
        opacity: 1;
        color: #fff;
    }

    .server {
        display: flex;
        align-items: flex-end;
        margin-bottom: 3.8rem;
        opacity: .4;
        transition: $transition;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .serverIcon {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 1rem;
        fill: #fff;
    }

    .desc {
        margin-bottom: 2.4rem;
        opacity: .4;
        font-size: 1.4rem;
        font-weight: 500;
    }

    .listCoin {
        display: flex;
        flex-direction: column;
        margin-bottom: 3.2rem;
    }

    .itemCoin {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.2rem 0;
        font-weight: 500;
        font-size: 1.4rem;
        letter-spacing: .02em;
        border-bottom: 1px solid rgba(#fff, 0.04);
        user-select: none;
    }

    .itemValue {
        display: flex;
        align-items: center;
    }

    .itemIcon {
        width: 1.8rem;
        height: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 20px rgba(255, 0, 199, 0.3);
        border-radius: 100%;
        background-color: #ff00c7;

        svg {
            width: 1.2rem;
            height: 1.2rem;
            fill: #fff;
        }

        &._effect {
            background-color: #9e00ff;
            box-shadow: 0 10px 20px rgba(158, 0, 255, 0.3);
        }
    }

    .itemTextValue {
        margin-left: .6rem;
    }

    .itemText {
        line-height: 2.1rem;
    }
</style>
