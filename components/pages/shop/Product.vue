<template>
    <div :class="$style.Product">
        <div :class="$style.img">
            <ImageLazy image="images/item_placeholder.png"
                       border-radius="30px" />
        </div>

        <div :class="$style.name">
            {{ item.name }}
        </div>

        <div :class="$style.priceWrap">
            <div :class="[$style.priceIconWrap, $style[item.price.type]]">
                <span :class="$style.priceIcon">
                    <svg>
                        <use :xlink:href="`#icon-${typeIcon}`" />
                    </svg>
                </span>
            </div>
            <span :class="$style.priceValue">{{ item.price.value }}</span>

        </div>
    </div>
</template>

<script>
    import ImageLazy from '@/components/common/ImageLazy';
    export default {
        name: 'Product',
        components: {ImageLazy},
        props: {
            item: {
                type: Object,
                default: () => ({})
            }
        },

        computed: {
            typeIcon() {
                return this.item.price.type === 'effect' ? 'coin-effect' : this.item.price.type;
            }
        }
    };
</script>

<style lang="scss" module>
    .Product {
        cursor: pointer;

        &:hover {
            .name {
                opacity: 1;
            }
        }
    }

    .img {
        position: relative;
        height: 14rem;
        border-radius: 30px;
    }

    .name {
        margin: 1.4rem 0;
        font-weight: 500;
        opacity: .4;
        transition: $transition;
    }

    .priceWrap {
        display: flex;
        align-items: center;
    }

    .priceIconWrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.4rem;
        height: 2.4rem;
        margin-right: .8rem;
        border-radius: 100%;

        &.effect {
            background: #9e00ff;
            box-shadow: 0 10px 20px rgba(158, 0, 255, 0.3);
        }

        &.kinah {
            background: #ff8a00;
            box-shadow: 0 10px 20px rgba(255, 138, 0, 0.3);
        }

        &.bonus {
            background: #ff00c7;
            box-shadow: 0 10px 20px rgba(255, 0, 199, 0.3);
        }
    }

    .priceIcon {
        display: flex;
        width: 1.6rem;
        height: 1.6rem;
        fill: #fff;
    }

    .priceValue {
        font-weight: 600;
        font-size: 1.8rem;
    }
</style>
