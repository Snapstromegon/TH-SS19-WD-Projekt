<template>

    <div class="details">

        <the-header>

            <a href="#" @click="back"> < </a>

        </the-header>

        <img :src="image.imgSrc" alt="">

        <br><br>

        <h2>Titel</h2>
        {{image.Title.de}}

        <h2>Beschriftung</h2>
        {{image.Beschriftung.de}}

        <h2>Ausstellungsgeschichte</h2>
        {{image.Ausstellungsgeschichte.de}}

    </div>
    
</template>

<script>
    // @ is an alias to /src
    import TheHeader from '@/components/TheHeader.vue';

    export default {
        name: "Detail",
        components: {
            TheHeader
        },
        data: () => ({
            images: window.galleryImages
        }),
        computed: {

            image() {

                const identifier = this.$route.params.id;
                console.log(this.$route.params.id);
                return this.images.find(image => image.Oid === +identifier);

            }

        },
        methods: {

            back() {

                this.$router.back();

            }

        }
    }
</script>

<style scoped>

</style>