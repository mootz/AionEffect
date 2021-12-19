<template>
    <div :class="$style.Categories">
        <div :class="$style.items">
            <CategoryItem v-for="cat in categories"
                          :key="cat.name"
                          :item="cat"
                          :class="$style.item"
            />
        </div>
    </div>
</template>

<script>
    import CategoryItem from '@/components/pages/shop/CategoryItem';
    import {mapState} from 'vuex';
    export default {
        name: 'Categories',
        components: {CategoryItem},

        computed: {
            ...mapState({
                categories: state => state.shop.categories
            })
        },
    };
</script>

<style lang="scss" module>
    .items {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        gap: 3.2rem 20px;
        grid-template-areas: ". . . . .";
        width: 100%;
        height: 100%;
    }
</style>
