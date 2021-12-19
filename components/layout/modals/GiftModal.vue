<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.PaypalDonation">
            <div :class="$style.wrap">
                <div :class="$style.iconWrap">
                    <div :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-heart" />
                        </svg>
                    </div>
                </div>

                <div :class="$style.content">
                    <h5 :class="$style.title">
                        {{ $t('giftModal.title') }}
                    </h5>

                    <p :class="$style.desc">
                        {{ $t('giftModal.desc1') }}
                    </p>

                    <p :class="$style.inp">
                        <AppInput :label="$t('giftModal.label')"
                                  :placeholder="$t('giftModal.placeholder')"
                                  :value="name"
                                  @input="setName"
                        />
                    </p>

                    <p :class="$style.desc">
                        {{ $t('giftModal.desc2') }}
                    </p>

                    <div :class="$style.btns">
                        <div :class="$style.btn">
                            <AppButton :text="$t('giftModal.btnBack')"
                                       height="5.4rem"
                                       reverse
                                       @click.native="closeModal"
                            />
                        </div>
                        <div :class="[$style.btn, $style.btnChange]">
                            <AppButton :text="$t('giftModal.btnGift')"
                                       height="5.4rem"
                                       @click.native="buyItem"
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
    import AppInput from '@/components/ui/inputs/AppInput';
    import ProductModal from '@/components/layout/modals/ProductModal';
    import {mapState, mapActions} from 'vuex';

    export default {
        components: {AppInput,
                     AppButton},
        props: {
            visible: Boolean,

            data: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
                name: ''
            };
        },

        computed: {
            ...mapState({
                userId: state => state.user.user.id
            })
        },

        methods: {
            ...mapActions({
                updateUser: 'user/getUserData'
            }),

            closeModal() {
                this.$modal.close();
            },
            backToModal() {
                this.$modal.open(ProductModal);
            },

            setName(val) {
                this.name = val;
            },

            async buyItem() {
                try {
                    const data = {
                        char_name: this.name,
                        product_id: this.data.product_id,
                        count: this.data.count
                    };

                    await this.$axios.$post(`/shop/${this.userId}/friend`, data);
                    await this.updateUser();
                    this.$toast.success(this.$t('giftModal.notif.accept'), {timeout: 3000});
                    this.$modal.close();
                } catch (error) {
                    console.warn('GiftModal: ', error.response);
                    this.$toast.error(error.response.data.result_msg);
                }
            },
        }
    };
</script>

<style lang="scss" module>
    .PaypalDonation {
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
        background: linear-gradient(315.98deg, #00c2ff 5.13%, #0057ff 94.99%);
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

    .desc {
        margin-bottom: 3.2rem;
        font-size: 1.4rem;
        color: rgba(#fff, .4);
        font-weight: 500;
    }

    .inp {
        margin-bottom: 2.4rem;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }

    .btn {
        width: 10.2rem;
    }

    .btnChange {
        width: 12.4rem;
        margin-left: 1rem;
    }
</style>
