<template>
    <div>
        <ThePreloader v-if="$nuxt.$loading.loading" />
        <div v-else
             :class="$style.wrap"
             @click.stop="closeAllPopups">
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
    </div>

</template>

<script>
    import TheHeader from '~/components/layout/TheHeader';
    import TheModal from '~/components/layout/TheModal';
    import TheSidebar from '~/components/layout/TheSidebar';
    import TheSprite from '~/components/layout/TheSprite';
    import {mapActions, mapMutations} from 'vuex';
    import ThePreloader from '@/components/layout/ThePreloader';

    export default {
        name: 'DefaultLayout',
        components: {
            ThePreloader,
            TheSprite,
            TheSidebar,
            TheHeader,
            TheModal,
        },
        middleware: 'auth',

        // async asyncData({$axios}) {
        //     const userId = localStorage['auth.userId'];
        //
        //     const user = await $axios.$get(`/api/user/${userId}`);
        //     console.log(user);
        // },


        async created() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start();
            });
            await this.userData();
            // this.$nuxt.$loading.finish();
            setTimeout(() => this.$nuxt.$loading.finish(), 1000);
        },

        methods: {
            ...mapActions({
                userData: 'user/getUserData',
                closeProfileMenu: 'header/closeProfileMenu',
                closeNotifications: 'header/closeNotifications'
            }),

            ...mapMutations({
                createNewAvatar: 'user/CREATE_AVATAR'
            }),

            // getUserData() {
            //     try {
            //         const userId = localStorage['auth.userId'];
            //         const {data: response} = this.$axios.get(`/api/user/${userId}`);
            //         console.log(response.data.user);
            //     } catch (err) {
            //         console.log(err);
            //         console.log(err.response);
            //     }
            // },

            closeAllPopups() {
                this.closeProfileMenu();
                this.closeNotifications();
            },
        },
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
