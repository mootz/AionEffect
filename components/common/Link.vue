<template>
    <component :is="link ? 'NuxtLink' : (href ? 'a' : 'div')"
               :class="$style.btn"
               :target="href ? '_blank' : null"
               :to="link ? localePath(link) : null"
               :href="href ? href : null"
               :disabled="disabled"
    >

        <div :class="$style.btn__content">
            <span v-if="iconName"
                  :class="$style.icon">
                <svg>
                    <use :xlink:href="`#icon-${iconName}`" />
                </svg>
            </span>
            {{ text }}
        </div>
    </component>
</template>

<script>
    export default {
        name: 'Link',
        props: {
            text: {
                required: true,
                default: '',
                type: String
            },

            link: {
                type: String,
                default: '',
            },

            href: {
                type: String,
                default: ''
            },

            disabled: {
                default: false,
                type: Boolean
            },
            iconName: {
                default: '',
                type: String
            }
        }
    };
</script>

<style lang="scss" module>
    .btn {
        display: flex;
        width: 100%;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.4rem;
        cursor: pointer;
        transition: 0.3s all;
        flex-shrink: 0;
        text-shadow: none;
        position: relative;

        &__content {
            position: relative;
            align-items: center;
            display: flex;
            height: 100%;
            color: #fff;
            z-index: 5;
        }

        &:disabled {
            pointer-events: none;
            background-color: transparent;
            opacity: .2;
            border: 1px solid rgba(255, 255, 255, 0.4);

            &:before {
                display: none;
            }
        }
    }

    .icon {
        width: 1.8rem;
        height: 100%;
        margin-right: 1.1rem;
        fill: white;
    }
</style>
