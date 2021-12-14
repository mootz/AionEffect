<template>
    <div :class="$style.ShopFilter">
        <transition name="fade"
                    mode="in-out"
        >
            <div v-if="slug"
                 :class="$style.bread">
                <ul :class="$style.breadList">
                    <li :class="[$style.breadItem, $style._catalog]">
                        <nuxt-link to="/shop">
                            Каталог
                        </nuxt-link>
                        <span> / </span>
                    </li>

                    <li :class="[$style.breadItem, $style._current]">
                        {{ activeCategory }}
                    </li>
                </ul>
            </div>
        </transition>

        <div :class="[$style.wrap, {[$style._activeCat]: slug}]">
            <div :class="$style.search">
                <AppInput search
                          placeholder="Поиск"
                          :class="$style.searchInp"
                />
            </div>

            <div :class="$style.currency">
                <AppMultiSelect :options="currency"
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
                           @click.native="openModalChoose"
                />
            </div>
        </div>

    </div>
</template>

<script>
    import AppInput from '@/components/ui/inputs/AppInput';
    import AppButton from '@/components/ui/inputs/AppButton';
    import ChoosePayTypeModal from '@/components/layout/modals/ChoosePayTypeModal';
    import AppMultiSelect from '@/components/ui/inputs/AppMultiSelect';
    export default {
        name: 'ShopFilter',
        components: {AppMultiSelect,
                     AppButton,
                     AppInput},

        props: {
            activeCategory: {
                type: String,
                default: null
            }
        },

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

        computed: {
            showPath() {
                return this.$router.history.current.fullPath.includes('/shop/goods');
            },

            slug() {
                return this.$router.history.current.params.slug;
            }
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
            },

            openModalChoose() {
                this.$modal.open(ChoosePayTypeModal);
            }
        }
    };
</script>

<style lang="scss" module>
    .ShopFilter {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .bread {
        height: 2rem;
        position: absolute;
        top: 0;
        left: 0;
    }

    .breadList {
        display: flex;
        align-items: center;
    }

    .breadItem {
        font-size: 1.6rem;
        font-weight: 500;
        opacity: .6;
        transition: $transition;

        &._catalog {
            margin-right: .4rem;

            a {
                opacity: .4;
                transition: $transition;

                &:hover {
                    opacity: .6;
                }
            }

            span {
                opacity: .2;
            }
        }
    }

    .wrap {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 0;
        transition: $transition;

        &._activeCat {
            margin-top: 4.2rem;
        }
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
