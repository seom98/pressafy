<template>
    <div class="review">
        <RouterView :url="url" />
    </div>
</template>

<script setup>
defineProps({
    url: String
})
</script>

<style scoped>
.review {
    margin: 0 auto;
    width: 1150px;
}
</style>