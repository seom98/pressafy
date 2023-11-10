<template>
    <div>
        <h4>게시글 상세</h4>
        <hr>
        <div>{{ store.review.title }}</div>
        <div>{{ store.review.writerId }}</div>
        <div>{{ store.review.regDate }}</div>
        <div>{{ store.review.content }}</div>

        <a @click="deleteReview">글삭제</a>
        <RouterLink :to="{ name: 'reviewUpdate' }">글수정</RouterLink>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useReviewStore } from "@/stores/review";
import { onMounted } from "vue";
import axios from 'axios'

const store = useReviewStore()

const route = useRoute();
const router = useRouter();
onMounted(() => {
    store.getReview(route.params.id)
})
const deleteReview = function () {
    axios.delete(`http://localhost:8080/api-review/review/${route.params.id}`)
        .then(() => {
            router.push({ name: 'reviewList' })
        })
}

const updateReview = function () {
    router.push({ name: 'reviewUpdate' })
}


</script>

<style scoped></style>