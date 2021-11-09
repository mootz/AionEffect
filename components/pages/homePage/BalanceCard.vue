<template>
    <div :class="$style.BalanceCard">
        <div :class="$style.top">
            <div :class="[$style.icon, [$style[type]]]">
                <div :class="$style.iconWrap">
                    <svg>
                        <use :xlink:href="`#icon-${iconName}`" />
                    </svg>
                </div>
            </div>

            <div :class="$style.tooltipIcon">
                <svg width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13Z"
                          fill="white" />
                </svg>
            </div>
        </div>

        <div :class="$style.value">
            {{ value }}
        </div>
        <div :class="$style.name">
            {{ nameValue }}
        </div>

    </div>
</template>

<script>
    export default {
        name: 'BalanceCard',
        props: {
            type: {
                type: String,
                default: '',
            },
            value: {
                type: String,
                default: '',
            }
        },

        computed: {
            iconName() {
                return this.type === 'effect' ? 'coin-effect' : this.type;
            },

            nameValue() {
                return this.type === 'effect' ? 'Coin of Effect' : this.type === 'bonus' ? 'Bonus' : this.type === 'kinah' ? 'Kinah' : null;
            }
        }
    };
</script>

<style lang="scss" module>
    .BalanceCard {
        padding: 3.2rem 2rem 3.2rem 3.2rem;
        border-radius: 40px;
        background: $lightdark;
        overflow: hidden;
        transition: $transition;
        cursor: pointer;

        &:hover {
            border-radius: 20px;

            .icon:before {
                transform: translate(-50%, -50%) scale(1.5);
            }

            .tooltipIcon {
                opacity: 1;
            }
        }
    }

    .top {
        display: flex;
        justify-content: space-between;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 12px;

        &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 22.6rem;
            height: 22.6rem;
            transform: translate(-50%, -50%);
            transition: transform $transition;
            opacity: .1;
        }

        &.effect {
            background-color: #9e00ff;
            box-shadow: 0 10px 20px rgba(158, 0, 255, 0.3);

            &:before {
                background:
                    radial-gradient(
                        50% 50% at 50% 50%,
                        #9e00ff 0%,
                        rgba(158, 0, 255, 0) 100%
                    );
            }
        }

        &.bonus {
            background-color: #ff00c7;
            box-shadow: 0 10px 20px rgba(255, 0, 199, 0.3);

            &:before {
                background:
                    radial-gradient(
                        50% 50% at 50% 50%,
                        #ff00c7 0%,
                        rgba(255, 0, 199, 0) 100%
                    );
            }
        }

        &.kinah {
            background-color: #ff8a00;
            box-shadow: 0 10px 20px rgba(255, 138, 0, 0.3);

            &:before {
                background:
                    radial-gradient(
                        50% 50% at 50% 50%,
                        #ff8a00 0%,
                        rgba(255, 138, 0, 0) 100%
                    );
            }
        }
    }

    .iconWrap {
        width: 2rem;
        height: 2rem;
        fill: #fff;
    }

    .tooltipIcon {
        transition: $transition;
        opacity: .2;
    }

    .value {
        margin: 2.2rem 0 .6rem;
        font-size: 2.4rem;
        font-weight: 600;
    }

    .name {
        font-size: 1.4rem;
        font-weight: 500;
    }
</style>
