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
                            {{ $t('effectModal.desc') }}
                        </p>

                        <ul :class="$style.list">
                            <li :class="$style.item">
                                <span :class="$style.label">USD</span>
                                <span :class="$style.value">{{ calcUsd }}</span>
                            </li>
                            <li :class="$style.item">
                                <span :class="$style.label">RUB</span>
                                <span :class="$style.value">{{ valueCoin ? valueCoin : 0 }}</span>
                            </li>
                            <li :class="$style.item">
                                <span :class="$style.label">EUR</span>
                                <span :class="$style.value">{{ calcEur }}</span>
                            </li>
                        </ul>

                        <div :class="$style.select">
                            <AppSelect id="orderType"
                                       :value="valueSelect"
                                       :options="options"
                                       @on-select="setOrderType"
                            />
                        </div>

                        <div :class="$style.input">

                            <AppSelect v-if="thisValueDigiseller"
                                       id="digiValue"
                                       :label="$t('effectModal.label')"
                                       :class="$style.digiSelect"
                                       :options="digiOptions"
                                       :value="digiValueSelect"
                                       :max-height="350"
                                       @on-select="setDigiValue"
                            />

                            <AppInput v-else
                                      :label="$t('effectModal.label')"
                                      :value="valueCoin"
                                      min="1"
                                      type="number"
                                      :error="errors.count"
                                      @focus="clearErrors"
                                      @input="setValueCoin"
                            />
                        </div>


                        <div :class="$style.checkbox">
                            <AppCheckbox :checked="rule"
                                         @click-check="setRule"
                            />
                            <div :class="$style.checkboxText">
                                {{ $t('effectModal.accept1') }} <span @click.stop="changeStage('rule')">{{ $t('effectModal.accept2') }}</span>
                            </div>
                        </div>

                        <div :class="$style.btns">
                            <transition name="fade">
                                <div v-show="thisValueDigiseller"
                                     :class="[$style.btn, $style.btnCode]">
                                    <AppButton text="Обменять код"
                                               reverse
                                               height="5.4rem"
                                               @click.native="toDigiCode"
                                    />
                                </div>
                            </transition>


                            <div :class="$style.btn">
                                <AppButton :text="$t('effectModal.btn')"
                                           height="5.4rem"
                                           @click.native="checkOrder"
                                />
                            </div>
                        </div>

                    </div>

                    <div v-else-if="stage === 'rule'"
                         key="rule"
                         :class="$style.content">
                        <h5 :class="$style.title">
                            {{ $t('effectRules.title') }}
                        </h5>

                        <ol :class="$style.rules">
                            <li>
                                {{ $t('effectRules.desc1') }}
                            </li>
                            <li>
                                {{ $t('effectRules.desc2') }}
                            </li>
                            <li>
                                {{ $t('effectRules.desc3') }}
                            </li>
                            <li>
                                {{ $t('effectRules.desc4') }}
                            </li>
                            <li>
                                {{ $t('effectRules.desc5') }}
                            </li>
                        </ol>

                        <div :class="[$style.btn, $style.btnBack]">
                            <AppButton :text="$t('effectRules.btn')"
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

    import {mapState} from 'vuex';
    import AppButton from '@/components/ui/inputs/AppButton';
    import AppSelect from '@/components/ui/inputs/AppSelect';
    import AppInput from '@/components/ui/inputs/AppInput';
    import AppCheckbox from '@/components/ui/inputs/AppCheckbox';
    import PaypalDonation from '@/components/layout/modals/PaypalDonation';
    import DigisellerCodeDonation from '@/components/layout/modals/DigisellerCodeDonation';
    import {getJsonFromUrl} from 'assets/js/utils/commonUtils';

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
                        name: `${this.$t('effectModal.paymentMethod')} Enot.io`,
                        full_name: 'Enot.io',
                        value: 'enot',
                        id: 1
                    },
                    {
                        name: `${this.$t('effectModal.paymentMethod')} PrimePayments`,
                        full_name: 'PrimePayments',
                        value: 'primepayments',
                        id: 2
                    },
                    // },{
                    //     name: `${this.$t('effectModal.paymentMethod')} Digiseller`,
                    //     full_name: 'Digiseller',
                    //     value: 'digiseller',
                    //     id: 2
                    // },
                    {
                        name: `${this.$t('effectModal.paymentMethod')} Paypal`,
                        full_name: 'Paypal',
                        value: 'paypal',
                        id: 3
                    },
                ],

                digiOptions: [
                    {
                        name: '100 Coin of Effect',
                        full_name: '100 Coin of Effect',
                        value: '100',
                        id: 1
                    },
                    {
                        name: '250 Coin of Effect',
                        full_name: '250 Coin of Effect',
                        value: '250',
                        id: 2
                    },
                    {
                        name: '500 Coin of Effect',
                        full_name: '500 Coin of Effect',
                        value: '500',
                        id: 3
                    },
                    {
                        name: '1000 Coin of Effect',
                        full_name: '1000 Coin of Effect',
                        value: '1000',
                        id: 4
                    },
                    {
                        name: '3000 Coin of Effect',
                        full_name: '3000 Coin of Effect',
                        value: '3000',
                        id: 5
                    },
                    {
                        name: '5000 Coin of Effect',
                        full_name: '5000 Coin of Effect',
                        value: '5000',
                        id: 6
                    },
                ],

                valueSelect: {
                    name: `${this.$t('effectModal.paymentMethod')} Enot.io`,
                    value: 'enot',
                    id: 1
                },

                digiValueSelect: {
                    name: '100 Coin of Effect',
                    value: '100',
                    id: 1
                },

                valueCoin: '50',

                rule: false,

                stage: 'pay',

                errors: {
                    count: '',
                },

                currencyToday: {
                    Valute: {
                        USD: {
                            Value: ''
                        },
                        EUR: {
                            Value: ''
                        },
                    }
                }
            };
        },

        computed: {
            thisValueDigiseller() {
                return this.valueSelect.value === 'digiseller';
            },

            ...mapState({
                userId: state => state.user.user.id
            }),

            calcUsd() {
                return (this.valueCoin / this.currencyToday.Valute.USD.Value).toFixed(2);
            },

            calcEur() {
                return (this.valueCoin / this.currencyToday.Valute.EUR.Value).toFixed(2);
            }
        },

        async mounted() {
            await getJsonFromUrl('https://www.cbr-xml-daily.ru/daily_json.js', data => {
                this.currencyToday = data;
            });
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

                if (this.valueSelect.value === 'paypal') {
                    this.$modal.open(PaypalDonation);
                }
            },

            setRule() {
                this.rule = !this.rule;
            },
            setValueCoin(val) {
                // const numberPattern = /\d+/g;
                // this.valueCoin = val.r.match( numberPattern ).join('');
                this.valueCoin = val.replace(/[^0-9]/g, '');
            },
            async checkOrder() {
                if (this.rule) {
                    try {
                        const data = {
                            payment: this.valueSelect.value,
                            count: this.valueCoin
                        };

                        const res = await this.$axios.$post(`/payments/${this.userId}/checkout`, data);

                        if (this.valueSelect.value === 'enot') {
                            document.location.replace(res.redirect);
                        } else if (this.valueSelect.value === 'primepayments') {
                            if (res.redirect && res.post) {
                                const form = document.createElement('form');
                                form.action = res.redirect;
                                form.method = 'post';

                                for (const key in res.post) {
                                    // eslint-disable-next-line no-prototype-builtins
                                    if (res.post.hasOwnProperty(key)) {
                                        const hiddenField = document.createElement('input');
                                        hiddenField.type = 'hidden';

                                        if (typeof res.post[key] == 'object') {
                                            for (const __key in res.post[key]) {
                                                hiddenField.name = key + '[]';
                                                hiddenField.value = res.post[key][__key];
                                            }
                                        } else {
                                            hiddenField.name = key;
                                            hiddenField.value = res.post[key];
                                        }

                                        form.appendChild(hiddenField);
                                    }
                                }

                                document.body.appendChild(form);
                                form.submit();
                            }
                        }
                    } catch (err) {
                        console.warn('EffectDonation: ', err.response);
                        if (err?.response?.data?.validation) {
                            this.$toast.error(err.response.data.validation.count);
                            this.errors.count = err.response.data.validation.count;
                        } else {
                            this.$toast.error(err.response.data.result_msg);
                        }
                    }
                } else {
                    this.$toast.error(this.$t('notif.ruleEffect.error'));
                }
            },
            toDigiCode() {
                this.$modal.open(DigisellerCodeDonation);
            },
            setDigiValue(val) {
                this.digiValueSelect = val.option;
            },

            clearErrors() {
                this.errors.count = '';
            }

            // async checkOrder() {
            //     this.
            // }
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
        height: 10rem;
        background: linear-gradient(315.98deg, #9e00ff 5.13%, #7000ff 94.99%);
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
        font-weight: 500;
        font-size: 1.4rem;
        opacity: .4;
        width: 28.4rem;
    }

    .btn {
        margin: 0 0 0 auto;
        width: 13.4rem;
    }

    .btns {
        display: flex;
        justify-content: space-between;
    }

    .btnCode {
        width: 15.8rem;
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
