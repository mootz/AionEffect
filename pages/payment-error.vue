<template>
    <div></div>
</template>

<script>
    export default {
        name: 'PaymentAccepted',

        mounted() {
            this.$router.push(this.localePath('/'));
            this.$toast.error(this.$t('notif.paymentMeth.error'));
        }
    };
</script>
