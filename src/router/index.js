// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ProdukView from '../views/ProdukView.vue'
import AnggotaView from '../views/AnggotaView.vue'
import BarangMasukView from '../views/BarangMasukView.vue'
import BarangKeluarView from '../views/BarangKeluarView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: DashboardView },
  { path: '/produk', component: ProdukView },
  { path: '/anggota', component: AnggotaView },
  { path: '/barang-masuk', component: BarangMasukView },
  { path: '/barang-keluar', component: BarangKeluarView },
  { path: '/login', component: LoginView },
  { path: '/logout', component: LogoutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 👇 Navigation Guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'
  if (to.path !== '/login' && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
