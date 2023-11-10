<template>
    <div>
        <div>
            <iframe class="video-list-item" width="360px" height="240px"
                :src='`https://www.youtube.com/embed/${route.params.url}`' title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <h4>리뷰 목록</h4>
        <hr />
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>쓰니</th>
                <th>등록</th>
            </tr>
            <tr v-for="review in store.reviewList" :key="review.id">
                <td>{{ review.id }}</td>
                <td>
                    <RouterLink :to="`/review/${route.params.url}/${review.id}`">{{ review.title }}</RouterLink>
                </td>
                <td>{{ review.writerId }}</td>
                <td>{{ review.regDate }}</td>
            </tr>
        </table>
        <!-- <ReviewCreate /> -->
        <ReviewSearchInput />
        <RouterLink :to="{ name: 'reviewCreate' }">글작성</RouterLink>
    </div>
</template>

<script setup>
import { useReviewStore } from "@/stores/review";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import ReviewSearchInput from "./ReviewSearchInput.vue";
const store = useReviewStore();

defineProps({
    url: String
})
onMounted(() => {
    const route = useRoute()
    store.getReviewList(route.params.url);
});
const route = useRoute();
</script>

<style scoped></style>
