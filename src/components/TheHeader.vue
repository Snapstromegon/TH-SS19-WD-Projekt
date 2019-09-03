<template>

    <header id="top-bar">

        <a v-if="displayNavigateBackIcon" @click="lastPage" class="header-item header-icon-link">
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
            galleryPage: {
                type: Number,
                default: 1
            }
        },
        methods: {
            lastPage() {
                if (this.$route.path.includes('details')) {
                    this.$router.push(`/gallery/${this.galleryPage}`);
                }
                if (this.$route.path.includes('full')) {
                    this.$router.push(`/details/${this.$route.params.id}`);
                }
            }
        }
    }
</script>