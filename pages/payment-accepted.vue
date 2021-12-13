<template>
    <div></div>
</template>

<script>
    export default {
        name: 'PaymentAccepted',

        mounted() {
            this.$router.push(this.localePath('/'));
            this.$toast.success(this.$t('notif.paymentMeth.accept'));
        }
    };
</script>
