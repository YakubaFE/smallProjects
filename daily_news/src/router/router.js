import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/MainTamplate/MainNewsList.vue"
import MainNewsSearch from "@/components/MainTamplate/MainNewsSearch.vue"
import Corona from "@/components/quickNews/corona.vue"
import Ukraine from "@/components/quickNews/ukraina.vue"
import Science from "@/components/quickNews/science.vue"
import Business from "@/components/quickNews/business.vue"
import Entertainment from "@/components/quickNews/entertainment.vue"
import Health from "@/components/quickNews/health.vue"
import Sports from "@/components/quickNews/sports.vue"
import Technology from "@/components/quickNews/technology.vue"
const routes = [
  {
    path: "/",
    name: "MainNewsList",
    component: Home,
  },
  {
    path: "/corona",
    name: "coronahNews",
    component: Corona,
  },
  {
    path: "/ukraine",
    name: "ukraineNews",
    component: Ukraine,
    
  },
  {
    path: "/science",
    name: "scienceNews",
    component: Science,
  },
  {
    path: "/business",
    name: "businessNews",
    component: Business,
  },
  {
    path: "/entertainment",
    name: "entertainmentNews",
    component: Entertainment,
  },
  {
    path: "/health",
    name: "healthNews",
    component: Health,
  },
  {
    path: "/sports",
    name: "sportsNews",
    component: Sports,
  },
  {
    path: "/technology",
    name: "technologyhNews",
    component: Technology,
  },
  {
    path: "/search/:query",
    name: "newsSearch",
    component: MainNewsSearch,
    props: (route) => ({ query: route.query.q})
  },
];

const router =createRouter({
  history: createWebHistory(),
  routes,
});
export default router;