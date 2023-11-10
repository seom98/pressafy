<template>
    <div>
        <h4>게시글 작성</h4>
        <fieldset>
            <legend>등록</legend>
            <div>
                <label for="title">제목 : </label>
                <input type="text" id="title" v-model="review.title">
            </div>
            <div>
                <label for="writerId">쓰니 : </label>
                <input type="text" id="writerId" v-model="review.writerId">
            </div>
            <div>
                <label for="content">내용 : </label>
                <textarea id="content" cols="30" rows="10" v-model="review.content"></textarea>
            </div>
            <div>
                <button @click="createReview">등록</button>
            </div>
        </fieldset>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useReviewStore } from "@/stores/review";
import { useRoute } from "vue-router";

const store = useReviewStore()
const review = ref({
    title: '',
    writerId: '',
    content: '',
    videoUrl: '',
})

onMounted(() => {
    const route = useRoute()
    review.value.videoUrl = route.params.url;
});
const route = useRoute();

const createReview = function () {
    store.createReview(review.value)
}
</script>

<style scoped></style>