<template>
  <div id="app">
    <router-view :gallery-images="galleryImages"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      galleryImages: []
    }),
    components: {
    },
    async created() {

      /* const xhr = new XMLHttpRequest();
      xhr.open('GET', '/images.json');
      xhr.addEventListener('load', response => {
        const imagesObject = JSON.parse(xhr.response);
        const imagesArray = Object.getOwnPropertyNames( imagesObject ).map(key => { return imagesObject[key]; });
        this.galleryImages = imagesArray;
        console.log(imagesArray);
      });
      xhr.send(); */

      const request = new Request('/images.json');

      const response = await fetch(request);

      const imagesObject = await response.json();

      this.galleryImages = Object.getOwnPropertyNames( imagesObject ).map(key => { return imagesObject[key]; });

    }
  }
</script>
