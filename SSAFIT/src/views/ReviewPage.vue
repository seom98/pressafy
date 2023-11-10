<template>
    <div>
        <h2>ReviewPage</h2>
        <RouterView :url="url" />
    </div>
</template>

<script setup>
defineProps({
    url: String
})
</script>

<style scoped></style>