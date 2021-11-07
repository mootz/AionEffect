<template>
    <div class="auth-page">
        <transition name="fade"
                    mode="out-in">
            <Login v-if="activeStep === 'login'"
                   @change-step="changeStep" />
            <Register v-else-if="activeStep === 'register'"
                      @change-step="changeStep" />
            <Forgot v-else-if="activeStep === 'forgot'"
                    @change-step="changeStep" />
            <AcceptRegister v-else-if="activeStep === 'acceptRegister'"
                            @change-step="changeStep" />
        </transition>
    </div>
</template>

<script>
    import Login from '~/components/layout/auth/Login';
    import Register from '~/components/layout/auth/Register';
    import Forgot from '~/components/layout/auth/Forgot';
    import AcceptRegister from '~/components/layout/auth/AcceptRegister';
    export default {
        name: 'LoginPage',
        components: {AcceptRegister, Forgot, Register, Login},
        layout: 'authLayout',
        data() {
            return {
                activeStep: 'login'
            };
        },

        methods: {
            changeStep(val) {
                this.activeStep = val;
            }
        }
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
