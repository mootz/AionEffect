<template>
    <div :class="$style.sidebar">
        <div :class="$style.logo">
            <TheLogo />
        </div>

        <ul :class="$style.menu">

            <li :class="$style.item">

                <nuxt-link :to="{ name: 'index'}"
                           :class="$style.link"
                           :active-class="$style._isActive"
                           exact
                >
                    <span :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-profile" />
                        </svg>
                    </span>
                    <span>Мой профиль</span>
                </nuxt-link>
            </li>
            <li :class="[$style.item, {[$style._disabled]: userId !== '1'}]">

                <nuxt-link :to="{name: 'shop'}"
                           :class="$style.link"
                           :active-class="$style._isActive"
                >
                    <span :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-crown" />
                        </svg>
                    </span>
                    <span>Магазин</span>
                </nuxt-link>
            </li>
            <!--            <li :class="$style.item">-->

            <!--                <nuxt-link to="/auction"-->
            <!--                           :class="$style.link"-->
            <!--                           :active-class="$style._isActive"-->
            <!--                           exact-->
            <!--                >-->
            <!--                    <span :class="$style.icon">-->
            <!--                        <svg>-->
            <!--                            <use xlink:href="#icon-auction" />-->
            <!--                        </svg>-->
            <!--                    </span>-->
            <!--                    <span>Аукцион</span>-->
            <!--                </nuxt-link>-->
            <!--            </li>-->
            <li :class="[$style.item, $style._disabled]">

                <nuxt-link to="/achievements"
                           :class="$style.link"
                           :active-class="$style._isActive"
                           exact
                >
                    <span :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-achievement" />
                        </svg>
                    </span>
                    <span>Достижения</span>
                </nuxt-link>
            </li>
            <li :class="[$style.item, $style._disabled]">

                <nuxt-link to="/rating"
                           :class="$style.link"
                           :active-class="$style._isActive"
                           exact
                >
                    <span :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-rating" />
                        </svg>
                    </span>
                    <span>Рейтинг</span>
                </nuxt-link>
            </li>
            <li :class="[$style.item, $style._disabled]">

                <nuxt-link to="/fortune"
                           :class="$style.link"
                           :active-class="$style._isActive"
                           exact
                >
                    <span :class="$style.icon">
                        <svg>
                            <use xlink:href="#icon-star" />
                        </svg>
                    </span>
                    <span>Колесо удачи</span>
                </nuxt-link>
            </li>
        </ul>

        <AppSocials :class="$style.socials" />
    </div>
</template>

<script>
    import TheLogo from '~/components/layout/TheLogo';
    import AppSocials from '@/components/common/AppSocials';
    export default {
        name: 'TheSidebar',
        components: {AppSocials,
                     TheLogo},
        data() {
            return {
                userId: '',
            };
        },

        mounted() {
            this.userId = localStorage['auth.userId'];
        }
    };
</script>

<style lang="scss" module>
    .sidebar {
        display: flex;
        flex-direction: column;
        width: 40rem;
        padding: 4.2rem 3.6rem;
        position: relative;
        overflow: hidden;
        background-color: $lightdark;
        pointer-events: none;

        &:before {
            content: '';
            position: absolute;
            width: 77rem;
            height: 77rem;
            border-radius: 100%;
            bottom: -2.5rem;
            left: 0;
            background: radial-gradient(50% 50% at 50% 50%, #ff2e00 0%, rgba(255, 46, 0, 0) 100%);
            opacity: .06;
        }
    }

    .logo {
        width: 10rem;
        height: auto;
        margin: 0 auto;
    }

    .item {
        display: flex;
        width: 100%;
        height: 5rem;
        margin-bottom: 1.6rem;
        cursor: pointer;

        &:hover {
            .link {
                background-color: #ff2e00;
                opacity: 1;
            }
        }

        &._disabled {
            pointer-events: none;

            .link {
                opacity: .2;
            }
        }
    }

    .link {
        display: flex;
        align-items: center;
        padding: 1rem 3rem;
        width: 100%;
        letter-spacing: .5px;
        font-weight: 600;
        border-radius: 100px;
        opacity: .4;
        cursor: pointer;
        transition: $transition;

        &._isActive {
            background-color: #ff2e00;
            opacity: 1;
        }
    }

    .icon {
        width: 1.8rem;
        height: 100%;
        margin-right: 1.1rem;
        fill: white;
    }

    .menu {
        margin-top: 6.2rem;
        pointer-events: all;
    }

    .socials {
        width: fit-content;
        margin: auto auto 0;
        pointer-events: all;
    }
</style>
