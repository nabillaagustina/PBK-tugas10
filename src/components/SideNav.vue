<!-- src/components/SideNav.vue -->
<script setup>
import { useRouter } from 'vue-router'
import { Auth } from '../stores/auth'

const router = useRouter()
function logout() {
  Auth.logout()
  router.push('/')
}
</script>

<template>
  <div class="sidenav">
    <router-link to="/home">Home</router-link>
    <router-link to="/products">Product</router-link>
    <router-link to="/contact">Contact</router-link>
    <button @click="logout">Logout</button>
  </div>
</template>

<style scoped>
.sidenav {
  width: 200px;
  background: #14532d;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
a {
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
.router-link-active {
  background-color: #22c55e;
}
button {
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: auto;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #b91c1c;
}
</style>


