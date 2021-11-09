<template>
    <div :class="$style.wrap"
         @click.stop="closeProfileMenu">
        <TheSidebar />

        <div :class="$style.content">
            <TheHeader />

            <main :class="$style.main">
                <nuxt />
            </main>
        </div>

        <TheModal />
        <TheSprite />
    </div>
</template>

<script>
    import TheHeader from '~/components/layout/TheHeader';
    import TheModal from '~/components/layout/TheModal';
    import TheSidebar from '~/components/layout/TheSidebar';
    import TheSprite from '~/components/layout/TheSprite';
    import {mapActions} from 'vuex';

    export default {
        components: {
            TheSprite,
            TheSidebar,
            TheHeader,
            TheModal,
        },

        methods: {
            ...mapActions({
                closeProfileMenu: 'header/closeProfileMenu',
            }),
        }
    };
</script>

<style lang="scss" module>
    .main {
        height: calc(100vh - #{$header-h} - #{$header-padding});
        padding-top: 7.2rem;
    }

    .wrap {
        display: flex;
        justify-content: space-between;
    }

    .content {
        width: 100%;
        height: 100%;
        margin-left: 6.2rem;
        padding: 3.4rem 3rem 0 0;
        overflow-y: auto;
    }
</style>
