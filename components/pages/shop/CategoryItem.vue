<template>
    <nuxt-link :class="$style.CategoryItem"
               :to="`/shop/${item.key}`"
               @click.prevent="$router.push(`/shop/${item.key}`)">
        <div :class="$style.imgWrap">
            <div :class="$style.img">
                <ImageLazy :image="item.img"
                />
            </div>
        </div>

        <div :class="$style.name">
            {{ item.name }}
        </div>

    </nuxt-link>
</template>

<script>
    import ImageLazy from '@/components/common/ImageLazy';
    export default {
        name: 'CategoryItem',
        components: {ImageLazy},
        props: {
            item: {
                type: Object,
                default: () => ({})
            }
        }
    };
</script>

<style lang="scss" module>
    .CategoryItem {
        cursor: pointer;
        color: rgba(#fff, .6);
        transition: all $transition;

        &:hover {
            color: #fff;
        }
    }

    .imgWrap {
        position: relative;
        width: 100%;
        height: 20rem;
        border-radius: 30px;
        background-color: #638fd1;
    }

    .img {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .name {
        margin-top: 1.8rem;
        font-weight: 500;
        font-size: 1.4rem;
        text-align: center;
    }
</style>
