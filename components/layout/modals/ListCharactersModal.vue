<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.ListCharactersModal">
            <div :class="$style.wrap">

                <div :class="$style.content">
                    <div :class="$style.title">
                        {{ $t('ListCharactersModal.title') }}
                    </div>

                    <div v-for="char in characters"
                         v-show="characters.length"
                         :key="char.char_id"
                         :class="[$style.item, {[$style._active]: activeChar === char.char_id}]"
                         @click="setActiveChar(char.char_id)"
                    >
                        <div :class="$style.wrapItem">
                            <div :class="$style.top">
                                <div :class="$style.name">
                                    {{ char.name }}
                                </div>
                                <div v-if="char.online"
                                     :class="$style.online"></div>
                            </div>
                            <div :class="$style.info">
                                <div :class="$style.class">
                                    {{ computClass(char.class) }} {{ char.lev }} {{ $t('profile.level') }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <AppButton :text="$t('ListCharactersModal.btn')"
                               height="5.4rem"
                               :disabled="!activeChar || btnDisable"
                               :class="$style.btn"
                               @click.native="buyItem"
                    />
                </div>

            </div>
        </div>
    </transition>
</template>

<script>

    import AppButton from '@/components/ui/inputs/AppButton';
    import ProductModal from '@/components/layout/modals/ProductModal';
    import {mapState, mapActions} from 'vuex';

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
                activeChar: null,
                btnDisable: false
            };
        },

        computed: {
            ...mapState({
                characters: state => state.user.user.characters,
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

            setActiveChar(val) {
                this.activeChar = val;
            },

            async buyItem() {
                this.btnDisable = true;

                try {
                    const data = {
                        char_id: this.activeChar,
                        product_id: this.data.product_id,
                        count: this.data.count
                    };

                    await this.$axios.$post(`/shop/${this.userId}/buy`, data);
                    await this.updateUser();
                    this.$toast.success(this.$t('ListCharactersModal.notif.accept'), {timeout: 3000});
                    this.$modal.close();
                } catch (error) {
                    console.warn('ListCharactersModal: ', error.response);
                    this.$toast.error(error.response.data.result_msg);
                }
                this.btnDisable = false;
            },

            computClass(val) {
                switch (val) {
                    case 0:
                        return this.$t('classes.0');
                    case 1:
                        return this.$t('classes.1');
                    case 2:
                        return this.$t('classes.2');
                    case 3:
                        return this.$t('classes.3');
                    case 4:
                        return this.$t('classes.4');
                    case 5:
                        return this.$t('classes.5');
                    case 6:
                        return this.$t('classes.6');
                    case 7:
                        return this.$t('classes.7');
                    case 8:
                        return this.$t('classes.8');
                    case 9:
                        return this.$t('classes.9');
                    case 10:
                        return this.$t('classes.10');
                    case 11:
                        return this.$t('classes.11');
                    case 12:
                        return this.$t('classes.12');
                    case 13:
                        return this.$t('classes.13');
                    case 14:
                        return this.$t('classes.14');
                    case 15:
                        return this.$t('classes.15');
                    case 16:
                        return this.$t('classes.16');
                    default:
                        return 'Ошибка';
                }
            }
        }
    };
</script>

<style lang="scss" module>
    .ListCharactersModal {
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
        //justify-content: center;
        height: 100%;
        width: 100%;
        padding: 3.2rem;
    }

    .title {
        margin-bottom: 3.2rem;
        font-size: 1.6rem;
        font-weight: 500;
        opacity: .6;
    }

    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.2rem;
        padding: 1.8rem 2rem 2.2rem;
        background-color: rgba(#fff, .01);
        border-radius: 20px;
        transition: $transition;
        cursor: pointer;
        user-select: none;

        &:hover {
            background-color: rgba(#fff, .03);
        }

        &:last-child {
            margin-bottom: 0;
        }

        &._active {
            background-color: rgba(#fff, .1);
        }
    }

    .top {
        display: flex;
        align-items: center;
        margin-bottom: .6rem;
    }

    .name {
        font-size: 1.6rem;
        font-weight: 600;
    }

    .online {
        margin-left: .8rem;
        width: .8rem;
        height: .8rem;
        border-radius: 100%;
        background: #22ff45;
        box-shadow: 0 4px 8px rgba(34, 255, 69, 0.3);
    }

    .info {
        display: flex;
    }

    .class {
        font-size: 1.4rem;
        font-weight: 500;
        opacity: .4;
    }

    .classAccent {
        margin-left: .6rem;
        color: #ff8a00;
    }

    .btn {
        width: 13.4rem;
        margin: 3.2rem 0 0 auto;
    }
</style>
