<template>
    <div>
        <h4>게시글 수정</h4>
        <fieldset>
            <legend>등록</legend>
            <div>
                <label for="title">제목 : </label>
                <input type="text" id="title" v-model="review.title">
            </div>
            <div>
                <label for="writerId">쓰니 : </label>
                <input type="text" id="writerId" readonly v-model="review.writerId">
            </div>
            <div>
                <label for="content">내용 : </label>
                <textarea id="content" cols="30" rows="10" v-model="review.content"></textarea>
            </div>
            <div>
                <button @click="updateReview">수정</button>
            </div>
        </fieldset>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useReviewStore } from "@/stores/review";
import { useRoute } from "vue-router";
const store = useReviewStore();
const route = useRoute();
const review = ref({
    id: 0,
    writerId: "",
    title: "",
    content: "",
})
const updateReview = function () {
    store.updateReview(review, route.params.id)
}
</script>

<style scoped></style>