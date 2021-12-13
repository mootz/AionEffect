<template>
    <div :class="$style.AppInputTrade">
        <div :class="[$style.minus, $style.operator]"
             @click.stop="$emit('minus')"
        >
            <svg viewBox="0 0 12 2"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.25H11.25V1.75H0.75V0.25Z" />
            </svg>
        </div>

        <div :class="$style.value">
            {{ value }}
        </div>

        <div :class="[$style.plus, $style.operator]"
             @click.stop="$emit('plus')"
        >
            <svg viewBox="0 0 12 12"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z" />
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppInputTrade',
        props: {
            value: {
                type: [String, Number],
                default: 0
            }
        }
    };
</script>

<style lang="scss" module>
    .AppInputTrade {
        display: flex;
        align-items: center;
    }

    .operator {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.8rem;
        height: 1.8rem;
        background-color: rgba(#fff, .04);
        border-radius: 100%;
        cursor: pointer;

        svg {
            width: 1.2rem;
            opacity: .4;
            fill: #fff;
            transition: $transition;
        }

        &:hover {
            svg {
                opacity: 1;
            }
        }
    }

    .minus {
        svg {
            height: .2rem;
        }
    }

    .plus {
        svg {
            height: 1.2rem;
        }
    }

    .value {
        pointer-events: none;
        user-select: none;
        font-weight: 600;
        margin: 0 1.2rem;
    }

</style>
