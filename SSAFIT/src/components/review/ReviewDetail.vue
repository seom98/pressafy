<template>
    <div>
        <h4>게시글 상세</h4>
        <hr>
        <div>{{ store.review.title }}</div>
        <div>{{ store.review.writer }}</div>
        <div>{{ store.review.regDate }}</div>
        <div>{{ store.review.viewCnt }}</div>
        <div>{{ store.review.content }}</div>

        <button @click="deleteReview">삭제</button>
        <button @click="updateReview">수정</button>
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
    axios.delete(`http://localhost:8080/api/review/${route.params.id}`)
        .then(() => {
            router.push({ name: 'reviewList' })
        })
}

const updateReview = function () {
    router.push({ name: 'reviewUpdate' })
}


</script>

<style scoped></style>