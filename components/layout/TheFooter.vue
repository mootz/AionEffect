<template>
    <footer :class="$style.TheFooter">
        <div :class="$style.wrap"
             class="container">
            The Footer

        </div>
    </footer>
</template>

<script>

    export default {
        components: {
        },
    };
</script>

<style lang="scss" module>
    .TheFooter {
        background-color: rgba(grey, 0.4);
    }

    .wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: $footer-h;
    }
</style>
