<template>

    <div class="flex-container">

        <ImageGallery :images="galleryImages" :current-page="currentPage"/>

        <ThePagination :current-page="currentPage" :number-of-images="Object.getOwnPropertyNames(galleryImages).length"  @last="changeToLastPage" @next="changeToNextPage"/>

    </div>
    
</template>

<script>

    import ImageGallery from '@/components/ImageGallery.vue';
    import ThePagination from '@/components/ThePagination.vue';

    export default {
        name: "Gallery",
        components: {
            ImageGallery,
            ThePagination
        },
        props: {
            galleryImages: {
                type: Object,
                default: () => ({})
            }
        },
        data: () => ({
            currentPage: null
        }),
        methods: {
            changeToLastPage() {
                this.$router.push(`/gallery/${this.currentPage - 1}`)
            },

            changeToNextPage() {
                this.$router.push(`/gallery/${this.currentPage + 1}`)
            }
        },
        watch: {
            $route() {
                this.currentPage = + this.$route.params.page;
            }
        },
        created() {
            this.currentPage = + this.$route.params.page;
        }
    }

</script>