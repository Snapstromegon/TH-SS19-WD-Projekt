<template>
  <div id="app">
    <TheHeader/>
    <router-view :gallery-images="galleryImages"/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader.vue';

  export default {
    name: 'App',
    data: () => ({
      galleryImages: []
    }),
    components: {
      TheHeader
    },
    created() {

      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/images.json');
      xhr.addEventListener('load', response => {
        this.galleryImages = JSON.parse(xhr.response);
        console.log(JSON.parse(xhr.response));
      });
      xhr.send();

    }
  }
</script>
