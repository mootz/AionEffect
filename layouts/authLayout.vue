<template>
    <div>
        <main :class="$style.authWrapper">
            <div :class="$style.wrap">
                <nuxt />
            </div>

            <div :class="$style.logo">
                <AppLogo />
            </div>

            <div :class="$style.socials">
                <AppSocials />
            </div>
        </main>

        <TheModal />
    </div>
</template>

<script>
    import TheModal from '~/components/layout/TheModal';
    import AppLogo from '~/components/common/AppLogo';
    import AppSocials from '~/components/common/AppSocials';

    export default {
        components: {
            AppSocials,
            AppLogo,
            TheModal,
        },

        methods: {
        }
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
        width: 9.6rem;
        height: 5.4rem;

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
