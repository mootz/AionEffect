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
                    await this.$axios.$post(`/user/${localStorage['auth.userId']}/change-confirmation-for-email`, data);
                    this.$router.push(this.localePath('/'));
                    this.$toast.success(this.$t('notif.changeEmail.accept'));
                } catch (err) {
                    console.log(err);
                    console.warn('Accept Email', err.response);
                    this.$toast.error(err.response.data.result_msg);
                    this.$router.push(this.localePath('/'));
                }
            }
        }
    };
</script>

<style lang="scss" module>
    //
</style>
