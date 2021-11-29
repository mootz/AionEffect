<template>
    <div :class="$style.Categories">
        <div :class="$style.items">
            <CategoryItem v-for="cat in categories"
                          :key="cat.name"
                          :item="cat"
                          :class="$style.item"
                          @click.native="goGoods(cat.name)"
            />
        </div>
    </div>
</template>

<script>
    import CategoryItem from '@/components/pages/shop/CategoryItem';
    export default {
        name: 'Categories',
        components: {CategoryItem},
        data() {
            return {
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

        methods: {
            goGoods(name) {
                this.$emit('open-category', name);
                this.$router.push({path: '/shop/goods'});
            }
        }
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

    .item {
        //width: calc(20% - .4rem);
        //margin-bottom: 3.2rem;
    }
</style>
