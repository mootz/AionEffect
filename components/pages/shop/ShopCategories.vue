<template>
    <div :class="$style.ShopCategories">
        <div ref="wrapCategories"
             :class="$style.wrap">
            <div ref="innerCategories"
                 :class="$style.inner">

                <div :class="[$style.item, {[$style._active]: !activeSubCategory}]"
                     @click.prevent="$emit('click-subcategory', '')"
                >
                    Все
                </div>
                <div v-for="cat in subcategories"
                     :key="cat.key"
                     :class="[$style.item, {[$style._active]: activeSubCategory === cat.key}]"
                     @click.prevent="$emit('click-subcategory', cat.key)"
                >
                    {{ cat.name }}
                </div>

                <div v-if="showMoreBtn"
                     :class="[$style.more, {[$style._active]: activeMore}]"
                     @click.prevent="showMore">
                    <div :class="$style.moreIcon">
                        <svg viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                                  fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShopCategories',
        props: {
            subcategories: {
                type: Array,
                default: () => []
            },

            activeSubCategory: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                activeMore: false,
                showMoreBtn: false,
            };
        },

        mounted() {
            this.displayMoreBtn();
        },

        methods: {
            showMore() {
                this.activeMore = !this.activeMore;
                const wrap = this.$refs.wrapCategories;
                const inner = this.$refs.innerCategories;

                if (this.activeMore) {
                    wrap.style.height = inner.scrollHeight + 'px';
                } else {
                    wrap.style.height = '6.4rem';
                }
            },

            displayMoreBtn() {
                const wrap = this.$refs.wrapCategories;
                const inner = this.$refs.innerCategories;
                this.showMoreBtn = wrap.offsetHeight < inner.scrollHeight;
            }
        }
    };
</script>

<style module lang="scss">
    .ShopCategories {
        margin-top: 2.4rem;
    }

    .wrap {
        height: 6.4rem;
        overflow: hidden;
        transition: $transition;
        will-change: height;
    }

    .inner {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding-right: 6.2rem;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.4rem;
        margin: 0 1rem 1rem 0;
        padding: 1.8rem 2rem;
        color: rgba(#fff, .4);
        border-radius: 100px;
        background-color: rgba(#fff, .02);
        transition: $transition;
        opacity: .8;
        cursor: pointer;

        &:hover {
            background-color: rgba(#fff, .06);
            color: rgba(#fff, .45);
        }

        &._active {
            color: #fff;
            background-color: $accent;
            opacity: 1;
        }
    }

    .more {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.2rem;
        width: 5.2rem;
        border-radius: 100%;
        border: 1px solid rgba(255, 255, 255, 0.08);
        transition: $transition;
        cursor: pointer;

        &:hover {
            border-color: rgba(255, 255, 255, 0.2);

            .moreIcon {
                opacity: .4;
            }
        }

        &._active {
            background-color: $accent;
            border-color: $accent;
            opacity: 1;

            .moreIcon {
                opacity: 1;
            }
        }
    }

    .moreIcon {
        width: 2.4rem;
        height: 2.4rem;
        opacity: .2;
        transition: $transition;

        svg {
            width: 100%;
            height: 100%;
        }
    }
</style>
