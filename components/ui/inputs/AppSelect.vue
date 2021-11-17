<template>
    <Multiselect :value="value"
                 :options="options"
                 :searchable="searchable"
                 select-label=""
                 selected-label=""
                 deselect-label=""
                 class="multiSelect"
                 @select="onSelect"
    >
        <!-- eslint-disable vue/no-unused-vars-->
        <template slot="singleLabel"
                  slot-scope="{ option }"
        >
            {{ value.name }}
        </template>

        <template slot="option"
                  slot-scope="props">
            {{ props.option.name }}
        </template>
    </Multiselect>
</template>

<script>
    import Multiselect from 'vue-multiselect';

    export default {
        name: 'AppSelect',
        components: {
            Multiselect
        },
        props: {
            value: {
                type: Object,
                default: () => ({})
            },

            options: {
                type: Array,
                default: () => []
            },

            searchable: {
                type: Boolean,
                default: false
            },
        },

        methods: {
            onSelect(option) {
                const data = {
                    inputName: this.name,
                    option: option
                };
                this.$emit('on-select', data);
            },
        }
    };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
    .multiSelect {
        cursor: pointer;
        height: 5.4rem;
    }

    /* stylelint-disable */
    ::v-deep .multiselect{
        /* stylelint-enable */
        &__tags {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 1.8rem 2.4rem;
            background: transparent;
            border-radius: 30px;
            font-size: 1.4rem;
            font-weight: 600;
            color: rgba(#fff, .8);
            transition: $transition;
            border-color: rgba(#fff, .1);
        }

        &__single {
            margin: 0;
            padding: 0;
            font-size: 1.4rem;
            background: transparent;
        }

        &__select {
            top: 1.2rem;

            &:before {
                color: rgba(#fff, .4);
                border-color: rgba(#fff, .4) transparent transparent;
            }
        }

        &__content-wrapper {
            color: rgba(#fff, .8);
            font-weight: 600;
            background: transparent;
            transition: $transition;
            border-color: rgba(#fff, .1);
        }

        &__option {
            padding: 2rem;
        }

        &__option--highlight {
            background: $accent;
        }
    }
</style>


<style lang="scss">
    .multiselect--active {
        .multiselect__tags {
            background: $dark-notif;
        }

        .multiselect__content-wrapper {
            background: $dark-notif;
        }
    }
</style>
