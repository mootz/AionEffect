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
                        name: this.$t('history.tabs.account'),
                        to: '/history/account'
                    },
                    {
                        name: this.$t('history.tabs.donate'),
                        to: '/history/donate',
                        disable: false
                    },
                    // {
                    //     name: 'Голосования',
                    //     to: '/history/vote'
                    // },
                    {
                        name: this.$t('history.tabs.promo'),
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
