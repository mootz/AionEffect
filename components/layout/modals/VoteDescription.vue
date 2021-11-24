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
                            <use xlink:href="#icon-finger" />
                        </svg>
                    </div>
                </div>

                <div :class="$style.content">
                    <h5 :class="$style.title">
                        Голосование
                    </h5>

                    <ol :class="$style.list">
                        <li>
                            Нажимаем на кнопку «Голосовать»
                        </li>
                        <li>
                            Вы попадёте на страницу голосования за наш сервер. Для начала голосования необходимо переместить кнопку вправо. После этого загрузится страница голосования.
                        </li>
                        <li>
                            Вводим ваш логин учетной записи в форму ввода данных.
                        </li>
                        <li>
                            Нажимаем на кнопку «Проголосовать»
                        </li>
                    </ol>

                    <p :class="$style.bonus">
                        Бонус будет зачислен в течение нескольких часов.
                    </p>

                    <p :class="$style.desc">
                        Рекомендуем голосовать с 00:00 до 21:00. <br>
                        Проголосовать повторно возможно только на следующий день!
                    </p>

                    <div :class="$style.btns">
                        <div :class="$style.btn">
                            <AppButton text="Назад"
                                       reverse
                                       height="5.4rem"
                                       @click.native="backToModal"

                            />
                        </div>
                        <div :class="[$style.btn, $style.btnChange]">
                            <AppButton text="Голосовать"
                                       height="5.4rem"
                                       @click.native="backToModal"
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
    import BonusDonation from '@/components/layout/modals/BonusDonation';
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
            },
            backToModal() {
                this.$modal.open(BonusDonation);
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
        background: linear-gradient(141.24deg, #ffb800 2.72%, #03b334 128.61%);
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
        margin-bottom: 2.4rem;
        font-size: 1.4rem;
        color: rgba(#fff, .4);
        font-weight: 500;
    }

    .list {
        margin-top: 0;
        padding-left: 1.6rem;
        font-weight: 500;
        font-size: 1.4rem;
        color: rgba(#fff, .4);

        li {
            line-height: 1.3;
            list-style: auto;
        }
    }

    .accent {
        opacity: 1;
        color: #fff;
        font-weight: bold;
    }

    .bonus {
        font-style: italic;
        opacity: .4;
        margin-top: 4.2rem;
        margin-bottom: 2.4rem;
        font-size: 1.4rem;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
        margin-top: 3.2rem;
    }

    .btn {
        width: 10.2rem;
    }

    .btnChange {
        width: 13.6rem;
        margin-left: 1rem;
    }
</style>
