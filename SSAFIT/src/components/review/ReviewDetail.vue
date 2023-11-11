<template>
    <div class="container">
        <h2>상세 리뷰</h2>
        <br>
        <div class="title">
            <div class="title-l">
                <div>{{ store.review.title }}</div>
            </div>
            <div class="title-r">
                <div>작성자 : {{ store.review.writerId }}</div>
                <div class="date">작성일 : {{ store.review.regDate }}</div>
            </div>
        </div>
        <div class="content">{{ store.review.content }}</div>

        <div class="buttonarea">
            <button class="button" @click="deleteReview">글삭제</button>
            <button class="button">
                <RouterLink :to="{ name: 'reviewUpdate' }">글수정</RouterLink>
            </button>
        </div>
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

</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 20px auto;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.title-l {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    width: 500px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgb(142, 195, 177) 100%);
    padding: 10px;
    padding-bottom: 5px;
    border-radius: 10px;
}

.title-r {
    display: flex;
    flex-direction: column;
    align-items: end;
}

.date {
    font-size: 12px;
}

.content {
    background-color: rgb(208, 240, 236);
    width: 97%;
    min-height: 200px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

a,
button {
    text-decoration: none;
    color: #fff;
}

.buttonarea {
    display: flex;
    justify-content: end;
    gap: 20px;
}

.button {
    padding: 0.75rem 2rem;
    outline: none;
    border: none;
    background-color: rgb(184, 225, 211);
    color: #fff;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.button:hover {
    background-color: rgb(55, 182, 140);
}
</style>