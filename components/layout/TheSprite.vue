<template>
    <svg :class="$style.TheSprite"
         xmlns="http://www.w3.org/2000/svg">

        <IconProfile />
        <IconAuction />
        <IconCrown />
        <IconAchievement />
        <IconStart />
        <IconRating />
        <IconForum />
        <IconSupport />
        <IconBell />
        <IconChevron />
    </svg>
</template>
<script>
    import IconCrown from './SpriteSet/IconCrown';
    import IconProfile from '~/components/layout/SpriteSet/IconProfile';
    import IconAuction from '~/components/layout/SpriteSet/IconAuction';
    import IconAchievement from '~/components/layout/SpriteSet/IconAchievement';
    import IconStart from '~/components/layout/SpriteSet/IconStar';
    import IconRating from '~/components/layout/SpriteSet/IconRating';
    import IconForum from '@/components/layout/SpriteSet/IconForum';
    import IconSupport from '@/components/layout/SpriteSet/IconSupport';
    import IconBell from '@/components/layout/SpriteSet/IconBell';
    import IconChevron from '@/components/layout/SpriteSet/IconChevron';

    export default {
        name: 'TheSprite',
        components: {
            IconChevron,
            IconBell,
            IconSupport,
            IconForum,
            IconRating,
            IconStart,
            IconAchievement,
            IconAuction,
            IconProfile,
            IconCrown,
        },
    };
</script>
<style lang="scss" module>
    .TheSprite {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        opacity: 0;
        pointer-events: none;
    }
</style>
