<template>

    <footer>

        <!-- TODO: a href=# -->

        <a @click="goToLastPage" class="footer-item footer-item-link">
            <i class="material-icons">keyboard_arrow_left</i>
        </a>

        <div class="footer-item">
            {{currentPage}} / {{numberOfPages}}
        </div>

        <a @click="goToNextPage" class="footer-item footer-item-link">
            <i class="material-icons">keyboard_arrow_right</i>
        </a>

    </footer>
    
</template>

<script>
    export default {
        name: "ThePagination",
        props: {
            currentPage: {
                type: Number,
                default: 1
            },
            imagesPerPage: {
                type: Number,
                default: 16
            },
            numberOfPages: {
                type: Number,
                default: 0
            }
        },
        computed: {
            lastPage() {
                return Math.ceil(this.numberOfImages / this.imagesPerPage);
            }
        },
        methods: {
            goToNextPage() {
                if (this.currentPage < this.numberOfPages) this.$emit('next');
            },
            goToLastPage() {
                if (this.currentPage > 1) this.$emit('last');
            }
        }
    }
</script>