<template>
    <transition name="loader"
                :duration="{ enter: 100, leave: 400 }"
    >
        <div v-if="loading"
             :class="$style.ThePreloader">
            <img :class="$style.logo"
                 src="/images/preload.svg"
                 alt="">
        </div>
    </transition>

</template>

<script>
    export default {
        name: 'ThePreloader',

        data: () => ({
            loading: false
        }),
        methods: {
            start() {
                this.loading = true;
            },
            finish() {
                this.loading = false;
            }
        }
    };
</script>

<style lang="scss" module>
    .ThePreloader {
        z-index: 999;
        opacity: 1;
        visibility: visible;
        background-color: #101825;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
    }

    .logo {
        max-width: 100%;
        width: 10rem;
        height: 10rem;
        display: block;
        animation: preanimateout 4s ease infinite;
    }

    @keyframes preanimateout {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.3);
        }

        100% {
            transform: scale(1);
        }
    }
</style>
