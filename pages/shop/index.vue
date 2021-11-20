<template>
    <div :class="$style.Shop">
        <ShopFilter />
    </div>
</template>

<script>
    import ShopFilter from '@/components/pages/shop/ShopFilter';
    export default {
        name: 'Shop',
        components: {ShopFilter}
    };
</script>

<style lang="scss" module>
    //
</style>
