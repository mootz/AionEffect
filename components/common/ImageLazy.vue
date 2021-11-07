<template>
    <div :style="[preview ? {backgroundImage: `url(${preview})`} : '']"
         :class="['image-lazy', classes]">
        <template v-if="tag === 'img'">
            <img v-if="image"
                 v-lazy="image"
                 class="image-lazy__image"
                 :style="{borderRadius: borderRadius}"
            >
        </template>
        <template v-else>
            <div v-if="image"
                 v-lazy:background-image="image"
                 class="image-lazy__image"
                 :style="{borderRadius: borderRadius}"
            >
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            preview: {
                type: String,
                default: '',
            },
            image: {
                type: String,
                default: '',
            },
            relative: {
                type: Boolean,
                default: false,
            },
            absolute: {
                type: Boolean,
                default: false,
            },
            contain: {
                type: Boolean,
                default: false,
            },
            tag: {
                type: String,
                default: 'div',
                validator(val) {
                    return ['div', 'img'].includes(val);
                },
            },

            borderRadius: {
                type: String,
                default: '',
            }
        },

        computed: {
            classes() {
                return {
                    'is-relative': this.relative,
                    'is-absolute': this.absolute,
                    'is-contain': this.contain,
                };
            },
        },
    };
</script>

<style lang="scss">
    .image-lazy {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        &.is-relative {
            position: relative;
        }

        &.is-absolute {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &.is-contain {
            background-size: contain;

            .image-lazy__image {
                background-size: contain;
            }
        }

        &__image {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0;
            transition: opacity 0.3s ease 0.1s;

            &[lazy="loaded"] {
                opacity: 1;
            }
        }
    }
</style>
