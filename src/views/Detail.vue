<template>

    <div id="app-container">

        <TheHeader display-navigate-back-icon="true"/>

        <main id="details">

            <div class="image">

                <img :src="image.previewImg" alt="">

            </div>

            <div class="image-informations">

                <h1>{{image.Title.de}}</h1>
                <small class="artist">{{image.Zuschreibung.de}} <br> {{image.Dated}}</small>

                <DetailTab>
                    <template slot="title">Maße</template>
                    <template slot="content">{{image.Dimensions.de}}</template>
                </DetailTab>

                <DetailTab>
                    <template slot="title">Kurzbeschreibung</template>
                    <template slot="content">{{image.Longtext.de}}</template>
                </DetailTab>

            </div>

        </main>

        <ThePagination :current-page="currentPageNumber" :number-of-pages="galleryImages.length"  @last="changeToLastPage" @next="changeToNextPage"/>

    </div>
    
</template>

<script>

    import TheHeader from '@/components/TheHeader.vue';
    import ImageGallery from '@/components/ImageGallery.vue';
    import ThePagination from '@/components/ThePagination.vue';
    import DetailTab from '@/components/DetailTab.vue';

    export default {
        name: "Detail",
        components: {
            TheHeader,
            ImageGallery,
            ThePagination,
            DetailTab
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
            },

            currentPageNumber() {
                return this.galleryImages.findIndex(image => image.Oid === this.currentImageId) + 1;
            }
        },
        methods: {
            changeToLastPage() {
                const nextImageId = this.galleryImages[this.currentPageNumber - 2].Oid;
                this.$router.push(`/details/${nextImageId}`);
            },

            changeToNextPage() {
                const nextImageId = this.galleryImages[this.currentPageNumber].Oid;
                this.$router.push(`/details/${nextImageId}`);
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