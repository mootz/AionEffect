<template>
    <div :class="$style.Shop">
        <div :class="$style.header">
            <ShopFilter @change="updateShop" />
        </div>

        <NuxtChild />
    </div>
</template>

<script>
    import ShopFilter from '@/components/pages/shop/ShopFilter';
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'Shop',
        components: {ShopFilter},

        computed: {
            ...mapState({
                categories: state => state.shop.categories
            })
        },

        mounted() {
            this.getCategories();
        },

        methods: {
            ...mapActions({
                getCategories: 'shop/getCategories',
                updateCategories: 'shop/updateCategories',
                updateItems: 'shop/updateItems',
                updateCurrency: 'shop/updateCurrency'
            }),

            updateShop(val) {
                this.updateCurrency(val);
                this.updateCategories();
                this.updateItems();
            }
        }
    };
</script>

<style lang="scss" module>
    .Shop {
        height: 100%;
    }

    .items {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        gap: 3.2rem 20px;
        grid-template-areas: ". . . . .";
        width: 100%;
        height: 100%;
    }

    .header {
        margin-bottom: 3.2rem;
    }
</style>
