<template>

    <div>

        <a @click="toggleVisibility" class="tab">
            <p><slot name="title"></slot></p>
            <i class="material-icons">
                keyboard_arrow_down
            </i>
        </a>

        <div class="tab-content" v-if="visibility">
            <p>
                <slot name="content"></slot>
            </p>
        </div>

    </div>
    
</template>

<script>
    export default {
        name: "DetailTab",
        data: () => ({
            visibility: false
        }),
        methods: {
            toggleVisibility() {
                this.visibility = this.visibility !== true;
            }
        }
    }
</script>

<style scoped>

</style>