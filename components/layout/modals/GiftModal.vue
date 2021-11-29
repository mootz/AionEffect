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
                        Отправить подарок
                    </h5>

                    <p :class="$style.desc">
                        Пожалуйста введите имя персонажа, которому вы хотите сделать подарок.
                    </p>

                    <p :class="$style.inp">
                        <AppInput label="Имя персонажа"
                                  placeholder="Введите имя персонажа"
                        />
                    </p>

                    <p :class="$style.desc">
                        Убедитесь, что введенные данные верны, после нажатия на кнопку подарок будет отправлен на игровую почту персонажа.
                    </p>

                    <div :class="$style.btns">
                        <div :class="$style.btn">
                            <AppButton text="Назад"
                                       height="5.4rem"
                                       reverse
                                       @click.native="backToModal"
                            />
                        </div>
                        <div :class="[$style.btn, $style.btnChange]">
                            <AppButton text="Подарить"
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
    import AppInput from '@/components/ui/inputs/AppInput';
    import ProductModal from '@/components/layout/modals/ProductModal';
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

        methods: {
            closeModal() {
                this.$modal.close();
            },
            backToModal() {
                this.$modal.open(ProductModal);
            }
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
