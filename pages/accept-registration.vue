<template>
    <div></div>
</template>

<script>
    export default {
        name: 'AcceptRegistration',
        mounted() {
            this.sendAcceptEmail();
        },

        methods: {

            async sendAcceptEmail() {
                const data = {
                    token: this.$router.history.current.query.token
                };
                try {
                    await this.$axios.$post('/user/confirm-registration', data);
                } catch (err) {
                    console.log(err);
                    console.warn('Accept Register', err.response);
                    this.$router.push('/login');
                }
                this.$router.push('/login');
                this.$toast.success('Аккаунт успешно зарегистрирован');
            }
        }
    };
</script>

<style lang="scss" module>
    //
</style>
