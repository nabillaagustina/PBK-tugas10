import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import Contact from '../views/Contact.vue'
import { Auth } from '../stores/auth'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/products', name: 'Product', component: Product, meta: { requiresAuth: true } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !Auth.isAuthenticated()) {
    next('/')
  } else {
    next()
  }
})

export default router
