<template>

    <div class="gallery-item">

        <img :src="image.previewImg" alt="">

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
        }
    }
</script>