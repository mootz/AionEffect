<template>
    <div class="checkbox">

        <label class="checkbox__label">
            <input type="checkbox"
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
                type: String,
                default: ''
            },
            rules: Boolean
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
            height: 32px;
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
            background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.50005 11.3791L14.3941 4.48438L15.4553 5.54488L7.50005 13.5001L2.72705 8.72712L3.78755 7.66663L7.50005 11.3791Z' fill='white'/%3E%3C/svg%3E%0A");
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
    }

</style>
