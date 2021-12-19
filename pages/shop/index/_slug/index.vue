<template>
    <div :class="$style.Goods">
        <div v-if="goods.length"
             :class="$style.wrap">
            <Product v-for="item in goods"
                     :key="item.id"
                     :item="item"
            />
        </div>
        <p v-else
           :class="$style.empty">
            {{ $t('shop.empty') }}
        </p>

        <div v-if="goodsPag.page_all !== currentPage && goods.length !== 0 && goodsPag.page_all !== 1"
             :class="$style.load">
            <div :class="$style.loadText">
                Вы посмотрели {{ goodsPag.product_count * currentPage }} из {{ goodsPag.count }}
            </div>
            <div :class="$style.loadBtn">
                <AppButton text="Загрузить еще"
                           reverse
                           height="5.4rem"
                           @click.native="nextPage"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Product from '@/components/pages/shop/Product';
    import AppButton from '@/components/ui/inputs/AppButton';
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'Goods',
        components: {AppButton,
                     Product},
        data() {
            return {
            //     currentPage: 1
            };
        },

        computed: {
            ...mapState({
                goods: state => state.shop.items,
                goodsPag: state => state.shop.itemsPag,
                currentPage: state => state.shop.currentPage
            })
        },

        async mounted() {
            await this.setActiveCategory();
            await this.getItems({page: 1});
            await this.getSubcategories();
        },

        beforeDestroy() {
            this.clearActiveCategory();
            this.clearSubCategories();
        },

        methods: {
            ...mapActions({
                getItems: 'shop/getItems',
                setActiveCategory: 'shop/setActiveCategory',
                clearActiveCategory: 'shop/clearActiveCategory',
                clearSubCategories: 'shop/clearSubCategories',
                setPageItems: 'shop/setPageItems',
                getSubcategories: 'shop/getSubCategories'
            }),

            nextPage() {
                this.setPageItems(this.currentPage + 1);
            }
        },
    };
</script>

<style lang="scss" module>
    .Goods {
        display: flex;
        flex-direction: column;
        padding-bottom: 3.8rem;
    }

    .wrap {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        gap: 20px 20px;
        grid-template-areas: ". . . . .";
        width: 100%;
        height: 100%;
    }

    .load {
        margin: 3.4rem auto 0;
    }

    .loadText {
        margin-bottom: 1.4rem;
        text-align: center;
        opacity: .4;
        font-weight: 500;
    }

    .loadBtn {
        width: 24rem;
    }

    .empty {
        font-size: 4rem;
        text-align: center;
        opacity: .4;
        font-weight: 500;
    }
</style>
