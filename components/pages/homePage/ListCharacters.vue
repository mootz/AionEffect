<template>
    <div :class="$style.ListCharacters">
        <div class="labelName">
            Список персонажей
        </div>

        <div v-for="char in characters"
             :key="char.name"
             :class="$style.item"
        >
            <div :class="$style.wrap">
                <div :class="$style.top">
                    <div :class="$style.name">
                        {{ char.name }}
                    </div>
                    <div v-if="char.online"
                         :class="$style.online"></div>
                </div>
                <div :class="$style.info">
                    <div :class="$style.class">
                        {{ char.class }} {{ char.level }} Ур.
                    </div>
                    <!--                    <div v-if="char.class2"-->
                    <!--                         :class="$style.classAccent">-->
                    <!--                        {{ char.class2 }}-->
                    <!--                    </div>-->
                </div>
            </div>

            <div :class="$style.buttons">
                <div :class="[$style.button, {[$style._disabled]: char.online}]"
                     @click.stop="char.online ? errorCharOnline() : teleportChar(char.name)"
                >
                    <svg>
                        <use xlink:href="#icon-teleport" />
                    </svg>
                </div>
                <div :class="[$style.button, {[$style._disabled]: char.online}]">
                    <svg>
                        <use xlink:href="#icon-dignity" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListCharacters',
        props: {
            characters: {
                type: Array,
                default: () => []
            }
        },

        methods: {
            teleportChar(name) {
                this.$toast(`Ваш персонаж ${name} куда-то отправлен`);
            },
            errorCharOnline() {
                this.$toast.error('Ваш персонаж в онлайне!');
            }
        }
    };
</script>

<style lang="scss" module>
    .ListCharacters {
        padding: 3.2rem;
        background: $lightdark;
        border-radius: 40px;
        height: 100%;
        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.2rem;
        padding: 1.8rem 2rem 2.2rem;
        background-color: rgba(#fff, .01);
        border-radius: 20px;
        transition: $transition;

        &:hover {
            background-color: rgba(#fff, .03);
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    .top {
        display: flex;
        align-items: center;
        margin-bottom: .6rem;
    }

    .name {
        font-size: 1.6rem;
        font-weight: 600;
    }

    .online {
        margin-left: .8rem;
        width: .8rem;
        height: .8rem;
        border-radius: 100%;
        background: #22ff45;
        box-shadow: 0 4px 8px rgba(34, 255, 69, 0.3);
    }

    .info {
        display: flex;
    }

    .class {
        font-size: 1.4rem;
        font-weight: 500;
        opacity: .4;
    }

    .classAccent {
        margin-left: .6rem;
        color: #ff8a00;
    }

    .buttons {
        display: flex;
    }

    .button {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: .6rem;
        cursor: pointer;
        fill: #fff;
        opacity: .7;
        transition: $transition;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            opacity: 1;
        }

        &._disabled {
            opacity: .2;
        }
    }
</style>
