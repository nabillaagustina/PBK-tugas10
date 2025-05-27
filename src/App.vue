<template>
  <div :class="['app-container', { 'no-sidebar': !showSidebar }]">
    <SideNav v-if="showSidebar" />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SideNav from './components/SideNav.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showSidebar = computed(() => route.path !== '/')
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

/* Jika sidebar tidak muncul, konten ambil penuh */
.no-sidebar .page-content {
  width: 100%;
  display: flex;
  justify-content: center; /* Agar form login di tengah */
  align-items: center;
}

.page-content {
  flex: 1;
  padding: 2rem;
}
</style>
