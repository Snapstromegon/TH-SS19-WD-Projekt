<template>

    <header id="top-bar">

        <a v-if="displayNavigateBackIcon" @click="nextViewLevel" class="header-item header-icon-link">
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
        },
        props: {
            displayNavigateBackIcon: {
                type: Boolean,
                default: false
            },
            nextLevelRoute: {
                type: String,
                default: '/gallery/1'
            }
        },
        methods: {
            nextViewLevel() {
                this.$router.push(this.nextLevelRoute);
            }
        }
    }
</script>