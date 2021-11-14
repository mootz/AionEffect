<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.RDignity">
            <div :class="$style.wrap">
                <div :class="$style.iconWrap">
                    <div :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-dignity" />
                        </svg>
                    </div>
                </div>

                <div :class="$style.content">
                    <h5 :class="$style.title">
                        Активация промокода
                    </h5>

                    <p :class="$style.desc">
                        Если у вас есть промокод, его можно активировать здесь.
                    </p>

                    <div class="input">
                        <AppInput placeholder="Введите код"
                                  label="Промокод"
                        />
                    </div>

                    <div :class="$style.btn">
                        <AppButton text="Активировать"
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
    import AppInput from '@/components/ui/inputs/AppInput';
    export default {
        components: {AppInput,
                     AppButton},
        props: {
            submited: {
                type: Boolean,
                default: false
            },
            visible: Boolean,

            data: {
                type: Object,
                default: () => ({}),
            },
        },

        methods: {
            openModal() {
                // this.$modal.open(FormExample2, {classList: 'is-article'});
            },
            closeModal() {
                this.$modal.close();
            }
        }
    };
</script>

<style lang="scss" module>
    .RDignity {
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
        height: 35.4rem;
        background: linear-gradient(315.98deg, #00e0ff 5.13%, #0094ff 94.99%);
    }

    .icon {
        width: 20rem;
        height: 20rem;
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
        font-weight: 500;
        font-size: 1.4rem;
        opacity: .4;
    }

    .listWrap {
        position: relative;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
            pointer-events: none;
            width: 100%;
            height: 12rem;
            background: linear-gradient(0deg, #151d29 3%, rgba(21, 29, 41, 0) 88%);
        }
    }

    .list {
        display: flex;
        flex-direction: column;
        max-height: 33rem;
        height: 100%;
        overflow: auto;
        margin-bottom: 3.2rem;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .item {
        margin-bottom: .6rem;
        padding: 1.6rem 2.2rem;
        border-radius: 20px;
        font-weight: 600;
        background-color: rgba(#fff, 0.01);
        transition: $transition;
        cursor: pointer;

        &:hover {
            background-color: rgba(#fff, 0.04);
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    .btn {
        margin: 3.2rem 0 0 auto;
        width: 15.2rem;
    }
</style>
