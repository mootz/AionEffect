<template>
    <div :class="$style.Goods">
        <Product v-for="item in goods"
                 :key="item.id"
                 :item="item"
                 @click.native="openItem"
        />
    </div>
</template>

<script>
    import Product from '@/components/pages/shop/Product';
    import ProductModal from '@/components/layout/modals/ProductModal';
    export default {
        name: 'Goods',
        components: {Product},
        data() {
            return {
                goods: [
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'effect',
                            value: '700'
                        },
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 1
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'bonus',
                            value: '10,231'
                        },
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 2
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'kinah',
                            value: '10,231,131'
                        },
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 3
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'kinah',
                            value: '10,231,131'
                        },
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 4
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'kinah',
                            value: '10,231,131'
                        },
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 5
                    },
                ]
            };
        },

        methods: {
            openItem() {
                this.$modal.open(ProductModal);
            }
        }
    };
</script>

<style lang="scss" module>
    .Goods {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        gap: 20px 20px;
        grid-template-areas: ". . . . .";
        width: 100%;
        height: 100%;
    }
</style>
