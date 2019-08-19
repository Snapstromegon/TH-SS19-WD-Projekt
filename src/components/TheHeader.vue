<template>

    <header id="top-bar">

        <a v-if="showNavigateBack" href="#" class="header-item header-icon-link">
            <i class="material-icons">keyboard_arrow_left</i>
        </a>

        <div class="header-item header-title">
            <h1>Cranach Gallery</h1>
        </div>

    </header>
    
</template>

<script>
    export default {
        name: "TheNavigation",
        computed: {
            showNavigateBack() {
                return ! this.$route.path.match(/\/gallery\/[0-9]*/);
            }
        }
    }
</script>