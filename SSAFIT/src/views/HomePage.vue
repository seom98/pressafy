<template>
    <div>
        <TheHeader :user="user" @logout="logout" />
    </div>
    <div>
        <RouterView @login-user="loginUser" />
    </div>
</template>

<script setup>
import TheHeader from '@/components/common/TheHeader.vue';
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const user = ref(null);

onMounted(() => {
    const savedUser = localStorage.getItem("loginUser");
    if (savedUser) {
        user.value = JSON.parse(savedUser);
    }
});

const logout = () => {
    user.value = null;
    localStorage.removeItem("loginUser");
    alert("로그아웃 했습니다.");
};

const loginUser = (loginUser) => {
    // user 정보 요청 api 주소
    const API_URL = `http://localhost:8080/api-user`;

    // axios 요청
    axios
        .get(API_URL)
        .then((res) => {
            let matchedUser = res.data.find(
                (u) => u.id === loginUser.id && u.password === loginUser.password
            );

            if (matchedUser) {
                user.value = matchedUser;
                localStorage.setItem("loginUser", JSON.stringify(matchedUser));
                alert("로그인 성공");
                router.push('/');
            } else {
                alert("로그인 실패");
            }
        })
        .catch((err) => {
            console.log(err);
            alert("로그인 실패: 서버 에러");
        });
};

</script>
<style scoped></style>

