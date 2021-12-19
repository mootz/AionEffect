<template>
    <div :class="$style.CategoryItem"
         @click.prevent="toCategory">
        <div :class="$style.imgWrap">
            <div :class="$style.img">
                <ImageLazy image="images/item_placeholder.jpg"
                           border-radius="30px"
                />
            </div>
        </div>

        <div :class="$style.name">
            {{ item.name }}
        </div>

    </div>
</template>

<script>
    import ImageLazy from '@/components/common/ImageLazy';
    import {mapActions} from 'vuex';

    export default {
        name: 'CategoryItem',
        components: {ImageLazy},
        props: {
            item: {
                type: Object,
                default: () => ({})
            }
        },

        methods: {
            ...mapActions({
                getItems: 'shop/getItems'
            }),
            async toCategory() {
                await this.getItems({name: this.item.key});
                await this.$router.push(this.localePath(`/shop/${this.item.key}`));
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
        //border-radius: 30px;
        background-color: transparent;
        //overflow: hidden;
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
