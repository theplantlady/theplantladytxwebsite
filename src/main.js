import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import VueScrollTo from 'vue-scrollto'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.directive('scroll-to', VueScrollTo.scrollTo)
app.use(router)
app.mount('#app')
