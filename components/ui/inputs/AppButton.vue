<template>
    <component :is="link ? 'NuxtLink' : (href ? 'a' : 'button')"
               :class="[$style.btn, {[$style.hoverBackground]: hoverBackground}, $style[type], $style[`text${textAlign}`] ]"
               :target="href ? '_blank' : null"
               :to="link || href ? (link || href) : null"
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
        name: 'AppButton',
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

            hoverBackground: {
                default: false,
                type: Boolean
            },

            iconName: {
                default: '',
                type: String
            },

            type: {
                default: '',
                type: String,
            },

            textAlign: {
                default: '',
                type: String,
            }
        }
    };
</script>

<style lang="scss" module>
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.4rem;
        padding: 1rem 3rem;
        cursor: pointer;
        transition: 0.3s all;
        flex-shrink: 0;
        text-shadow: none;
        position: relative;
        z-index: 0;
        border: 0;
        outline: 0;
        background-color: transparent;
        border-radius: 100px;
        box-shadow: none;

        &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background:
                linear-gradient(
                    125deg,
                    #ff2e00 0%,
                    #ff7e00 33%,
                    #ff7e00 50%,
                    #ff7e00 65%,
                    #ff2e00 100%
                );
            background-size: 300% 300%;
            border: 0;
            border-radius: 50px;
            transition: 0.3s all;
        }

        &:hover:before {
            transition: 0.3s all;
            background-position: 100% 100%;
        }

        &__content {
            position: relative;
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
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

        &.static {
            background-color: $accent;

            &:before {
                display: none;
            }
        }

        &.hoverBackground {
            &:before {
                opacity: 0;
            }

            &.static {
                background-color: transparent;
            }

            &:hover {
                &:before {
                    opacity: 1;
                }

                &.static {
                    background-color: $accent;
                }
            }
        }

        &.textleft {
            justify-content: flex-start;
        }

        &.textright {
            justify-content: flex-end;
        }

        &.transparent {
            background-color: transparent;

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
