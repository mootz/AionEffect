<template>
    <header :class="$style.TheHeader">
        <div :class="$style.wrap">
            <div :class="$style.route">
                <h1 :class="$style.title">
                    {{ namePage }}
                </h1>
                <h2 :class="$style.subtitle">
                    {{ descPage }}
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

                <div :class="[$style.bell, {[$style._isActive]: isActiveNotifications}, {[$style._new]: false}]">
                    <div :class="$style.bellIcon"
                         @click.stop="toggleNotifications">
                        <svg>
                            <use xlink:href="#icon-bell" />
                        </svg>
                    </div>

                    <transition name="fade">
                        <TheNotification v-if="isActiveNotifications"
                                         :class="$style.notification"
                                         :notifications="notifications"
                        />
                    </transition>
                </div>

                <div :class="$style.profile">
                    <div :class="$style.profileImg"
                    >
                        <ImageLazy image="images/avatar.png"
                        />
                    </div>

                    <div :class="$style.profileName"
                         @click.stop="toggleProfile">
                        {{ userData.login }}

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
                              @click.native="openPromo"
                        />
                        <Link text="История"
                              :class="$style.menuItem"
                              link="/history/account"
                        />
                        <Link text="Сменить акаунт"
                              :class="$style.menuItem"
                              @click.native="logout"
                        />
                        <Link text="Выход"
                              :class="$style.menuItem"
                              href="https://aioneffect.com/"
                        />

                    </Tooltip>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import ChangeLanguage from '@/components/common/ChangeLanguage';
    import Link from '@/components/common/Link';
    import Tooltip from '@/components/common/Tooltip';
    import TheNotification from '@/components/common/TheNotification';
    import RPromo from '@/components/layout/modals/RPromo';
    import ImageLazy from '@/components/common/ImageLazy';

    export default {
        name: 'TheHeader',
        components: {
            ImageLazy,
            TheNotification,
            Tooltip,
            Link,
            ChangeLanguage
        },
        data() {
            return {
                namePage: 'Мой профиль',
                descPage: 'Информация об аккаунте'
            };
        },

        computed: {
            ...mapState({
                isActiveProfile: state => state.header.isActiveProfileMenu,
                isActiveNotifications: state => state.header.isActiveNotifications,
                notifications: state => state.user.user.notifications
                // user: state => state.user.user
            }),

            userData() {
                return this.$store.getters['user/getUserData'];
            }

            // generateNamePage() {
            //     const includeName = name => this.$router.history.current.fullPath.includes(name);
            //
            //     if (includeName('/shop')) {
            //         this.namePage = 'Магазин';
            //     }
            //     this.namePage = 'Мой профиль';
            // }
        },

        watch: {
            $route() {
                const includeName = name => this.$router.history.current.fullPath.includes(name);

                if (includeName('/shop')) {
                    this.namePage = 'Магазин';
                    this.descPage = 'Уникальные айтемы';
                } else {
                    this.namePage = 'Мой профиль';
                    this.descPage = 'Информация об аккаунте';
                }
                console.log('hey');
            }
        },

        methods: {
            toggleProfile() {
                this.isActiveProfile ? this.closeMenu() : this.openMenu();

                if (this.isActiveNotifications) {
                    this.closeNotifications();
                }
            },
            toggleNotifications() {
                this.isActiveNotifications ? this.closeNotifications() : this.openNotifications();

                if (this.isActiveProfile) {
                    this.closeMenu();
                }
            },
            ...mapActions({
                openMenu: 'header/openProfileMenu',
                closeMenu: 'header/closeProfileMenu',
                openNotifications: 'header/openNotifications',
                closeNotifications: 'header/closeNotifications',
            }),

            openPromo() {
                this.$modal.open(RPromo);
            },

            async logout() {
                await this.$auth.logout();
                this.$auth.$storage.removeUniversal('userId');
            }
        },
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
        position: relative;
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 3.2rem;
        pointer-events: none;

        &._new {
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
                pointer-events: none;
                transition: $transition;
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
                pointer-events: none;
                transition: $transition;
            }
        }

        &._isActive {
            &:before,
            &:after {
                opacity: 0;
            }

            .bellIcon {
                opacity: 1;
            }
        }
    }

    .bellIcon {
        height: 2.2rem;
        fill: #fff;
        opacity: .2;
        cursor: pointer;
        transition: $transition;

        &._isActive {
            opacity: 1;
        }
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
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.8rem;
        background: $avatarBackground;
        overflow: hidden;
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

    .notification {
        position: absolute;
        top: calc(100% + 3rem);
        right: -4rem;
        z-index: 3;
    }

</style>
