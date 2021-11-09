<template>
    <div :class="$style.sidebar">
        <div :class="$style.logo">
            <TheLogo />
        </div>

        <ul :class="$style.menu">

            <li :class="[$style.item, $style._isActive]">
                <AppButton icon-name="profile"
                           text="Мой профиль"
                           link="/"
                           type="static"
                           text-align="left"
                />
            </li>

            <li :class="$style.item">
                <AppButton icon-name="crown"
                           text="Аукцион"
                           link="/"
                           type="static"
                           text-align="left"
                           hover-background
                />
            </li>

            <li :class="$style.item">
                <AppButton icon-name="rating"
                           text="Рейтинг"
                           link="/"
                           type="static"
                           text-align="left"
                           hover-background
                />
            </li>

            <li :class="$style.item">
                <AppButton icon-name="achievement"
                           text="Достижения"
                           link="/"
                           type="static"
                           text-align="left"
                           hover-background
                />
            </li>

            <li :class="$style.item">
                <AppButton icon-name="star  "
                           text="Колесо удачи"
                           link="/"
                           type="static"
                           text-align="left"
                           hover-background
                />
            </li>
        </ul>

        <AppSocials :class="$style.socials" />
    </div>
</template>

<script>
    import TheLogo from '~/components/layout/TheLogo';
    import AppButton from '~/components/ui/inputs/AppButton';
    import AppSocials from '@/components/common/AppSocials';
    export default {
        name: 'TheSidebar',
        components: {AppSocials,
                     AppButton,
                     TheLogo},
    };
</script>

<style lang="scss" module>
    .sidebar {
        display: flex;
        flex-direction: column;
        width: 30rem;
        padding: 4.2rem 3.6rem;
        position: relative;
        overflow: hidden;
        background-color: $lightdark;

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
        height: 5rem;
        margin-bottom: 1.6rem;
        opacity: .4;
        transition: .3s;

        &:hover {
            opacity: 1;
        }

        &._isActive {
            opacity: 1;
        }
    }

    .menu {
        margin-top: 6.2rem;
    }

    .socials {
        width: fit-content;
        margin: auto auto 0;
    }
</style>
