import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeatherView from "@/views/WeatherView";
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView,
    beforeEnter: (to, from, next)=>{
      if (Object.keys(store.getters.getForecast).length > 0){
        next()
      }else {
        router.push('/')
      }
    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
