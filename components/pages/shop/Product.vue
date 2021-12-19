<template>
    <div :class="$style.Product">
        <div :class="[$style.img, {[$style._zoom]: item.img_zoom}]"
             @click.prevent="item.img_zoom ? openLightBox() : null">
            <!--            <ImageLazy :image="item.img"-->
            <ImageLazy image="item.img"
                       border-radius="30px"
            />
        </div>

        <div :class="$style.info"
             @click="openItem">
            <div :class="$style.name">
                {{ item.name }}
            </div>

            <div :class="$style.priceWrap">
                <div :class="[$style.priceIconWrap, $style[item.currency]]">
                    <span :class="$style.priceIcon">
                        <svg>
                            <use :xlink:href="`#icon-${typeIcon}`" />
                        </svg>
                    </span>
                </div>
                <span :class="$style.priceValue">{{ item.price }}</span>

            </div>

            <LightBox :items="listImages"
                      :index="activeIndex"
                      @close="activeIndex = null"
            />
        </div>
    </div>
</template>

<script>
    import ImageLazy from '@/components/common/ImageLazy';
    import ProductModal from '@/components/layout/modals/ProductModal';
    import LightBox from '@/components/ui/LightBox';
    export default {
        name: 'Product',
        components: {LightBox,
                     ImageLazy},
        props: {
            item: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {
                activeIndex: null
            };
        },

        computed: {
            typeIcon() {
                // return 'effect';
                return this.item.currency === 'effect' ? 'coin-effect' : this.item.currency;
            },
            listImages() {
                return [this.item.img];
            }
        },

        methods: {
            openItem() {
                this.$modal.open(ProductModal, this.item);
            },
            openLightBox() {
                this.activeIndex = this.item.img[0].id;
            }
        }
    };
</script>

<style lang="scss" module>
    .Product {
        //
    }

    .img {
        position: relative;
        height: 20rem;
        border-radius: 30px;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(#000, .5);
            transition: $transition;
            opacity: 0;
            border-radius: 30px;
            z-index: 1;
        }

        &._zoom {
            cursor: zoom-in;

            &:hover {
                &:before {
                    opacity: 1;
                }
            }
        }
    }

    .info {
        cursor: pointer;

        &:hover {
            .name {
                opacity: 1;
            }
        }
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
