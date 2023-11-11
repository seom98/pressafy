<template>
    <div class="bo">
        <div class="he">
            <TheHeader :user="user" @logout="logout" />
        </div>
        <div class="ma">
            <RouterView @login-user="loginUser" @create-user="createUser" />
        </div>
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

const createUser = (user) => {

    const API_URL = `http://localhost:8080/api-user/signup`;
    axios({
        url: API_URL,
        method: "POST",
        params: {
            id: user.id,
            password: user.password,
            name: user.name,
        },
    })
        .then(() => {
            alert("등록 완료");
            router.push('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

</script>
<style scoped>
.he {
    height: 78px;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
}

.ma {
    padding-top: 100px;
    z-index: -10;
}
</style>

