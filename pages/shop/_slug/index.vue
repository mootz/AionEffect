<template>
    <div :class="$style.Goods">
        <div :class="$style.wrap">
            <Product v-for="item in goods"
                     :key="item.id"
                     :item="item"
            />
        </div>

        <div :class="$style.load">
            <div :class="$style.loadText">
                Вы посмотрели 1032 из 1312
            </div>
            <div :class="$style.loadBtn">
                <AppButton text="Загрузить еще"
                           reverse
                           height="5.4rem"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Product from '@/components/pages/shop/Product';
    import AppButton from '@/components/ui/inputs/AppButton';
    export default {
        name: 'Goods',
        components: {AppButton,
                     Product},
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
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://i.ytimg.com/vi/HTf9xbpYEHA/maxresdefault.jpg',
                             id: 1},
                        ],
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
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/ss_141bf907f262cd05d2e077d96bc5ab83770d48cb.1920x1080.jpg?t=1636629888',
                             id: 2},
                        ],
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
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/ss_141bf907f262cd05d2e077d96bc5ab83770d48cb.1920x1080.jpg?t=1636629888',
                             id: 2},
                        ],
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
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/ss_141bf907f262cd05d2e077d96bc5ab83770d48cb.1920x1080.jpg?t=1636629888',
                             id: 2},
                        ],
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
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/ss_141bf907f262cd05d2e077d96bc5ab83770d48cb.1920x1080.jpg?t=1636629888',
                             id: 2},
                        ],
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 5
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'effect',
                            value: '700'
                        },
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://i.ytimg.com/vi/HTf9xbpYEHA/maxresdefault.jpg',
                             id: 2},
                        ],
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 6
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'bonus',
                            value: '10,231'
                        },
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/ss_141bf907f262cd05d2e077d96bc5ab83770d48cb.1920x1080.jpg?t=1636629888',
                             id: 2},
                        ],
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 7
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'kinah',
                            value: '10,231,131'
                        },
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/ss_141bf907f262cd05d2e077d96bc5ab83770d48cb.1920x1080.jpg?t=1636629888',
                             id: 2},
                        ],
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 8
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'kinah',
                            value: '10,231,131'
                        },
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/ss_141bf907f262cd05d2e077d96bc5ab83770d48cb.1920x1080.jpg?t=1636629888',
                             id: 2},
                        ],
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 9
                    },
                    {
                        name: 'Anniversary Fairy Treasure Pack',
                        desc: 'Grab yours and get Enchantment Stones that can improve your Stigmas by up to 3 levels! You can participate in Ribbit’s Lucky Pot with this item and have a chance of winning fantastic prizes! Check the AION Newsletter to learn more about how the lucky pot works and what you can win.',
                        price: {
                            type: 'kinah',
                            value: '10,231,131'
                        },
                        images: [
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/capsule_616x353.jpg?t=1636629888',
                             id: 1},
                            {src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/261430/ss_141bf907f262cd05d2e077d96bc5ab83770d48cb.1920x1080.jpg?t=1636629888',
                             id: 2},
                        ],
                        tags: ['Нельзя продать', 'Только для асмодиан', 'Привязан к персонажу'],
                        id: 10
                    },
                ]
            };
        },

        mounted() {
            console.log(this.$router);
        },

        methods: {
        }
    };
</script>

<style lang="scss" module>
    .Goods {
        display: flex;
        flex-direction: column;
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
        margin: 3.4rem auto 3.8rem;
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
</style>
