<template>
    <div class="header">
        <RouterLink class="main-link" :to="{ name: 'main' }">SSAFIT</RouterLink>
        <SearchComp class="SearchComp-link" />
        <div class="log-reg">
            <RouterLink class="my-link" :class="{ click: isClick1 }" :to="{ name: 'my' }" v-if="getUser"
                @click="isClick1 = !isClick1">my</RouterLink>
            <a href="#" class="my-link" v-if="getUser" @click="logout">logout</a>
            <RouterLink class="login-link" :class="{ click: isClick2 }" :to="{ name: 'login' }" v-else
                @click="isClick2 = !isClick2">login</RouterLink>
            <RouterLink class="regist-link" :class="{ click: isClick3 }" :to="{ name: 'regist' }" v-if="!getUser"
                @click="isClick3 = !isClick3">regist</RouterLink>
        </div>
    </div>
</template>

<script setup>
import SearchComp from '../SearchComp.vue';
import { computed, ref } from "vue";

const props = defineProps(["user"]);
const emits = defineEmits(["logout"]);

const getUser = computed(() => !!props.user);

const logout = () => {
    emits("logout");
};

const isClick1 = ref(false);
const isClick2 = ref(false);
const isClick3 = ref(false);



</script>

<style scoped>
.click {
    color: rgb(55, 182, 140);
    margin-bottom: 10px;
}

.header {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 20px 5px rgba(92, 99, 105, 0.2);
    margin-bottom: 40px;
    /* background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(187, 234, 255, 1) 100%); */
}

.main-link {
    width: 300px;
    font-size: 40px;
    font-weight: 700;
    transition: 0.2s;
}

.main-link:hover {
    width: 290px;
    padding-left: 10px;
    animation: rainbow 2.5s linear;
    animation-iteration-count: infinite;
}

@keyframes rainbow {

    100%,
    0% {
        color: rgb(255, 0, 0);
    }

    8% {
        color: rgb(255, 127, 0);
    }

    16% {
        color: rgb(255, 255, 0);
    }

    25% {
        color: rgb(127, 255, 0);
    }

    33% {
        color: rgb(0, 255, 0);
    }

    41% {
        color: rgb(0, 255, 127);
    }

    50% {
        color: rgb(0, 255, 255);
    }

    58% {
        color: rgb(0, 127, 255);
    }

    66% {
        color: rgb(0, 0, 255);
    }

    75% {
        color: rgb(127, 0, 255);
    }

    83% {
        color: rgb(255, 0, 255);
    }

    91% {
        color: rgb(255, 0, 127);
    }
}


.log-reg {
    width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
}

.login-link,
.regist-link,
.my-link {
    transition: 0.2s;
}

.login-link:hover,
.regist-link:hover,
.my-link:hover {
    color: rgb(55, 182, 140);
    margin-bottom: 10px;
}

a {
    text-decoration: none;
    color: black;
    font-size: 20px;
}
</style>