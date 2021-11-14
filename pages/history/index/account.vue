<template>
    <div :class="$style.Account">
        <div :class="$style.head">
            <div :class="$style.row">
                <div :class="[$style.column1, $style.cell]">
                    ID
                </div>
                <div :class="[$style.column2, $style.cell]">
                    IP
                </div>
                <div :class="[$style.column3, $style.cell]">
                    Действие
                </div>
                <div :class="[$style.column4, $style.cell]">
                    Дата
                </div>
            </div>

        </div>

        <div :class="$style.table">
            <div :class="$style.row">
                <div :class="[$style.column1, $style.cell]">
                    72502945
                </div>
                <div :class="[$style.column2, $style.cell]">
                    192.168.0.1
                </div>
                <div :class="[$style.column3, $style.cell]">
                    Вход в личный кабинет
                </div>
                <div :class="[$style.column4, $style.cell]">
                    17 августа 2020 в 22:53
                </div>
            </div>
            <div :class="$style.row">
                <div :class="[$style.column1, $style.cell]">
                    72502945
                </div>
                <div :class="[$style.column2, $style.cell]">
                    192.168.0.1
                </div>
                <div :class="[$style.column3, $style.cell]">
                    Вход в личный кабинет
                </div>
                <div :class="[$style.column4, $style.cell]">
                    17 августа 2020 в 22:53
                </div>
            </div>
            <div :class="$style.row">
                <div :class="[$style.column1, $style.cell]">
                    72502945
                </div>
                <div :class="[$style.column2, $style.cell]">
                    192.168.0.1
                </div>
                <div :class="[$style.column3, $style.cell]">
                    Вход в личный кабинет
                </div>
                <div :class="[$style.column4, $style.cell]">
                    17 августа 2020 в 22:53
                </div>
            </div>
            <div :class="$style.row">
                <div :class="[$style.column1, $style.cell]">
                    72502945
                </div>
                <div :class="[$style.column2, $style.cell]">
                    192.168.0.1
                </div>
                <div :class="[$style.column3, $style.cell]">
                    Вход в личный кабинет
                </div>
                <div :class="[$style.column4, $style.cell]">
                    17 августа 2020 в 22:53
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Account',
    };
</script>

<style module lang="scss">
    .head {
        .row {
            border-bottom: 0;
        }
    }

    .table .row:hover .cell {
        opacity: 1;
    }

    .row {
        display: flex;
        border-bottom: 1px solid rgba(#fff, .04);
    }

    .cell {
        width: 100%;
        margin-right: 8.4rem;
        padding: 2.2rem 0;
        opacity: .4;
        font-weight: 500;
        transition: opacity $transition;

        &:first-child {
            padding-left: 2rem;
        }

        &:last-child {
            margin-right: 0;
            padding-right: 3.2rem;
        }
    }

    // columns

    .column1 {
        max-width: 6.2rem;
    }

    .column2 {
        max-width: 7rem;
    }

    .column3 {
        max-width: 16rem;
    }

    .column4 {
        margin-left: auto;
        width: 20rem;
    }
</style>
