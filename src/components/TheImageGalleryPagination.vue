<template>

<div class="pagination">

    <a class="pagination-item" href="#" @click="goToLastPage"> < </a>

    <a class="pagination-item" href="#"> {{currentPage}} / {{lastPage}} </a>

    <a class="pagination-item" href="#" @click="goToNextPage"> > </a>

</div>

</template>

<script>
    export default {
        name: "TheImageGalleryPagination",
        props: {
            imagesCount: {
                type: Number
            },
            imagesPerSite: {
                type: Number
            },
            currentPage: {
                type: Number
            }
        },
        computed: {

            lastPage() {
                return Math.ceil(this.imagesCount / this.imagesPerSite);
            }

        },
        methods: {

            goToNextPage() {
                if (this.currentPage < this.lastPage) this.$emit('next');
            },

            goToLastPage() {
                if (this.currentPage > 1) this.$emit('last');
            }

        }
    }
</script>

<style lang="scss" scoped>

    .pagination {

        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100vw;
        background-color: #2c3e50;

        .pagination-item {

            background-color: azure;
            padding: 5px 10px;
            margin: 0 5px 0 0;

        }

    }

</style>