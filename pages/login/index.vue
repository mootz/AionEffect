<template>
    <div class="auth-page">
        <transition name="fade"
                    mode="out-in">

            <Login v-if="isLogin" />
            <NuxtChild v-else />

        </transition>


    </div>
</template>

<script>
    import Login from '~/components/layout/auth/Login';
    export default {
        name: 'LoginPage',
        components: {
            Login
        },
        layout: 'authLayout',
        data() {
            return {
                // activeStep: 'login'
                isLogin: true
            };
        },
        watch: {
            '$route.name': {
                handler: function(name) {
                    this.isLogin = name === 'login';
                },
                deep: true,
                immediate: true
            }
        },
    };
</script>

<style lang="scss" scoped>
    .auth-page {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin: auto;
        width: calc(100% - 10px);
    }
</style>
