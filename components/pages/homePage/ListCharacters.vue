<template>
    <div :class="$style.ListCharacters">
        <div class="labelName">
            {{ $t('profile.listCharacters') }}
        </div>

        <div v-for="char in characters"
             v-show="characters.length"
             :key="char.char_id"
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
                        {{ computClass(char.class) }} {{ char.lev }} {{ $t('profile.level') }}
                    </div>
                    <!--                    <div v-if="char.class2"-->
                    <!--                         :class="$style.classAccent">-->
                    <!--                        {{ char.class2 }}-->
                    <!--                    </div>-->
                </div>
            </div>

            <div :class="$style.buttons">
                <div :class="[$style.button, {[$style._disabled]: char.online}]"
                     @click.stop="char.online ? errorCharOnline() : teleportChar(char.char_id)"
                >
                    <svg>
                        <use xlink:href="#icon-teleport" />
                    </svg>
                </div>
                <!--                <div :class="[$style.button, {[$style._disabled]: char.online}]"-->
                <!--                     @click.stop="char.online ? errorCharOnline() : openModal()"-->
                <!--                >-->
                <!--                    <svg>-->
                <!--                        <use xlink:href="#icon-dignity" />-->
                <!--                    </svg>-->
                <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import RDignity from '@/components/layout/modals/RDignity';

    export default {
        name: 'ListCharacters',
        props: {
            characters: {
                type: Array,
                default: () => []
            }
        },

        data() {
            return {
                class: ''
            };
        },


        methods: {
            async teleportChar(id) {
                const data = {
                    char_id: id,
                };

                try {
                    await this.$axios.$post(`/user/${localStorage['auth.userId']}/teleport`, data);
                    this.$toast(this.$t('notif.listChar.accept'));
                } catch (err) {
                    console.warn('ListCharacters: ', err.response);
                    this.$toast.error(err.response.data.result_msg);
                }
            },
            errorCharOnline() {
                this.$toast.error(this.$t('notif.listChar.errOnline'));
            },
            openModal() {
                this.$modal.open(RDignity, {title: 'hey'});
            },
            computClass(val) {
                switch (val) {
                    case 0:
                        return this.$t('classes.0');
                    case 1:
                        return this.$t('classes.1');
                    case 2:
                        return this.$t('classes.2');
                    case 3:
                        return this.$t('classes.3');
                    case 4:
                        return this.$t('classes.4');
                    case 5:
                        return this.$t('classes.5');
                    case 6:
                        return this.$t('classes.6');
                    case 7:
                        return this.$t('classes.7');
                    case 8:
                        return this.$t('classes.8');
                    case 9:
                        return this.$t('classes.9');
                    case 10:
                        return this.$t('classes.10');
                    case 11:
                        return this.$t('classes.11');
                    case 12:
                        return this.$t('classes.12');
                    case 13:
                        return this.$t('classes.13');
                    case 14:
                        return this.$t('classes.14');
                    case 15:
                        return this.$t('classes.15');
                    case 16:
                        return this.$t('classes.16');
                    default:
                        return 'Ошибка';
                }
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
