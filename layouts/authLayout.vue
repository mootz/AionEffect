<template>
    <div>
        <ThePreloader v-if="$nuxt.$loading.loading" />
        <main v-else
              :class="$style.authWrapper">

            <div :class="$style.wrap">
                <nuxt />
            </div>

            <a href="https://aioneffect.com/"
               :class="$style.logo">
                <AppLogo />
            </a>

            <div :class="$style.socials">
                <AppSocials size="login" />
            </div>
        </main>

        <TheModal />
    </div>
</template>

<script>
    import TheModal from '~/components/layout/TheModal';
    import AppLogo from '~/components/common/AppLogo';
    import AppSocials from '~/components/common/AppSocials';
    import ThePreloader from '@/components/layout/ThePreloader';

    export default {
        name: 'AuthLayout',
        components: {
            ThePreloader,
            AppSocials,
            AppLogo,
            TheModal,
        },
        middleware: 'auth',
        created() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start();
                if (localStorage['auth._token.local'] !== false) {
                    // this.$router.push('/');
                    // console.log(localStorage['auth._token.local'] !== false);
                }

                setTimeout(() => this.$nuxt.$loading.finish(), 1000);
            });
        },


        async mounted() {
            try {
                await this.$recaptcha.init();
            } catch (e) {
                console.warn('Initialization recaptcha error: ', e);
            }
        },

    };
</script>

<style lang="scss" module>
    .authWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-size: cover;
        background-image: url('/images/login-bg.png');
        background-position: left bottom;

        @include respond-to(xs) {
            flex-direction: column;
            height: 100%;
            min-height: 100vh;
            //padding-bottom: 20rem;
            padding-top: 4rem;
        }
    }

    .wrap {
        width: 100%;

        @include respond-to(xs) {
            margin-bottom: 8rem;
        }
    }

    .logo {
        position: absolute;
        bottom: 6rem;
        left: 6rem;
        width: 13rem;
        height: 7rem;

        @include respond-to(xs) {
            position: relative;
            margin: auto auto 4.2rem;
            left: auto;
            bottom: auto;
            //transform: translateX(-50%);
        }
    }

    .socials {
        position: absolute;
        bottom: 6rem;
        right: 6rem;

        @include respond-to(xs) {
            position: relative;
            margin: 0 auto 5rem;
            left: auto;
            right: auto;
            bottom: auto;
            //transform: translateX(-50%);
        }
    }
</style>

<style lang="scss" scoped>
    /* stylelint-disable */
    ::v-deep .social {
        .social__item {
            width: 3rem;
            height: 3rem;
            padding: .7rem;
         }
    }
</style>
