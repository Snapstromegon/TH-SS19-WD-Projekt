<template>

    <div class="image-gallery-item">

        <img :src="image.imgSrc" alt="" @click="openDetailPage">

    </div>

</template>

<script>
    export default {
        name: "ImageGalleryItem",
        props: {
            image: {
                type: Object
            }
        },
        methods: {

            openDetailPage() {

                this.$router.push(`/details/${this.$vnode.key}`)

            }

        }
    }
</script>
