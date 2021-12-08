<template>
    <div></div>
</template>

<script>
    export default {
        name: 'AcceptRegistration',
        mounted() {
            this.sendAcceptPassword();
        },

        methods: {

            async sendAcceptPassword() {
                const data = {
                    token: this.$router.history.current.query.token
                };
                console.log(data);
                try {
                    await this.$axios.$post(`/user/${localStorage['auth.userId']}/change-confirmation-for-password`, data);
                    this.$router.push('/');
                    this.$toast.success('Пароль учетной записи был успешно обновлен');
                } catch (err) {
                    console.log(err);
                    console.warn('Accept Password', err.response);
                    this.$toast.error(err.response.data.result_msg);
                    this.$router.push('/');
                }
            }
        }
    };
</script>

<style lang="scss" module>
    //
</style>
