<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.KinahDonation">
            <div :class="$style.wrap">
                <div :class="$style.iconWrap">
                    <div :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-kinah" />
                        </svg>
                    </div>
                </div>

                <div :class="$style.content">
                    <h5 :class="$style.title">
                        Зачем мне нужна Kinah в личном кабинете?
                    </h5>

                    <ol :class="$style.list">
                        <li>
                            Кинару можно выставить на аукцион, продав ее, вы получите Coin of Effect.
                        </li>
                        <li>
                            Для участия в мини-игре колесе удачи.
                        </li>
                        <li>
                            В магазине есть товары, которые можно приобрести только за кинару.
                        </li>
                    </ol>


                    <h5 :class="$style.title">
                        Как правильно пополнить свой кошелек Kinah?
                    </h5>

                    <ol :class="$style.list">
                        <li>
                            Вернуть отправленную кинару на персонажа нельзя!
                        </li>
                        <li>
                            Отправьте в игре почтой нужное количество кинар персонажу
                            <span :class="$style.accent">Kinah</span>
                        </li>
                        <li>
                            Пополнение кошелька произойдёт
                            в течении нескольких минут.
                        </li>
                    </ol>

                    <div :class="$style.btn">
                        <AppButton text="Закрыть"
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
    export default {
        components: {AppButton},
        props: {
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
    .KinahDonation {
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
        background: linear-gradient(315.98deg, #ff8a00 5.13%, #ff2e00 94.99%);
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

    .list {
        margin-top: 0;
        margin-bottom: 3.2rem;
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
        width: 11.6rem;
    }

    .accent {
        opacity: 1;
        color: #fff;
    }
</style>
