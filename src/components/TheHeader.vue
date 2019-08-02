<template>

    <header class="the-header">

        <div>

            <slot></slot>

            Cranach Digital Archive

        </div>

        <div class="short">

            cda_

        </div>

    </header>

</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style lang="scss" scoped>

    .the-header {

        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100vw;
        background-color: #2c3e50;
        box-sizing: border-box;

        div {
            color: #ffffff;
        }

        .short {

            font-weight: bold;

        }

    }

</style>