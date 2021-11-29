<template>
    <div class="AppSelect">
        <p v-if="label"
           :class="$style.label">
            {{ label }}
        </p>

        <Multiselect :id="id"
                     :name="id"
                     :value="value"
                     :options="options"
                     :searchable="searchable"
                     multiple
                     select-label=""
                     selected-label=""
                     deselect-label=""
                     class="multiSelect"
                     track-by="id"
                     :max-height="maxHeight"
                     :allow-empty="allowEmpty"
                     :close-on-select="false"
                     @select="onSelect"
                     @remove="onRemove"
        >
            <!-- eslint-disable vue/no-unused-vars-->
            <template slot="singleLabel"
                      slot-scope="{ option }"
            >
                {{ value.name }}

            </template>

            <template slot="tag"
                      slot-scope="{ option }">
                {{ option.name }}{{ showSeparatedNames(option.name) }}
            </template>

            <template slot="noResult"
                      slot-scope="{ option }">
                Ничего не найдено
            </template>

            <template slot="noOptions"
                      slot-scope="{ option }">
                Список пуст
            </template>

            <template slot="option"
                      slot-scope="props">
                <div class="option__check">
                    <AppCheckbox class="option__checkbox"
                                 :checked="Boolean(checkedItem(props.option.id))"
                                 select-type
                    />

                    <span class="option__desc">{{ props.option.full_name }}</span>
                </div>
            </template>


        </Multiselect>
    </div>

</template>

<script>
    import Multiselect from 'vue-multiselect';
    import AppCheckbox from '@/components/ui/inputs/AppCheckbox';

    export default {
        name: 'AppMultiSelect',
        components: {
            AppCheckbox,
            Multiselect
        },
        props: {
            id: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },

            value: {
                type: [Object, Array],
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

            allowEmpty: {
                type: Boolean,
                default: false
            },

            maxHeight: {
                type: Number,
                default: 300
            }
        },

        // computed: {
        //     showSeparatedNames() {
        //         console.log(this.value);
        //         return this.value.map(v => v.name).join(', ');
        //     }
        // },

        methods: {
            onSelect(option) {
                const data = {
                    inputName: this.name,
                    option: option
                };
                this.$emit('on-select', data);
            },
            onRemove(option) {
                this.$emit('on-remove', option.id);
            },

            showSeparatedNames(name) {
                return this.value[this.value.length - 1].name === name ? '' : ',';
            },

            checkedItem(id) {
                return this.value.find(e => e.id === id);
            }
        }
    };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" module>
    .label {
        color: $grey;
        margin-bottom: .8rem;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.3;
    }
</style>

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
            padding: 1.2rem 0;
            font-weight: 600;
            background: transparent;
            transition: $transition;
            border-color: rgba(#fff, .1);
        }

        &__option {
            padding: 1.2rem 2rem;
            color: rgba(#fff, .4);
            transition: $transition;
        }

        &__option--highlight {
            background: transparent;
            color: rgba(#fff, .8);
        }

        &__option--selected {
            background: transparent;
            color: #fff;
        }
    }

    .option {
        &__check {
            display: flex;
            align-items: center;
        }

        &__checkbox {
            pointer-events: none;
        }

        &__desc {
            margin-left: .8rem;
        }
    }
</style>

<style lang="scss">
    /* stylelint-disable */
    .multiselect--active {
        .multiselect__tags {
            border-radius: 30px !important;
            border-color: rgba(#fff, .2);
        }

        .multiselect__content-wrapper {
            margin-top: 1.2rem;
            border-radius: 20px;
            background: #18202c;
            box-shadow: 0 4px 60px #111925;
            border: 1px solid rgba(#fff, .08) !important;
        }
    }

    .multiselect--above {
        .multiselect__content-wrapper {
            margin-bottom: 1.2rem;
            margin-top: 0;
            border: 0;
        }
    }
    /* stylelint-enable */
</style>
