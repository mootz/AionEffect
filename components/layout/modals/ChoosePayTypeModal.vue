<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.ChoosePayTypeModal">
            <div :class="$style.wrap">
                <div :class="$style.content">

                    <p :class="$style.title">
                        {{ $t('shop.choosePayment') }}
                    </p>

                    <div :class="[$style.type, $style._effect, {[$style._active]: activeBtn === 'effect'}]"
                         @click.stop="setActiveBtn('effect')"
                    >
                        <div :class="$style.typeIcon">
                            <svg>
                                <use xlink:href="#icon-coin-effect" />
                            </svg>
                        </div>

                        <div :class="$style.desc">
                            Coin of Effect
                        </div>
                    </div>

                    <div :class="[$style.type, $style._bonus, {[$style._active]: activeBtn === 'bonus'}]"
                         @click.stop="setActiveBtn('bonus')"
                    >
                        <div :class="$style.typeIcon">
                            <svg>
                                <use xlink:href="#icon-bonus" />
                            </svg>
                        </div>

                        <div :class="$style.desc">
                            Bonus
                        </div>
                    </div>

                    <!--                    <div :class="[$style.type, $style._kinah, {[$style._active]: activeBtn === 'kinah'}]"-->
                    <!--                         @click.stop="setActiveBtn('kinah')"-->
                    <!--                    >-->
                    <!--                        <div :class="$style.typeIcon">-->
                    <!--                            <svg>-->
                    <!--                                <use xlink:href="#icon-kinah" />-->
                    <!--                            </svg>-->
                    <!--                        </div>-->

                    <!--                        <div :class="$style.desc">-->
                    <!--                            Kinah-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <div :class="$style.btn">
                        <AppButton :text="$t('shop.btnPayment')"
                                   height="5.4rem"
                                   :disabled="!activeBtn"
                                   @click.native="openModal"
                        />
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>

    import AppButton from '@/components/ui/inputs/AppButton';
    import BonusDonation from '@/components/layout/modals/BonusDonation';
    import KinahDonation from '@/components/layout/modals/KinahDonation';
    import EffectDonation from '@/components/layout/modals/EffectDonation';
    export default {
        components: {AppButton},
        props: {
            visible: Boolean,

            data: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
                activeBtn: ''
            };
        },

        methods: {
            openModal() {
                const activeModal = this.activeBtn === 'effect' ? EffectDonation : this.activeBtn === 'bonus' ? BonusDonation : this.activeBtn === 'kinah' ? KinahDonation : null;
                this.$modal.open(activeModal);
            },
            closeModal() {
                this.$modal.close();
            },
            backToModal() {
                this.$modal.open(BonusDonation);
            },
            setActiveBtn(val) {
                this.activeBtn = val;
            }
        }
    };
</script>

<style lang="scss" module>
    .ChoosePayTypeModal {
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

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 3.2rem;
    }

    .title {
        margin-bottom: 3.2rem;
        font-weight: 500;
        font-size: 1.6rem;
        opacity: .6;
    }

    .btn {
        width: 14.2rem;
        margin: 3.2rem 0 0 auto;
    }

    .type {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 2.4rem 3.2rem;
        margin-bottom: 1.2rem;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.02);
        transition: $transition;
        cursor: pointer;

        &:last-child {
            margin-bottom: 0;
        }

        &:hover {
            &._effect {
                background-color: #7000ff;
            }

            &._bonus {
                background-color: #ff00c7;
            }

            &._kinah {
                background-color: #ff8a00;
            }

            .typeIcon,
            .desc {
                opacity: 1;
            }
        }

        &._active {
            &._effect {
                background-color: #7000ff;
            }

            &._bonus {
                background-color: #ff00c7;
            }

            &._kinah {
                background-color: #ff8a00;
            }

            .typeIcon,
            .desc {
                opacity: 1;
            }
        }
    }

    .typeIcon {
        width: 3.2rem;
        height: 3.2rem;
        opacity: .6;
        transition: $transition;

        svg {
            fill: #fff;
        }
    }

    .desc {
        margin-left: .8rem;
        font-size: 1.6rem;
        font-weight: 600;
        opacity: .6;
        transition: $transition;
    }
</style>
