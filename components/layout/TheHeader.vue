<template>
    <header :class="$style.TheHeader">
        <div :class="$style.wrap">
            <div :class="$style.route">
                <h1 :class="$style.title">
                    Мой профиль
                </h1>
                <h2 :class="$style.subtitle">
                    Информация об аккаунте
                </h2>
            </div>

            <div :class="$style.info">
                <div :class="$style.links">

                    <div :class="$style.link">
                        <Link text="Поддержка"
                              icon-name="support"
                        />
                    </div>
                    <div :class="$style.link">
                        <Link text="Форум"
                              icon-name="forum"
                        />
                    </div>

                </div>

                <div :class="$style.onlineWrap">
                    <span :class="$style.onlineIcon">

                    </span>
                    <span :class="$style.onlineCount">
                        7147
                    </span>
                </div>

                <div :class="$style.lang">
                    <ChangeLanguage />
                </div>

                <div :class="$style.bell">
                    <div :class="$style.bellIcon">
                        <svg>
                            <use xlink:href="#icon-bell" />
                        </svg>
                    </div>
                </div>

                <div :class="$style.profile">
                    <div :class="$style.profileImg">
                        <ImageLazy image="images/avatar_placeholder.jpg"
                                   border-radius="100%"
                        />
                    </div>

                    <div :class="$style.profileName"
                         @click.stop="toggleProfile">
                        Overlord

                        <div :class="[$style.profileIcon, {[$style._isActive]: isActiveProfile}]">
                            <svg>
                                <use xlink:href="#icon-chevron" />
                            </svg>
                        </div>
                    </div>

                    <Tooltip :class="$style.menuTooltip"
                             :is-active="isActiveProfile">

                        <Link text="Промокод"
                              :class="$style.menuItem"
                              link="/promocode"
                        />
                        <Link text="История"
                              :class="$style.menuItem"
                              link="/history"
                        />
                        <Link text="Сменить акаунт"
                              :class="$style.menuItem"
                        />
                        <Link text="Выход"
                              :class="$style.menuItem"
                        />

                    </Tooltip>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import ImageLazy from '@/components/common/ImageLazy';
    import ChangeLanguage from '@/components/common/ChangeLanguage';
    import Link from '@/components/common/Link';
    import Tooltip from '@/components/common/Tooltip';

    export default {
        name: 'TheHeader',
        components: {Tooltip,
                     Link,
                     ChangeLanguage,
                     ImageLazy},
        data() {
            return {
            };
        },

        computed: {
            ...mapState('header', {
                isActiveProfile: 'isActiveProfileMenu',
            }),
        },

        methods: {
            toggleProfile() {
                this.isActiveProfile ? this.closeMenu() : this.openMenu();
                // if (this.isActiveProfile) {
                //     this.closeMenu();
                // } else {
                //     this.openMenu();
                // }
            },
            ...mapActions({
                openMenu: 'header/openProfileMenu',
                closeMenu: 'header/closeProfileMenu',
            }),
        }
    };
</script>

<style lang="scss" module>
    .TheHeader {
        height: $header-h;
        width: 100%;
        background-color: transparent;
    }

    .wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .title {
        margin-bottom: .7rem;
        font-size: 3rem;
        font-weight: bold;
    }

    .subtitle {
        font-weight: 500;
        font-size: 1.4rem;
        opacity: .4;
    }

    .info {
        display: flex;
        align-items: center;
    }

    .links {
        display: flex;
        margin-right: 3.2rem;
    }

    .link {
        display: flex;
        height: 4.4rem;
        margin-right: 2.4rem;
        opacity: .4;
        font-size: 1.4rem;
        transition: $transition;

        &:hover {
            opacity: 1;
        }

        &:last-child {
            margin-right: 0;
        }
    }

    .onlineWrap {
        display: flex;
        align-items: center;
        height: 100%;
        margin-right: 3.2rem;
        padding: 1rem 1.8rem;
        border: 1px solid rgba(#fff, .1);
        border-radius: 20px;

        &:before {
            content: '';
            display: inline-block;
            margin-right: 1rem;
            width: .8rem;
            height: .8rem;
            border-radius: 100%;
            background-color: #21fb45;
            box-shadow: 0 4px 10px rgba(0, 255, 117, 0.2);
        }
    }

    .onlineCount {
        font-size: 1.6rem;
        font-weight: bold;
    }

    .bell {
        width: 2.4rem;
        height: 2.4rem;
        position: relative;
        margin-right: 3.2rem;
        cursor: pointer;

        &:before {
            content: '';
            position: absolute;
            width: .8rem;
            height: .8rem;
            background-color: $accent;
            top: 0;
            right: 0;
            border-radius: 50%;
            z-index: 2;
        }

        &:after {
            content: '';
            position: absolute;
            width: 2.2rem;
            height: 2.2rem;
            top: -.8rem;
            right: -.8rem;
            background: radial-gradient(50% 50% at 50% 50%, rgba(255, 46, 0, 0.3) 0%, rgba(255, 46, 0, 0) 100%);
            z-index: 1;
        }
    }

    .bellIcon {
        height: 2.2rem;
        fill: #fff;
        opacity: .2;
    }

    .profile {
        display: flex;
        align-items: center;
        position: relative;
    }

    .profileImg {
        position: relative;
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
    }

    .profileName {
        display: flex;
        font-weight: 600;
        font-size: 1.4rem;
        cursor: pointer;
    }

    .profileIcon {
        width: 1rem;
        height: 1.9rem;
        margin-left: 1rem;
        opacity: .4;

        svg {
            transition: $transition;
            transform: rotate(180deg);
        }

        &._isActive {
            svg {
                transform: rotate(0);
            }
        }
    }

    .lang {
        margin-right: 1.8rem;
    }

    .menuTooltip {
        position: absolute;
        z-index: 3;
        align-items: flex-start;
        width: max-content;
        top: calc(100% + 3rem);
        right: 0;
    }

    .menuItem {
        margin-bottom: 2.4rem;
        transition: $transition;
        opacity: .4;
        font-weight: 600;

        &:hover {
            opacity: 1;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

</style>
