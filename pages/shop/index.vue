<template>
    <div :class="$style.Shop">
        <div :class="$style.header">
            <ShopFilter :active-category="activeCategory" />
        </div>

        <NuxtChild @open-category="openCategory" />
    </div>
</template>

<script>
    import ShopFilter from '@/components/pages/shop/ShopFilter';
    export default {
        name: 'Shop',
        components: {ShopFilter},
        data() {
            return {
                activeCategory: null,
                categories: [
                    {
                        name: 'Популярное'
                    },
                    {
                        name: 'Премиум'
                    },
                    {
                        name: 'Полезное'
                    },
                    {
                        name: 'Наборы'
                    },
                    {
                        name: 'Бесплатное'
                    },
                    {
                        name: 'Внешний вид'
                    },
                    {
                        name: 'Оружие и Щиты'
                    },
                    {
                        name: 'Эмоции и движения'
                    },
                    {
                        name: 'Питомцы и Маунты'
                    },
                    {
                        name: 'Домоводство'
                    },
                ]
            };
        },

        mounted() {
            this.$router.push('/shop/categories');
        },

        methods: {
            openCategory(name) {
                this.activeCategory = name;
            }
        }
    };
</script>

<style lang="scss" module>
    .Shop {
        height: 100%;
    }

    .header {
        margin-bottom: 3.2rem;
    }
</style>
