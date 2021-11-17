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
                            <use xlink:href="#icon-coin-effect" />
                        </svg>
                    </div>
                </div>

                <transition name="fade"
                            mode="out-in">

                    <div v-if="stage === 'pay'"
                         key="pay"
                         :class="$style.content">
                        <h5 :class="$style.title">
                            Coin of Effect
                        </h5>

                        <p :class="$style.desc">
                            При пожертвовании более чем на 500 CoE вы получаете 10% вознаграждения в виде бонусов. Минимальный размер пожертвования 50 CoE!
                        </p>

                        <ul :class="$style.list">
                            <li :class="$style.item">
                                <span :class="$style.label">USD</span>
                                <span :class="$style.value">4804.03</span>
                            </li>
                            <li :class="$style.item">
                                <span :class="$style.label">RUB</span>
                                <span :class="$style.value">375461.69</span>
                            </li>
                            <li :class="$style.item">
                                <span :class="$style.label">EUR</span>
                                <span :class="$style.value">4106.721</span>
                            </li>
                        </ul>

                        <div :class="$style.select">
                            <AppSelect :value="valueSelect"
                                       :options="options"
                                       @on-select="setOrderType"
                            />
                        </div>

                        <div :class="$style.input">
                            <AppInput label="Количество монет"
                                      :value="valueCoin"
                                      min="50"
                                      type="number"
                                      @input="setValueCoin"
                            />
                        </div>


                        <div :class="$style.checkbox">
                            <AppCheckbox />
                            <div :class="$style.checkboxText">
                                Я согласен с <span @click.stop="changeStage('rule')">правилами пожертвования</span>
                            </div>
                        </div>

                        <div :class="$style.btns">
                            <transition name="fade">
                                <div v-show="showSetCode"
                                     :class="[$style.btn, $style.btnCode]">
                                    <AppButton text="Обменять код"
                                               reverse
                                               height="5.4rem"
                                               @click.native="toDigiCode"
                                    />
                                </div>
                            </transition>


                            <div :class="$style.btn">
                                <AppButton text="Продолжить"
                                           height="5.4rem"
                                           @click.native="nextStep"
                                />
                            </div>
                        </div>

                    </div>

                    <div v-else-if="stage === 'rule'"
                         key="rule"
                         :class="$style.content">
                        <h5 :class="$style.title">
                            Правила пожертвования
                        </h5>

                        <ol :class="$style.rules">
                            <li>
                                Делая пожертвование, вы не покупаете какой-либо продукт или услугу.
                            </li>
                            <li>
                                Чтобы выразить свою благодарность, мы вознаграждаем доноров в обмен  на их поддержку.
                            </li>
                            <li>
                                Coin of Effect это награда за добровольное пожертвование от частного лица.
                            </li>
                            <li>
                                Пожертвования используются для поддержания работы сервера, а так же для улучшения проекта.
                            </li>
                            <li>
                                Все сделанные транзакции являются окончательными и не подлежат возврату.
                            </li>
                        </ol>

                        <div :class="[$style.btn, $style.btnBack]">
                            <AppButton text="Назад"
                                       height="5.4rem"
                                       reverse
                                       @click.native="changeStage('pay')"
                            />
                        </div>
                    </div>

                </transition>

            </div>
        </div>
    </transition>
</template>

<script>

    import AppButton from '@/components/ui/inputs/AppButton';
    import AppSelect from '@/components/ui/inputs/AppSelect';
    import AppInput from '@/components/ui/inputs/AppInput';
    import AppCheckbox from '@/components/ui/inputs/AppCheckbox';
    import PaypalDonation from '@/components/layout/modals/PaypalDonation';
    import DigisellerCodeDonation from '@/components/layout/modals/DigisellerCodeDonation';
    export default {
        components: {AppCheckbox,
                     AppInput,
                     AppSelect,
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
                options: [
                    {
                        name: 'Способ оплаты Enot.io',
                        value: 'enot'
                    },
                    {
                        name: 'Способ оплаты Digiseller',
                        value: 'digiseller'
                    },
                    {
                        name: 'Способ оплаты Paypal',
                        value: 'paypal'
                    },
                ],

                valueSelect: {
                    name: 'Способ оплаты Enot.io',
                    value: 'enot'
                },

                valueCoin: '50',

                stage: 'pay'
            };
        },

        computed: {
            showSetCode() {
                return this.valueSelect.value === 'digiseller';
            }
        },

        methods: {
            openModal() {
                // this.$modal.open(FormExample2, {classList: 'is-article'});
            },
            closeModal() {
                this.$modal.close();
            },
            changeStage(val) {
                this.stage = val;
            },
            setOrderType(data) {
                this.valueSelect = data.option;
            },
            setValueCoin(val) {
                this.valueCoin = val;
            },
            nextStep() {
                if (this.valueSelect.value === 'paypal') {
                    this.$modal.open(PaypalDonation);
                }
            },
            toDigiCode() {
                this.$modal.open(DigisellerCodeDonation);
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
        background: linear-gradient(315.98deg, #9e00ff 5.13%, #7000ff 94.99%);
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
        width: 28.4rem;
    }

    .btn {
        margin: 0 0 0 auto;
        width: 14rem;
    }

    .btns {
        display: flex;
        justify-content: space-between;
    }

    .btnCode {
        width: 15.2rem;
        margin-left: 0;
    }

    .list {
        width: 100%;
        margin-bottom: 3.2rem;
    }

    .item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1.2rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: .02em;
    }

    .select {
        margin-bottom: 1.4rem;
    }

    .checkbox {
        display: flex;
        align-items: center;
        margin: 3.2rem 0;
    }

    .checkboxText {
        margin-left: .8rem;
        color: rgba(#fff, .4);
        font-weight: 500;

        span {
            color: #fff;
            cursor: pointer;
        }
    }

    .rules {
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

    .btnBack {
        width: 10.2rem;
    }
</style>
