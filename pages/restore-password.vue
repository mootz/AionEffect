<template>
    <div></div>
</template>

<script>
    export default {
        name: 'RestorePassword',
        beforeCreate() {
            const data = {
                token: this.$router.history.current.query.token
            };
            this.$auth.options.redirect.login = `/login/restore-password/?token=${data.token}`;
        },
    };
</script>

<style lang="scss" module>
    //
</style>
