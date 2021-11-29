<template>
    <div :class="$style.wrap"
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
</template>

<script>
    import TheHeader from '~/components/layout/TheHeader';
    import TheModal from '~/components/layout/TheModal';
    import TheSidebar from '~/components/layout/TheSidebar';
    import TheSprite from '~/components/layout/TheSprite';
    import {mapActions, mapMutations} from 'vuex';

    export default {
        components: {
            TheSprite,
            TheSidebar,
            TheHeader,
            TheModal,
        },
        middleware: 'auth',


        async mounted() {
            this.createNewAvatar();

            // await this.getUserData();
        },

        methods: {
            ...mapActions({
                closeProfileMenu: 'header/closeProfileMenu',
                closeNotifications: 'header/closeNotifications'
            }),

            ...mapMutations({
                createNewAvatar: 'user/CREATE_AVATAR'
            }),

            closeAllPopups() {
                this.closeProfileMenu();
                this.closeNotifications();
            },

            // getUserData() {
            //     // const dataLogin = {
            //     //     login: this.login,
            //     //     password: this.password,
            //     //     remember: Number(this.remember)
            //     // };
            //
            //     try {
            //         const response = this.$auth.loginWith('local', {data: {
            //             login: this.login,
            //             password: this.password,
            //             remember: Number(this.remember)
            //         }});
            //
            //         // this.$auth.setUser({data: {dataLogin}})
            //
            //         console.log(response);
            //     } catch (err) {
            //         console.log(err.response);
            //
            //         if (err.response.data.validation) {
            //             const listErrors = Object.entries(err.response.data.validation);
            //
            //             listErrors.forEach((e, index) => {
            //                 setTimeout(() => {
            //                     this.errors[e[0]] = e[1];
            //                     this.$toast.error(e[1], {timeout: 5000});
            //                 }, index * 500);
            //             });
            //         } else {
            //             this.$toast.error(err.response.data.result_msg);
            //         }
            //     }
            // }
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
