<template>

    <div id="image-gallery">

        <div id="image-gallery-items">

            <image-gallery-item :key="image.Oid" v-for="(image, index) in visibleImages" :image="image"></image-gallery-item>

        </div>

        <the-image-gallery-pagination :images-per-site="imagesPerPage" :current-page="page" :images-count="+ images.length" @last="changeToLastPage" @next="changeToNextPage"></the-image-gallery-pagination>

    </div>
    
</template>

<script>
    import ImageGalleryItem from '@/components/ImageGalleryItem.vue';
    import TheImageGalleryPagination from '@/components/TheImageGalleryPagination.vue';

    export default {
        name: "ImageGallery",
        data: () => ({
            images: [],
            page: null,
            imagesPerPage: 10
        }),
        components: {
            ImageGalleryItem,
            TheImageGalleryPagination
        },
        computed: {

            visibleImages() {
                const begin = Math.abs((this.page - 1) * this.imagesPerPage);
                return this.images.slice(begin, begin + this.imagesPerPage);
            }

        },
        methods: {

            changeToNextPage() {

                this.$router.push(`/gallery/${this.page + 1}`);

            },

            changeToLastPage() {

                this.$router.push(`/gallery/${this.page - 1}`);

            }

        },
        watch: {
            $route(to, from) {
                this.page = + this.$route.params.page;
            }
        },
        created() {

            this.page = + this.$route.params.page;

            const xhr = new XMLHttpRequest();

            xhr.open('GET', '/paintings_with_img.json');

            xhr.addEventListener('load', (response) => {
                const imagesArray = JSON.parse( response.target.response );
                this.images = imagesArray;
                window.galleryImages = imagesArray;
            });

            xhr.send();

        }
    }
</script>