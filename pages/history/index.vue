<template>
    <div class="History">
        <AppTabs :tabs="tabs" />
        <div class="container">

            <transition name="fade">
                <NuxtChild />
            </transition>
        </div>
    </div>
</template>

<script>
    import AppTabs from '~/components/common/AppTabs';
    export default {
        name: 'History',
        components: {AppTabs},
        data() {
            return {
                tabs: [
                    {
                        name: 'Аккаунт',
                        to: '/history/account'
                    },
                    {
                        name: 'Пожертвования',
                        to: '/history/donate',
                        disable: true
                    },
                    // {
                    //     name: 'Голосования',
                    //     to: '/history/vote'
                    // },
                    {
                        name: 'Промокод',
                        to: '/history/promo',
                        disable: true
                    },
                ]
            };
        }
    };
</script>

<style lang="scss" module>
    //
</style>
