<template>

    <div @click="openDetailView" class="gallery-item">

        <img :src="image.previewImg" :alt="image.Title.de">
        <img @error="cantLoadHighQuality" v-if="hideHighQuality === false" :src="image.imgSrc" :alt="image.Title.de">

        <p>"{{imageTitle}}"</p>

    </div>
    
</template>

<script>
    export default {
        name: "ImageGalleryItem",
        data: () => ({
            hideHighQuality: false
        }),
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
            },

            cantLoadHighQuality() {
                // if can't load high quality image from official cda hide this image tag
                this.hideHighQuality = true;
            }
        }
    }
</script>