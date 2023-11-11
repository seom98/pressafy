<template>
    <div class="review-page">
        <div class="video">
            <iframe class="video-list-item" width="360px" height="240px"
                :src='`https://www.youtube.com/embed/${route.params.url}`' title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <div class="button-space">
            <hr style="margin-bottom:30px;" />
            <button class="createbutton">
                <RouterLink :to="{ name: 'reviewCreate' }">리뷰 작성하러 가기</RouterLink>
            </button>
        </div>
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>작성일</th>
            </tr>
            <tr v-for=" review, i in store.reviewList" :key="review.id">
                <td>{{ i + 1 }}</td>
                <td>
                    <RouterLink :to="`/review/${route.params.url}/${review.id}`">{{ review.title }}</RouterLink>
                </td>
                <td>{{ review.writerId }}</td>
                <td>{{ review.regDate }}</td>
            </tr>
        </table>

    </div>
</template>

<script setup>
import { useReviewStore } from "@/stores/review";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
const store = useReviewStore();


onMounted(() => {
    const route = useRoute()
    store.getReviewList(route.params.url);
});
const route = useRoute();
</script>

<style scoped>
table {
    border-collapse: separate;
    border-spacing: 0;
    width: 1000px;
    margin: 0 auto;
    margin-bottom: 40px;
}

th,
td {
    padding: 6px 15px;
    text-align: center;
}

th {
    background: rgb(60, 223, 169);
    color: #fff;
}

tr:first-child th:first-child {
    border-top-left-radius: 6px;
}

tr:first-child th:last-child {
    border-top-right-radius: 6px;
}

td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
}

td:first-child {
    border-left: 1px solid #c6c9cc;
}

td:nth-child(1) {
    white-space: nowrap;
    width: 30px;
    transition: 0.3s;
}

td:nth-child(2) a {
    text-decoration: none;
    color: #555;
    font-weight: 800;
}

td:nth-child(2) {
    text-align: start;
    white-space: nowrap;
    cursor: pointer;
    transition: 0.6s;
}

td:nth-child(2):hover {
    font-size: 30px;
    padding: 20px 50px;
}

td:nth-child(3) {
    white-space: nowrap;
    width: 100px;
    transition: 0.3s;
}

td:nth-child(4) {
    width: 100px;
    transition: 0.3s;
}

tr:nth-child(2n+1) td {
    background: rgb(211, 235, 227);
}

tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
}

tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
}

.video {
    margin: 0 auto;
    width: 700px;
}

.video-list-item {
    width: 700px;
    height: 400px;
    border-radius: 20px;
    border: solid 2px #ccc;
}

.button-space {
    width: 1000px;
    margin: 0 auto;
}

.createbutton {
    cursor: pointer;
    background-color: rgb(211, 235, 227);
    color: #ccc;
    border-radius: 10px;
    border: none;
    width: 140px;
    height: 40px;
    margin-bottom: 30px;
    transition: 0.3s;
}

.createbutton:hover {
    background-color: rgb(55, 182, 140);
}

.createbutton a {
    text-decoration: none;
    color: #555;
}
</style>
