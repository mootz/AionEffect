<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.BonusDonation">
            <div :class="$style.wrap">

                <div :class="$style.content">
                    <h5 :class="$style.title">
                        Anniversary Fairy Treasure Pack
                    </h5>

                    <div :class="$style.desc">
                        Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels!

                        You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.
                    </div>

                    <div :class="$style.tags">
                        <div :class="$style.tag">
                            Нельзя продать
                        </div>
                        <div :class="$style.tag">
                            Только для асмодиан
                        </div>
                        <div :class="$style.tag">
                            Привязан к персонажу
                        </div>
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
                            <span :class="$style.itemText">К оплате</span>

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

                    <div :class="$style.btns">
                        <div :class="$style.btn">
                            <AppButton text="Подарить"
                                       reverse
                                       height="5.4rem"
                                       @click.native="giftModal"

                            />
                        </div>
                        <div :class="[$style.btn, $style.btnChange]">
                            <AppButton text="Купить"
                                       height="5.4rem"
                                       @click.native="closeModal"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>

    import AppButton from '@/components/ui/inputs/AppButton';
    import GiftModal from '@/components/layout/modals/GiftModal';
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
            closeModal() {
                this.$modal.close();
            },
            giftModal() {
                this.$modal.open(GiftModal);
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
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 100%;
        height: 35.4rem;
        background: linear-gradient(141.24deg, #ff00c7 2.72%, #ff5c00 128.61%);
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 3.2rem;
    }

    .title {
        margin-bottom: 2.4rem;
        font-size: 1.6rem;
        font-weight: 500;
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

    .btns {
        display: flex;
        justify-content: flex-end;
        margin-top: 3.2rem;
    }

    .btn {
        width: 12.4rem;
    }

    .btnChange {
        width: 10.4rem;
        margin-left: 1rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
    }

    .tag {
        margin: 0 .6rem .8rem 0;
        padding: 1rem;
        border-radius: 100px;
        background: rgba(255, 255, 255, 0.08);
        color: rgba(#fff, .4);
        font-weight: 500;
    }
</style>
