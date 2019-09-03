<template>

    <main id="gallery">

        <ImageGalleryItem v-for="image in visibleImages" :image="image" />

    </main>

</template>

<script>

    import ImageGalleryItem from '@/components/ImageGalleryItem.vue';

    export default {
        name: "ImageGallery",
        components: {
            ImageGalleryItem
        },
        props: {
            images: {
                type: Array,
                default: () => ([])
            },
            currentPage: {
                type: Number,
                default: 1
            },
            imagesPerPage: {
                type: Number,
                default: 16
            }
        },
        computed: {
            visibleImages() {
                const firstElement = Math.abs((this.currentPage - 1) * this.imagesPerPage);
                return this.images.slice(firstElement, firstElement + this.imagesPerPage);
            }
        }
    }
</script>