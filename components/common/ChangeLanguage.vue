<template>
    <div :class="$style.lang">
        <div :class="$style.lang__current">
            <img src="images/lang-ru.png"
                 alt="ru"
                 :class="[$style.lang__img, $style.lang__currentImg]">
        </div>
        <div :class="$style.lang__list">
            <a href="#"
               :class="[$style.lang__link, $style.lang__link_sub]">
                <img src="images/lang-en.png"
                     alt="en"
                     :class="$style.lang__img">
                <div :class="$style.lang__name">English</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChangeLanguage',
    };
</script>

<style lang="scss" module>
    .lang {
        width: 2.4rem;
        height: 2.4rem;
        position: relative;
        flex-shrink: 0;
    }

    .lang__current {
        width: 2.4rem;
        height: 2.4rem;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all .3s;
        position: relative;
        z-index: 0;
    }

    .lang__currentImg {
        transition: .3s all;
    }

    .lang:hover .lang__currentImg {
        opacity: 0;
        transform: scale(0.5);
    }

    .lang__current:after {
        content: "";
        display: block;
        background: url(/images/lang.svg) no-repeat;
        background-size: contain;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: all .3s;
        cursor: pointer;
        opacity: 0;
        transform: scale(1.3);
        pointer-events: none;
    }

    .lang:hover .lang__current:after {
        opacity: 1;
        transform: scale(1);
    }

    .lang__link {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        transition: all .3s;
        flex-shrink: 0;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.31;
        letter-spacing: 0.02em;
        color: rgba(255, 255, 255, 0.4);
        text-decoration: none;
    }

    .lang__img {
        display: block;
        width: 100%;
        height: 100%;
        margin-right: 10px;
    }

    .lang__link_sub {
        padding: 5px 0;
        box-sizing: border-box;
    }

    .lang__link_sub:hover {
        color: #fff;
    }

    .lang__list {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        opacity: 0;
        visibility: hidden;
        transition: all .3s;
        transform: translateY(-10px);
        padding: 36px 26px 16px 26px;
        box-sizing: border-box;
        //width: 120px;
        width: max-content;
        position: absolute;
        left: -26px;
        top: 100%;
    }

    .lang__list:after {
        display: block;
        content: "";
        position: absolute;
        top: 20px;
        right: 0;
        bottom: 0;
        left: 0;
        background: #0a0f16;
        border-radius: 30px;
        z-index: -1;
    }

    .lang:hover .lang__list {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
</style>
