<template>

    <div id="app-container">

        <TheHeader/>

        <ImageGallery :images="galleryImages" :current-page="currentPage"/>

        <ThePagination :current-page="currentPage" :number-of-pages="numberOfPages"  @last="changeToLastPage" @next="changeToNextPage"/>

    </div>
    
</template>

<script>

    import TheHeader from '@/components/TheHeader.vue';
    import ImageGallery from '@/components/ImageGallery.vue';
    import ThePagination from '@/components/ThePagination.vue';

    export default {
        name: "Gallery",
        components: {
            TheHeader,
            ImageGallery,
            ThePagination
        },
        props: {
            galleryImages: {
                type: Array,
                default: () => ([])
            }
        },
        data: () => ({
            currentPage: null
        }),
        computed: {
            numberOfPages() {
                return Math.ceil(this.galleryImages.length / 16);
            }
        },
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