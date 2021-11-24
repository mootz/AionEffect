<template>
    <label :class="[$style.input, {[$style._focused]: focused}]">
        <span v-if="label"
              :class="$style.input__label">{{ label }}</span>

        <span :class="$style.input__inpWrap">
            <span v-if="search"
                  :class="$style.input__iconSearch">
                <svg>
                    <use xlink:href="#icon-search" />
                </svg>
            </span>

            <input :class="[$style.input__inp, {[$style.input__inpSearch]: search}]"
                   :autocomplete="type === 'password' ? 'password' : null"
                   :placeholder="placeholder"
                   :type="passwordView ? 'text' : type"
                   :value="value"
                   :min="type === 'number' ? min : null "
                   @input="$emit('input', $event.target.value)"
                   @focus="setFocused(true)"
                   @blur="setFocused(false)"
            >

            <span v-if="type === 'password' || passwordView"
                  :class="[$style.input__eye, {[$style._active]: passwordView}]"
                  @click="showPassword">
                <svg width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2"
                       clip-path="url(#clip0_804:3547)">
                        <path d="M1.18091 12C2.12091 6.88 6.60791 3 11.9999 3C17.3919 3 21.8779 6.88 22.8189 12C21.8789 17.12 17.3919 21 11.9999 21C6.60791 21 2.12191 17.12 1.18091 12ZM11.9999 17C13.326 17 14.5978 16.4732 15.5354 15.5355C16.4731 14.5979 16.9999 13.3261 16.9999 12C16.9999 10.6739 16.4731 9.40215 15.5354 8.46447C14.5978 7.52678 13.326 7 11.9999 7C10.6738 7 9.40206 7.52678 8.46437 8.46447C7.52669 9.40215 6.99991 10.6739 6.99991 12C6.99991 13.3261 7.52669 14.5979 8.46437 15.5355C9.40206 16.4732 10.6738 17 11.9999 17ZM11.9999 15C11.2043 15 10.4412 14.6839 9.87859 14.1213C9.31598 13.5587 8.99991 12.7956 8.99991 12C8.99991 11.2044 9.31598 10.4413 9.87859 9.87868C10.4412 9.31607 11.2043 9 11.9999 9C12.7956 9 13.5586 9.31607 14.1212 9.87868C14.6838 10.4413 14.9999 11.2044 14.9999 12C14.9999 12.7956 14.6838 13.5587 14.1212 14.1213C13.5586 14.6839 12.7956 15 11.9999 15Z"
                              fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_804:3547">
                            <rect width="24"
                                  height="24"
                                  fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'AppInput',
        props: {
            label: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ''
            },
            min: {
                type: [Number, String],
                default: 0
            },
            search: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                passwordView: false,
                focused: false
            };
        },

        methods: {
            showPassword() {
                this.passwordView = !this.passwordView;
            },

            setFocused(val) {
                this.focused = val;
            }
        }
    };
</script>

<style lang="scss" module>
    .input {
        display: flex;
        flex-direction: column;
        width: 100%;

        &__inp {
            width: 100%;
            font-weight: 500;
            padding: 1.8rem 2.4rem;
            border-radius: 30px;
            border: 1px solid rgba(#fff, 0.12);
            font-size: 1.4rem;
            color: rgba(#fff, .8);
            background: rgba(#fff, 0.04);

            &::placeholder {
                color: #6666667a;
            }
        }

        &__inpSearch {
            padding: 1.8rem 2.4rem 1.8rem 5.2rem;
        }

        &__label {
            color: $grey;
            margin-bottom: .8rem;
            font-size: 1.2rem;
            font-weight: 600;
        }

        &__inpWrap {
            position: relative;
        }

        &__iconSearch {
            position: absolute;
            left: 1.8rem;
            top: 50%;
            width: 2.4rem;
            height: 2.4rem;
            fill: #fff;
            opacity: .2;
            transform: translateY(-50%);
            transition: opacity $transition;
        }

        &__eye {
            display: flex;
            position: absolute;
            top: 50%;
            right: 1.8rem;
            width: 2.4rem;
            height: 2.4rem;
            cursor: pointer;
            transform: translate(-50%, -50%);

            svg {
                width: 100%;
                height: 100%;
            }

            g {
                transition: $transition;
            }

            &._active {
                g {
                    opacity: .8;
                }
            }
        }

        &._focused {
            .input {
                &__iconSearch {
                    opacity: 1;
                }

                &__inp {
                    border-color: rgba(#fff, .12);
                    background: rgba(#fff, .04);
                }
            }
        }
    }
</style>
