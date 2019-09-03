<template>

    <div id="app-container">

        <TheHeader :display-navigate-back-icon="true"/>

        <main id="full">

            <div class="image">

                <img :src="image.imgSrc" alt="">

            </div>

        </main>

    </div>
    
</template>

<script>

    import TheHeader from '@/components/TheHeader.vue';

    export default {
        name: "Detail",
        components: {
            TheHeader
        },
        props: {
            galleryImages: {
                type: Array,
                default: () => ([])
            }
        },
        data: () => ({
            currentImageId: null
        }),
        computed: {
            image() {
                return this.galleryImages.find(image => image.Oid === this.currentImageId);
            }
        },
        watch: {
            $route() {
                this.currentImageId = + this.$route.params.id;
            }
        },
        created() {
            this.currentImageId = + this.$route.params.id;
        }
    }

</script>