<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.BonusDonation">
            <div :class="$style.wrap">

                <div :class="$style.content">
                    <h5 :class="$style.title">
                        {{ data.name }}
                    </h5>

                    <div :class="$style.desc">
                        {{ data.info }}
                    </div>

                    <div :class="$style.tags">
                        <div v-for="tag in data.teg"
                             :key="tag.id"
                             :class="$style.tag">
                            {{ tag.name }}
                        </div>
                    </div>

                    <ul :class="$style.listCoin">
                        <li :class="$style.itemCoin">
                            <span :class="$style.itemText">{{ $t('shop.item.balance') }}</span>
                            <div :class="$style.itemValue">
                                <div :class="[$style.itemIcon, $style[`_${data.currency}`]]">
                                    <svg>
                                        <use :xlink:href="`#icon-${thisCurrency}`" />
                                    </svg>
                                </div>
                                <span :class="$style.itemTextValue">{{ currency[data.currency] }}</span>
                            </div>
                        </li>

                        <li :class="$style.itemCoin">
                            <span :class="$style.itemText">{{ $t('shop.item.checkout') }}</span>

                            <div v-if="data.stack"
                                 :class="$style.itemChange">
                                <AppInputTrade :value="change"
                                               @plus="plusValue"
                                               @minus="minusValue"
                                />
                            </div>

                            <div :class="$style.itemValue">
                                <div :class="[$style.itemIcon, $style[`_${data.currency}`]]">
                                    <svg>
                                        <use :xlink:href="`#icon-${thisCurrency}`" />
                                    </svg>
                                </div>
                                <span :class="$style.itemTextValue">{{ data.price * change }}</span>
                            </div>
                        </li>

                        <li :class="$style.itemCoin">
                            <span :class="$style.itemText">{{ $t('shop.item.end') }}</span>
                            <div :class="$style.itemValue">
                                <div :class="[$style.itemIcon, $style[`_${data.currency}`]]">
                                    <svg>
                                        <use :xlink:href="`#icon-${thisCurrency}`" />
                                    </svg>
                                </div>
                                <span :class="$style.itemTextValue">{{ currency[data.currency] - data.price * change }}</span>
                            </div>
                        </li>

                    </ul>
                    <div :class="$style.btns">
                        <div v-if="data.friendly"
                             :class="[$style.btn]">
                            <AppButton :text="$t('shop.item.btnGift')"
                                       reverse
                                       height="5.4rem"
                                       :disabled="(currency[data.currency] - data.price * change) < 0"
                                       @click.native="giftModal"

                            />
                        </div>
                        <div :class="[$style.btn, $style.btnChange]">
                            <AppButton :text="$t('shop.item.btnBuy')"
                                       height="5.4rem"
                                       :disabled="(currency[data.currency] - data.price * change) < 0"
                                       @click.native="openModal"
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
    import {mapState} from 'vuex';
    import ListCharactersModal from '@/components/layout/modals/ListCharactersModal';

    export default {
        components: {
            AppInputTrade,
            AppButton
        },
        props: {
            visible: Boolean,

            data: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
                change: 1
            };
        },

        computed: {
            ...mapState({
                currency: state => state.user.user.balance
            }),

            thisCurrency() {
                return this.data.currency === 'effect' ? 'coin-effect' : this.data.currency;
            }
        },

        mounted() {
            console.log(this.data);
        },

        methods: {
            closeModal() {
                this.$modal.close();
            },

            giftModal() {
                this.$modal.open(GiftModal, {
                    count: this.change,
                    product_id: this.data.id
                });
            },

            plusValue() {
                if (this.data.price * (this.change + 1) < this.currency[this.data.currency]) {
                    this.change += 1;
                }
            },

            minusValue() {
                if (this.change !== 0 && this.change !== 1) {
                    this.change -= 1;
                }
            },

            openModal() {
                this.$modal.open(ListCharactersModal, {
                    count: this.change,
                    product_id: this.data.id
                });
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

        &._kinah {
            background-color: #ff8a00;
            box-shadow: 0 10px 20px rgba(255, 138, 0, 0.3);
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
