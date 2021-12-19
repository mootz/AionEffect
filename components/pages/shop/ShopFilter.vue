<template>
    <div :class="$style.ShopFilter">
        <transition name="fade"
                    mode="in-out"
        >
            <div v-if="thisSlug"
                 :class="$style.bread">
                <ul :class="$style.breadList">
                    <li :class="[$style.breadItem, $style._catalog]">
                        <nuxt-link to="/shop">
                            {{ $t('shop.bread') }}
                        </nuxt-link>
                        <span> / </span>
                    </li>

                    <li :class="[$style.breadItem, $style._current]">
                        {{ activeCategory ? activeCategory.name : '' }}
                    </li>
                </ul>
            </div>
        </transition>

        <div :class="[$style.wrap, {[$style._activeCat]: activeCategory ? activeCategory.key : null}, {[$style._activeSubCategories]: subcategories.length > 1}]">
            <div :class="$style.search">
                <AppInput search
                          :placeholder="$t('shop.search')"
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
                        {{ balance.effect }}
                    </div>
                    <div :class="$style.valCurrency">
                        CoE
                    </div>
                </div>
                <div :class="$style.valColumn">
                    <div :class="$style.valTitle">
                        {{ balance.bonus }}
                    </div>
                    <div :class="$style.valCurrency">
                        Bonus
                    </div>
                </div>
                <div :class="$style.valColumn">
                    <div :class="$style.valTitle">
                        {{ balance.kinah }}
                    </div>
                    <div :class="$style.valCurrency">
                        Kinah
                    </div>
                </div>
            </div>

            <div :class="$style.btn">
                <AppButton :text="$t('shop.addPayment')"
                           height="5.4rem"
                           @click.native="openModalChoose"
                />
            </div>
        </div>

        <transition name="fade"
                    mode="in-out"
        >
            <ShopCategories v-if="subcategories.length > 1"
                            :subcategories="subcategories"
                            :class="$style.subcategories"
                            :active-sub-category="activeSubCategory"
                            @click-subcategory="setSubCategories"
            />
        </transition>

    </div>
</template>

<script>
    import AppInput from '@/components/ui/inputs/AppInput';
    import AppButton from '@/components/ui/inputs/AppButton';
    import ChoosePayTypeModal from '@/components/layout/modals/ChoosePayTypeModal';
    import AppMultiSelect from '@/components/ui/inputs/AppMultiSelect';
    import {mapState, mapActions} from 'vuex';
    import ShopCategories from '@/components/pages/shop/ShopCategories';

    export default {
        name: 'ShopFilter',
        components: {ShopCategories,
                     AppMultiSelect,
                     AppButton,
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
                ],
                thisSlug: ''
            };
        },

        computed: {

            slug() {
                return this.$router.history.current.params.slug;
            },

            ...mapState({
                activeCategory: state => state.shop.activeCategory,
                balance: state => state.user.user.balance,
                subcategories: state => state.shop.subcategories,
                activeSubCategory: state => state.shop.activeSubCategory,
            })
        },

        watch: {
            '$route.params.slug': function(e) {
                this.thisSlug = e;
            }
        },

        mounted() {
            this.thisSlug = this.$route.params.slug;
        },

        async created() {
            await this.$nextTick(() => {
                this.getCategories();
            });
        },

        methods: {
            ...mapActions({
                getCategories: 'shop/getCategories',
                setSubCategories: 'shop/setSubCategories',
            }),

            selectCurr(val) {
                this.value.push({
                    name: val.option.name,
                    value: val.option.value,
                    id: val.option.id
                });
                this.$emit('change', this.value);
            },
            removeCurr(val) {
                this.value = this.value.filter(e => e.id !== val);
                this.$emit('change', this.value);
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
