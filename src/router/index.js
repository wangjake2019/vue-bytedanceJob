import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/*webpackChunkName: "Home" */ "@/views/Home.vue"),
  },
  {
    path: "/products",
    name: "products",

    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",

    component: () => import(/* webpackChunkName: "jobs" */ "../views/Jobs.vue"),
  },
  {
    path: "/jobs/:id",
    name: "jobDetail",

    component: () =>
      import(/* webpackChunkName: "jobDetail" */ "../views/JobDetail.vue"),
  },
  {
    path: "/staff-stories/:id",
    name: "staff-story",

    component: () =>
      import(/* webpackChunkName: "staffStroy" */ "../views/StaffStory.vue"),
  },
  {
    path: "/user",
    name: "user",
    component() {
      return import(/* webpackChunkName: "user" */ "../views/User.vue");
    },
  },
  {
    path: "/resume",
    name: "resume",
    component: () =>
      import(/* webpackChunkName "resume"*/ "@/views/Resume.vue"),
  },
  {
    path: "/resume/edit",
    name: "resume-editor",
    component: () =>
      import(/* webpackChunkName "resume-editor"*/ "@/views/ResumeEditor.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  // base:
  //   process.env.NODE_ENV !== "production"
  //     ? process.env.BASE_URL
  //     : process.env.BASE_URL  ,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;

// router.beforeEach((to, from, next) => {
//   console.log('beforeeach')
//   document.scrollingElement.scrollTo(0, 0);
//   next()
// });



router.onError((err) => {
  if (err.name === "ChunkLoadError") {
    router.app.$notify.error("网络资源加载错误");
  }
});
