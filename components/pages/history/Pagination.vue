<template>
    <div :class="$style.Pagination">
        <div :class="[$style.btn, $style.prev, {[$style.disable]: currentPage == 1}]"
             @click="$emit('change-page', currentPage - 1)"
        >
            Предыдущая
        </div>

        <div :class="$style.list">
            <div v-for="number in countArray"
                 :key="number"
                 :class="[$style.item, {[$style._isActive]: currentPage == number}]"
                 @click="$emit('change-page', number)"
            >
                {{ number }}
            </div>
        </div>

        <div :class="[$style.btn, $style.next, {[$style.disable]: currentPage == allPages || currentPage == 5}]"
             @click="$emit('change-page', currentPage + 1)"
        >
            Следующая
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            allPages: {
                type: [Number, String],
                default: 0
            },

            currentPage: {
                type: [Number, String],
                default: 1
            }
        },

        computed: {
            countArray() {
                const arr = [];
                for (let i = 1; i <= (this.allPages > 5 ? 5 : this.allPages); i++) {
                    arr.push(i);
                }

                return arr;
            }
        }
    };
</script>

<style lang="scss" module>
    .Pagination {
        display: flex;
        align-items: center;
        font-weight: 500;
        color: rgba(#fff, .4);
    }

    .btn {
        transition: $transition;
        cursor: pointer;

        &:hover {
            color: #fff;
        }

        &.prev {
            margin-right: 1rem;
        }

        &.next {
            margin-left: 1rem;
        }

        &.disable {
            color: rgba(#fff, .2);
            pointer-events: none;
        }
    }

    .list {
        display: flex;
        align-items: center;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.2rem;
        height: 3.2rem;
        margin-right: .4rem;
        border-radius: 100%;
        background-color: transparent;
        transition: $transition;
        cursor: pointer;

        &:hover {
            color: #fff;
        }

        &._isActive {
            color: #fff;
            background-color: $accent;
        }

        &:last-child {
            margin-right: 0;
        }
    }
</style>
