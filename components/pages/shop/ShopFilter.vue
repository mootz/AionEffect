<template>
    <div :class="$style.ShopFilter">
        <div :class="$style.search">
            <AppInput search
                      placeholder="Поиск"
                      :class="$style.searchInp"
            />
        </div>

        <div :class="$style.currency">
            <AppSelect multiple
                       :options="currency"
                       :value="value"
                       @on-select="selectCurr"
                       @on-remove="removeCurr"
            />
        </div>

        <div :class="$style.values">
            <div :class="$style.valColumn">
                <div :class="$style.valTitle">
                    12,241
                </div>
                <div :class="$style.valCurrency">
                    CoE
                </div>
            </div>
            <div :class="$style.valColumn">
                <div :class="$style.valTitle">
                    13,450
                </div>
                <div :class="$style.valCurrency">
                    Bonus
                </div>
            </div>
            <div :class="$style.valColumn">
                <div :class="$style.valTitle">
                    0
                </div>
                <div :class="$style.valCurrency">
                    Kinah
                </div>
            </div>
        </div>

        <div :class="$style.btn">
            <AppButton text="Пополнить баланс"
                       height="5.4rem"
            />
        </div>
    </div>
</template>

<script>
    import AppInput from '@/components/ui/inputs/AppInput';
    import AppSelect from '@/components/ui/inputs/AppSelect';
    import AppButton from '@/components/ui/inputs/AppButton';
    export default {
        name: 'ShopFilter',
        components: {AppButton,
                     AppSelect,
                     AppInput},

        data() {
            return {
                currency: [
                    {
                        name: 'CoE',
                        full_name: 'Coin of Effect',
                        value: 'effect',
                        id: 1
                    },
                    {
                        name: 'Bonus',
                        full_name: 'Bonus',
                        value: 'bonus',
                        id: 2
                    },
                    {
                        name: 'Kinah',
                        full_name: 'Kinah',
                        value: 'kinah',
                        id: 3
                    },
                ],
                value: [
                    {
                        name: 'CoE',
                        full_name: 'Coin of Effect',
                        value: 'effect',
                        id: 1
                    },
                    {
                        name: 'Bonus',
                        full_name: 'Bonus',
                        value: 'bonus',
                        id: 2
                    },
                    {
                        name: 'Kinah',
                        full_name: 'Kinah',
                        value: 'kinah',
                        id: 3
                    }
                ]
            };
        },
        methods: {
            selectCurr(val) {
                this.value.push({
                    name: val.option.name,
                    value: val.option.value,
                    id: val.option.id
                });
            },
            removeCurr(val) {
                this.value = this.value.filter(e => e.id !== val);
            }
        }
    };
</script>

<style lang="scss" module>
    .ShopFilter {
        display: flex;
        align-items: center;
    }

    .search {
        margin-right: 1rem;
    }

    .currency {
        margin-right: 2rem;
        width: 20.4rem;
    }

    .values {
        display: flex;
    }

    .valColumn {
        display: flex;
        flex-direction: column;
        margin-right: 2rem;
        padding-right: 2rem;
        border-right: 1px solid rgba(#fff, .04);

        &:last-child {
            border-right: 0;
            margin-right: 0;
        }
    }

    .valTitle {
        margin-bottom: .4rem;
        font-size: 1.8rem;
        font-weight: 600;
    }

    .valCurrency {
        font-weight: 500;
        font-size: 1.4rem;
    }

    .btn {
        margin-left: auto;
    }
</style>
