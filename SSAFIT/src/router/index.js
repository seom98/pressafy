import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import ReviewPage from "../views/ReviewPage.vue";
import ReviewList from "../components/review/ReviewList.vue";
import ReviewCreate from "../components/review/ReviewCreate.vue";
import ReviewDetail from "../components/review/ReviewDetail.vue";
import ReviewUpdate from "../components/review/ReviewUpdate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/regist",
      name: "regist",
      component: () => import("../views/RegistPage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/my",
      name: "my",
      component: () => import("../views/MyPage.vue"),
    },
    {
      path: "/review",
      name: "review",
      component: ReviewPage,
      children: [
        {
          path: ":url",
          name: "reviewList",
          component: ReviewList,
          children: [
            {
              path: "create",
              name: "reviewCreate",
              component: ReviewCreate,
            },
            {
              path: ":id",
              name: "reviewDetail",
              component: ReviewDetail,
            },
            {
              path: "update",
              name: "reviewUpdate",
              component: ReviewUpdate,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
