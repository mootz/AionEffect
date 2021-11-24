<template>
    <div :class="['checkbox', {'_selectType': selectType}]">

        <label class="checkbox__label">
            <input type="checkbox"
                   :checked="checked"
                   class="checkbox__input">
            <span class="checkbox__block"></span>
        </label>

        <div v-if="label"
             class="checkbox__text">
            {{ label }}
        </div>

        <div v-if="rules"
             class="checkbox__text">
            Я ознакомился(-ась) с <router-link to="#">
                правилами
            </router-link>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'AppCheckbox',
        props: {
            label: {
                type: String,
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            },
            rules: Boolean,
            selectType: {
                type: Boolean,
                default: false
            }
        },

        methods: {
        }
    };
</script>

<style lang="scss" scoped>
    .checkbox {
        display: flex;
        align-items: center;

        &__label {
            display: inline-flex;
            align-items: center;
        }

        &__name {
            margin-right: 10px;
        }

        &__block {
            display: inline-block;
            width: 2.4rem;
            height: 2.4rem;
            background-color: #1c232e;
            border: 0;
            box-sizing: border-box;
            border-radius: 50%;
            position: relative;
            cursor: pointer;
            transition: .3s all;
        }

        &__block:after {
            content: '';
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("data:image/svg+xml,%3Csvg width='15' height='10' viewBox='0 0 15 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.29456 7.64745L12.9412 0L14.1183 1.17627L5.29456 10L0.000488281 4.70593L1.17676 3.52966L5.29456 7.64745Z' fill='white'/%3E%3C/svg%3E%0A");
            position: absolute;
            top: 50%;
            left: 50%;
            opacity: 0;
            transition: .2s all;
            pointer-events: none;
            width: 1.8rem;
            height: 1.8rem;
            transform: translate(-50%, -50%) scale(0);
        }

        &__input {
            display: none;
        }

        &__input:checked + .checkbox__block {
            background-color: #ff2e00;
        }

        &__input:checked + .checkbox__block:after {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }

        &__text {
            font-size: 1.4rem;
            font-weight: 500;
            color: $grey;
            margin-left: 8px;
        }

        a {
            color: #fff;
        }

        &._selectType {
            .checkbox {
                &__block {
                    border: 1px solid rgba(#fff, .02);
                }
            }
        }
    }

</style>
