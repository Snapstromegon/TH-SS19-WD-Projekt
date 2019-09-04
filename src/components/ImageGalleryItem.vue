<template>

    <div @click="openDetailView" class="gallery-item">

        <img :src="image.previewImg" alt="">
        <img :src="image.imgSrc" alt="">

        <p>"{{imageTitle}}"</p>

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
        computed: {

          imageTitle() {
              if (this.image.Title.de.length < 50)
                  return this.image.Title.de;

              return this.image.Title.de.substr(0, 50) + '...';
          }

        },
        methods: {
            openDetailView() {
                this.$router.push(`/details/${this.image.Oid}`);
            }
        }
    }
</script>