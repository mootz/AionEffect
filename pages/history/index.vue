<template>
    <div class="History">
        <h1>
            Im index
        </h1>

        <nuxt-link to="/history/hey">
            to hey
        </nuxt-link>
        <div class="container">

            <NuxtChild />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'History',
        data() {
            return {
                tabs: [
                    {
                        id: 1,
                        name: 'Аккаунт',
                        routName: '/account'
                    },
                    {
                        id: 2,
                        name: 'Пожертвования',
                        routName: '/account'
                    },
                    {
                        id: 3,
                        name: 'Голосования',
                        routName: '/account'
                    },
                    {
                        id: 4,
                        name: 'Промокод',
                        routName: '/account'
                    },
                ]
            };
        }
    };
</script>

<style lang="scss" module>
    //
</style>
