<template>
    <div :class="$style.AppTabs">
        <div :class="$style.tabs">
            <nuxt-link v-for="(item, index) in tabs"
                       :key="index"
                       :to="item.to"
                       :class="$style.tab"
                       :exact-active-class="$style.isActive"
            >
                {{ item.name }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppTabs',
        props: {
            tabs: {
                type: Array,
                default: () => [
                    {
                        name: 'Таб 1',
                        to: '/tab1'
                    },
                    {
                        name: 'Таб 2',
                        to: '/tab2'
                    },
                ]
            }
        }
    };
</script>

<style lang="scss" module>
    .AppTabs {
        margin-bottom: 3.2rem;
    }

    .tabs {
        display: flex;
    }

    .tab {
        margin-right: 1.2rem;
        padding: 2rem;
        font-size: 1.4rem;
        font-weight: 500;
        color: rgba(#fff, .4);
        border-radius: 100px;
        transition: $transition;
        background-color: rgba(#fff, .02);

        &:hover {
            color: #fff;
            background-color: $accent;
        }

        &.isActive {
            color: #fff;
            background-color: $accent;
        }
    }
</style>
