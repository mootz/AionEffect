<template>
    <div :class="$style.wrap">
        <div class="labelName">
            Список персонажей
        </div>

        <div :class="$style.item">
            <div :class="$style.top">
                <div :class="$style.name">
                    Hello
                </div>
                <div :class="$style.online"></div>
            </div>
            <div :class="$style.info">
                <div :class="$style.class">
                    Лучник 12 Ур.
                </div>
                <div :class="$style.classAccent">
                    Паладин
                </div>
            </div>
        </div>

        <div :class="$style.item">
            <div :class="$style.top">
                <div :class="$style.name">
                    Assssa
                </div>
            </div>
            <div :class="$style.info">
                <div :class="$style.class">
                    Убийца 86 Ур.
                </div>
                <div :class="$style.classAccent">
                    Рыцарь смерти
                </div>
            </div>
        </div>

        <div :class="$style.item">
            <div :class="$style.top">
                <div :class="$style.name">
                    DxxRraa
                </div>
            </div>
            <div :class="$style.info">
                <div :class="$style.class">
                    Страж 24 Ур.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListCharacters',
    };
</script>

<style lang="scss" module>
    .wrap {
        padding: 3.2rem;
        background: $lightdark;
        border-radius: 40px;
        height: 100%;
    }

    .item {
        margin-bottom: 1.2rem;
        padding: 1.8rem 2rem 2.2rem;
        background: rgba(#fff, .01);
        border-radius: 20px;
        transition: $transition;

        &:hover {
            background: rgba(#fff, .02);
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
</style>
