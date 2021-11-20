<template>
    <div class="ShopFilter">
        <div class="search">
            <AppInput search
                      placeholder="Поиск"
            />
        </div>
    </div>
</template>

<script>
    import AppInput from '@/components/ui/inputs/AppInput';
    export default {
        name: 'ShopFilter',
        components: {AppInput},
    };
</script>

<style lang="scss" module>
    //
</style>
