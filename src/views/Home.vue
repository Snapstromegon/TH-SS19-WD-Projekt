<template>
  <div class="home">

    <the-header></the-header>

    <image-gallery></image-gallery>

  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue';
import ImageGallery from '@/components/ImageGallery.vue';

export default {
  name: 'home',
  components: {
    ImageGallery,
    TheHeader
  }
}
</script>
