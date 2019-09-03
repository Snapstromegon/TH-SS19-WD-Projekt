<template>

    <div @click="openDetailView" class="gallery-item">

        <img :src="image.previewImg" alt="">
        <img :src="image.imgSrc" alt="">

        <p>"{{image.Title.de}}"</p>

    </div>
    
</template>

<script>
    export default {
        name: "ImageGalleryItem",
        props: {
            image: {
                type: Object,
                default: {}
            }
        },
        methods: {
            openDetailView() {
                this.$router.push(`/details/${this.image.Oid}`);
            }
        }
    }
</script>