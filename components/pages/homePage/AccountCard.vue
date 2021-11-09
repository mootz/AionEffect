<template>
    <div :class="$style.wrap">
        <div :class="$style.top">
            <div :class="$style.infoWrap">
                <div :class="$style.imgWrap">
                    <ImageLazy :image="user.avatar"
                               border-radius="100%"
                    />
                </div>
                <div :class="$style.info">
                    <p :class="$style.name">
                        {{ user.login }}
                    </p>

                    <p :class="$style.email">
                        {{ user.email }}
                    </p>
                </div>
            </div>

            <div :class="[$style.iconProfile, {[$style._isActive]: userPage.dataChange}]"
                 @click.stop="toggleDataChange">

                <transition name="fade">
                    <svg v-if="userPage.dataChange">
                        <use xlink:href="#icon-users" />
                    </svg>
                    <svg v-else>
                        <use xlink:href="#icon-gear" />
                    </svg>
                </transition>

            </div>

        </div>

        <div :class="$style.list">
            <div :class="$style.item">
                <div :class="$style.label">
                    Последний вход в игру
                </div>

                <div :class="$style.value">
                    {{ user.last_entrance }}
                </div>
            </div>
            <div :class="$style.item">
                <div :class="$style.label">
                    Дата регистрации
                </div>

                <div :class="$style.value">
                    {{ user.register_date }}
                </div>
            </div>
            <div :class="$style.item">
                <div :class="$style.label">
                    Последняя смена пароля
                </div>

                <div :class="$style.value">
                    {{ user.last_change_password }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import ImageLazy from '@/components/common/ImageLazy';
    export default {
        name: 'AccountCard',
        components: {ImageLazy},
        props: {
            user: {
                type: Object,
                default: () => ({})
            }
        },

        computed: {
            ...mapState({
                userPage: state => state.user.userPage
            })
        },

        methods: {
            ...mapActions({
                toggleDataChange: 'user/toggleDataChange'
            })
        }
    };
</script>

<style lang="scss" module>
    .wrap {
        width: 100%;
        padding: 3.2rem;
        border-radius: 40px;
        background-color: $lightdark;
    }

    .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4.2rem;
    }

    .infoWrap {
        display: flex;
    }

    .imgWrap {
        position: relative;
        width: 4.4rem;
        height: 4.4rem;
        margin-right: 1.6rem;
        border-radius: 100%;
    }

    .name {
        font-size: 1.8rem;
        line-height: 2.1rem;
        font-weight: 600;
        margin-bottom: .6rem;
    }

    .email {
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.7rem;
        opacity: .4;
    }

    .iconProfile {
        width: 2.4rem;
        height: 2.4rem;
        transition: $transition;
        opacity: .2;
        cursor: pointer;
        fill: #fff;

        svg {
            width: 100%;
            height: 100%;
        }

        &._isActive {
            opacity: 1;
        }

        &:hover {
            opacity: 1;
        }
    }

    .list {
        display: flex;
        flex-direction: column;
    }

    .item {
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
        padding: 1.8rem 0;
        border-bottom: 1px solid rgba(#fff, .04);

        &:last-child {
            padding-bottom: 0;
            border-bottom: 0;
        }

        &:first-child {
            padding-top: 0;
        }
    }

    .value {
        text-align: right;
        opacity: .4;
    }
</style>
