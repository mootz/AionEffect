<template>
    <transition name="fade">
        <div v-if="isActive"
             :class="$style.items">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Tooltip',
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            toggle() {
                if (this.isActive) {
                    this.$emit('close');
                } else {
                    this.$emit('open');
                }
            }
        }
    };
</script>

<style lang="scss" module>
    .items {
        display: flex;
        flex-direction: column;
        padding: 3.2rem;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.01);
        box-shadow: 0 4px 60px #111925;
        backdrop-filter: blur(100px);
    }
</style>
