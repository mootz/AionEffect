<template>
    <div :class="$style.Shop">
        <div :class="$style.header">
            <ShopFilter :active-category="activeCategory" />
        </div>

        <div :class="$style.categories">
            <div :class="$style.items">
                <CategoryItem v-for="cat in categories"
                              :key="cat.key"
                              :item="cat"
                              :class="$style.item"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import ShopFilter from '@/components/pages/shop/ShopFilter';
    import CategoryItem from '@/components/pages/shop/CategoryItem';
    import {mapActions, mapState} from 'vuex';

    export default {
        name: 'Shop',
        components: {ShopFilter, CategoryItem},

        computed: {
            ...mapState({
                categories: state => state.shop.categories
            })
        },

        mounted() {
            this.getCategories();
            console.log(this.$router);
        },

        methods: {
            ...mapActions({
                getCategories: 'shop/getCategories'
            }),
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
